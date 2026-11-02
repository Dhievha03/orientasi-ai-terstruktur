(() => {
  'use strict';
  function trace(definition, answers = [], workspace) {
    if (!Array.isArray(answers) || answers.length > 64) return null;
    if (definition.simulate) return definition.simulate(answers,workspace);
    if (!definition.nodes) {
      if (answers.length) return null;
      const response=definition.responses.find(item=>item.id===definition.fixedRoute);
      if (!response) return null;
      return [{kind:'turn',id:'instruction',speaker:'user',text:response.text},
        ...definition.branches[definition.fixedRoute].map((turn,index)=>({...turn,kind:'turn',id:`turn-${index}`})),
        {kind:'end',id:'ending',ending:definition.fixedRoute}];
    }
    const frames=[],visited=new Set();
    let id=definition.entry,used=0;
    while(id && !visited.has(id)) {
      visited.add(id);
      const node=definition.nodes[id];
      if (!node) return null;
      const openingUser=definition.allowOpeningUser && id===definition.entry && frames.length===0;
      if (definition.userInputOnly && node.kind==='turn' && node.speaker==='user' && !openingUser) return null;
      frames.push({...node,id});
      if(node.kind==='end')return used===answers.length?frames:null;
      if(node.kind==='choice') {
        if(used===answers.length)return frames;
        const answer=answers[used++];
        if(!answer || answer.at!==id)return null;
        const option=node.options.find(item=>item.id===answer.option);
        if(!option)return null;
        frames.push({kind:'turn',id:`${id}:${option.id}`,speaker:'user',text:option.text,
          selection:{at:id,option:option.id,label:node.label,summary:option.summary,text:option.text,correction:Boolean(option.correction)}});
        id=option.next;
      } else if(node.kind==='turn')id=node.next;
      else return null;
    }
    return null;
  }
  function validate(definition,value,sceneKey) {
    if(!definition || !value || value.scene!==sceneKey)return null;
    const answers=value.answers || [];
    if(value.mode==='intro' && value.position===0 && value.route===null && Array.isArray(answers) && answers.length===0)
      return {scene:sceneKey,mode:'intro',route:null,position:0,answers:[]};
    const workspace=definition.workspace?definition.cleanWorkspace(value.workspace):undefined;
    const frames=trace(definition,answers,workspace);
    if(!frames || !Number.isInteger(value.position) || value.position<0 || value.position>=frames.length)return null;
    const frame=frames[value.position];
    if(({dialog:'turn',choice:'choice',end:'end'})[value.mode]!==frame.kind)return null;
    if(frames.slice(0,value.position+1).filter(item=>item.selection).length!==answers.length)return null;
    const route=frame.kind==='end'?frame.ending:definition.fixedRoute||null;
    if(value.route!==route)return null;
    return {scene:sceneKey,mode:value.mode,route,position:value.position,answers:answers.map(item=>({at:item.at,option:item.option,...(definition.workspace?{evidence:definition.cleanWorkspace(item.evidence)}:{})})),...(definition.workspace?{workspace}:{})};
  }
  function initial(definition,sceneKey) {
    return {scene:sceneKey,mode:'dialog',route:definition.fixedRoute||null,position:0,answers:[]};
  }
  function summary(definition,snapshot,sceneKey) {
    const saved=validate(definition,snapshot,sceneKey);
    if(saved?.mode!=='end')return null;
    const frames=trace(definition,saved.answers,saved.workspace),decisions=frames.filter(frame=>frame.selection).map(frame=>frame.selection);
    const recovered=decisions.some(item=>item.correction);
    const result=definition.summarize?definition.summarize(frames,definition.conclusions[saved.route],saved.workspace):{...definition.conclusions[saved.route]};
    if(saved.route==='good' && recovered)result.verdict='Arah sempat melebar, lalu diperbaiki sebelum hasil diterima.';
    const history=definition.history?definition.history(decisions,saved.workspace):decisions;
    return {result,decisions:history,recovered,route:saved.route,quote:decisions.at(-1)?.text||frames[0].text,quoteType:decisions.at(-1)?.type||'chat'};
  }
  window.TEFA_DIALOGUE_FLOW={trace,validate,initial,summary};
})();
