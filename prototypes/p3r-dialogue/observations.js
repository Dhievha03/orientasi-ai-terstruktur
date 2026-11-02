(() => {
  'use strict';
  const example=window.TEFA_REGISTRATION_EXAMPLE;
  const logicKeys=['checkResponse','fieldErrors','keepValues'];
  const logicKey=state=>JSON.stringify(logicKeys.map(key=>state[key]===true));
  const topics=['response','errors','reset','accepted','rejected-match','fields','choices','design','general'];
  const at=value=>Number.isInteger(value)&&value>=0&&value<=64?value:0;
  const cleanRange=value=>value&&Number.isInteger(value.start)&&Number.isInteger(value.end)&&value.start>=0&&value.end>=value.start&&value.end<10000?{start:value.start,end:value.end}:null;
  const codeKey=focus=>`code:${focus.file}:${focus.topic}:${focus.key}${focus.range?`:${focus.range.start}-${focus.range.end}`:''}`;
  function cleanAttempt(value){
    if(!value||typeof value!=='object')return null;
    return {input:example.normalize(value.input),...(value.valuesAfter&&typeof value.valuesAfter==='object'?{valuesAfter:example.normalize(value.valuesAfter)}:{}),after:at(value.after),serial:Number.isInteger(value.serial)&&value.serial>=0?value.serial:0,...Object.fromEntries(logicKeys.map(key=>[key,value[key]===true]))};
  }
  function cleanWorkspace(value){
    const focus=value?.focus;
    const selection=value?.selection;
    const validSelection=selection&&['html','css','js'].includes(selection.file)&&typeof selection.key==='string'&&selection.key.length<=240&&cleanRange(selection.range);
    const validFocus=focus&&['response','code','appearance'].includes(focus.kind)&&topics.includes(focus.topic)&&typeof focus.key==='string'&&focus.key.length<=240&&(!focus.range||Boolean(cleanRange(focus.range)));
    const attempts=Array.isArray(value?.attempts)?value.attempts.slice(-30).map(cleanAttempt).filter(Boolean):[];
    const events=Array.isArray(value?.events)?value.events.slice(-80).filter(item=>item&&['view','code','response','appearance','submit'].includes(item.kind)).map(item=>({kind:item.kind,after:at(item.after),view:['ai','code','apps'].includes(item.view)?item.view:'ai',file:['html','css','js'].includes(item.file)?item.file:'js',topic:topics.includes(item.topic)?item.topic:'response',serial:Number.isSafeInteger(item.serial)&&item.serial>=0?item.serial:0,...(cleanRange(item.range)?{range:cleanRange(item.range)}:{})})):[];
    return {
      input:example.normalize(value?.input),
      attempts,events,sequence:Math.max(0,...attempts.map(item=>item.serial),Number.isSafeInteger(value?.sequence)?value.sequence:0),
      records:Array.isArray(value?.records)?value.records.slice(-30).map(example.normalize):[],
      view:['ai','code','apps'].includes(value?.view)?value.view:'ai',
      file:['html','css','js'].includes(value?.file)?value.file:'js',
      selection:validSelection?{file:selection.file,key:selection.key,range:cleanRange(selection.range)}:null,
      viewedCode:value?.viewedCode===true,viewedApps:value?.viewedApps===true,
      focus:validFocus?{kind:focus.kind,topic:focus.topic,key:focus.key,after:at(focus.after),file:['html','css','js'].includes(focus.file)?focus.file:'js',...(cleanRange(focus.range)?{range:cleanRange(focus.range)}:{})}:null
    };
  }
  function responseFindings(workspace,state){
    const saved=cleanWorkspace(workspace);
    const attempt=saved.attempts.findLast(item=>logicKeys.every(key=>item[key]===state[key]));
    if(!attempt)return [];
    const result=example.backend(attempt.input),key=`${logicKey(state)}:${attempt.serial}`;
    const lost=attempt.valuesAfter?Object.keys(attempt.input).filter(field=>attempt.input[field].trim()&&!attempt.valuesAfter[field].trim()):[];
    const validLost=lost.filter(field=>!Object.hasOwn(result.body.errors,field));
    const allCleared=attempt.valuesAfter&&Object.values(attempt.valuesAfter).every(value=>!value.trim());
    const resetCase=validLost.length?Object.keys(result.body.errors).length===1&&allCleared?'single-error':'valid-lost':'invalid-only';
    const item=(topic)=>({kind:'response',topic,key,after:attempt.after,observationKey:`response:${topic}:${key}`,result,input:attempt.input,lost,validLost,resetCase});
    if(result.body.success)return [item('accepted')];
    const findings=[];
    if(!state.checkResponse)findings.push(item('response'));
    if(!state.fieldErrors)findings.push(item('errors'));
    if(!state.keepValues&&lost.length)findings.push(item('reset'));
    if(!findings.length)findings.push(item('rejected-match'));
    return findings;
  }
  function candidates(value,state,after){
    const workspace=cleanWorkspace(value),focus=workspace.focus;
    const reported=state.reported||[];
    const responses=responseFindings(workspace,state);
    if(focus&&focus.after===after){
      if(focus.kind==='response'){
        const selected=responses.find(item=>item.key===focus.key&&item.topic===focus.topic);
        if(selected&&!reported.includes(selected.observationKey))return [selected];
      }
      if(focus.kind==='code'&&example.sourceKey(state,focus.file)===focus.key){
        const section=focus.range?example.codeSelection(state,focus.file,focus.range.start,focus.range.end):example.codeSections(state,focus.file).find(item=>item.id===focus.topic);
        const item={...focus,observationKey:codeKey(focus)};
        if(section?.id===focus.topic&&!reported.includes(item.observationKey))return [item];
      }
      if(focus.kind==='appearance'&&state.created&&state.filesAvailable&&focus.key===example.sourceKey(state,'css')){
        const item={...focus,observationKey:`appearance:${focus.key}`};
        if(!reported.includes(item.observationKey))return [item];
      }
    }
    return responses.filter(item=>item.after===after&&!reported.includes(item.observationKey)).slice(0,1);
  }
  function evidence(value,state){
    const workspace=cleanWorkspace(value);
    const matches=workspace.attempts.filter(item=>logicKeys.every(key=>item[key]===state[key]));
    return {workspace,rejected:matches.some(item=>example.backend(item.input).status===422),accepted:matches.some(item=>example.backend(item.input).status===200)};
  }
  function history(choices,value){
    const saved=cleanWorkspace(value),result=[];
    const names={ai:'AI',code:'Kode',apps:'Apps'};
    const files={html:'index.html',css:'styles.css',js:'app.js'};
    const topicNames={response:'penanganan response',errors:'pesan per isian',reset:'reset formulir',accepted:'pendaftaran diterima','rejected-match':'penolakan yang sesuai',fields:'label dan isian',choices:'pilihan kelas dan kegiatan',design:'tampilan formulir',general:'bagian kode biasa'};
    for(let index=0;index<=choices.length;index++){
      for(const event of saved.events.filter(item=>item.after===index)){
        let text;
        if(event.kind==='view')text=`Membuka halaman ${names[event.view]}.`;
        if(event.kind==='code')text=`Memilih ${topicNames[event.topic]} pada ${files[event.file]}${event.range?` baris ${event.range.start+1} sampai ${event.range.end+1}`:''} untuk dibahas.`;
        if(event.kind==='appearance')text='Memilih tampilan formulir untuk dibahas.';
        if(event.kind==='response')text=`Memilih pengamatan tentang ${topicNames[event.topic]} untuk dibahas.`;
        if(event.kind==='submit'){
          const attempt=saved.attempts.find(item=>item.serial===event.serial);
          if(!attempt)continue;
          const response=example.backend(attempt.input);
          text=response.body.success?'Mengirim formulir. Backend menerima pendaftaran.':attempt.checkResponse?'Mengirim formulir. Backend menolak dan frontend menampilkan gagal.':'Mengirim formulir. Backend menolak, tetapi frontend menampilkan berhasil.';
        }
        if(text)result.push({label:'Aktivitas',type:'activity',text,summary:text});
      }
      if(choices[index]){
        result.push(choices[index]);
        if(choices[index].reviewNote)result.push({label:'Respons AI',type:'activity',text:choices[index].reviewNote,summary:choices[index].reviewNote});
      }
    }
    return result;
  }
  window.TEFA_REGISTRATION_OBSERVATIONS={cleanWorkspace,cleanAttempt,logicKey,responseFindings,candidates,evidence,history,codeKey};
})();
