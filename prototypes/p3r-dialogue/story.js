(() => {
  'use strict';

  const $ = selector => document.querySelector(selector);
  const scene = $('#scene');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const query = new URLSearchParams(location.search);
  const sceneKey = Object.hasOwn(window.TEFA_DIALOGUE_SCENES, query.get('scene')) ? query.get('scene') : 'database';
  const definition = window.TEFA_DIALOGUE_SCENES[sceneKey];
  const { fixedRoute } = definition;
  const flow = window.TEFA_DIALOGUE_FLOW;
  const embedded = window.parent !== window && query.has('embed');
  let hostMotion = true;
  const motion = () => hostMotion && !reducedMotion.matches;
  const speakerLabel = speaker => speaker === 'user' ? 'User' : speaker === 'narrator' ? 'Narator' : speaker==='students'?'Murid lain':'AI';
  const expressionLabel=emotion=>({shock:'terkejut',stress:'stres',silence:'hening',anger:'marah',fury:'sangat marah',teasing:'tertawa mengejek'}[emotion]||'tenang');
  if (embedded) document.body.classList.add('embedded');
  const send = (action, extra = {}) => {
    if (embedded) window.parent.postMessage({ type: 'tefa-dialogue', scene: sceneKey, action, ...extra }, '*');
  };
  const snapshot = () => ({ scene: sceneKey, route, position, mode, answers,...(workspace?{workspace:workspace.evidence()}:{}) });
  const publish = () => send('progress', { snapshot: snapshot() });

  let mode = 'intro';
  let frames = flow.trace(definition);
  let answers = [];
  let position = 0;
  let route = null;
  let history = [];
  let typing = null;
  let characters = [];
  let characterIndex = 0;
  let assetReady = false;
  let logTrigger = null;
  let reactionAnimations = [];
  let turnAnimations = [];
  let screenShake;
  let overheatKey=null;
  let heatEffects=[];
  let heatGeneration=0;
  let heatRunning=false;
  let heatPaused=false;
  let effectPosition=null;
  let selectingResponse=false;
  let conclusionSent=false;
  const workspace=definition.workspace?window.TEFA_REGISTRATION_WORKSPACE.create({
    answerCount:()=>answers.length,
    endingLocked:()=>frames.at(-1)?.kind==='end',
    change:()=>{syncHeatEffects();publish();},
    refresh:()=>{
      if(mode!=='choice')return;
      frames=flow.trace(definition,answers,workspace.evidence());
      showChoices(frames[position]);
    }
  }):null;
  scene.dataset.setting = sceneKey;
  scene.dataset.autoConclusion = String(Boolean(definition.autoConclusion));

  $('#scene-title').textContent = definition.title;
  $('.intro-context').textContent = definition.context;
  const requirementList = $('#scene-requirements');
  for (const [label, text] of definition.requirements || []) {
    const item = document.createElement('li');
    const heading = document.createElement('strong');
    heading.textContent = `${label}: `;
    item.append(heading, document.createTextNode(text));
    requirementList.append(item);
  }
  requirementList.hidden = !definition.requirements;

  function clearTurnMotion() {
    turnAnimations.forEach(animation => animation.cancel());
    turnAnimations = [];
    screenShake?.cancel();
    screenShake = null;
    $('#next').disabled=false;
    delete scene.dataset.effect;
  }

  function playTurnEffect() {
    if(mode!=='dialog'||sceneKey!=='micro'||frames[position]?.effect!=='nuclear-shake'||effectPosition===position)return;
    effectPosition=position;
    if(!motion())return;
    scene.dataset.effect='nuclear-shake';
    $('#next').disabled=true;
    const animation=scene.animate([
      {transform:'translate3d(0,0,0) rotate(0)'},
      {transform:'translate3d(-7px,3px,0) rotate(-.18deg)',offset:.15},
      {transform:'translate3d(7px,-3px,0) rotate(.18deg)',offset:.3},
      {transform:'translate3d(-5px,2px,0) rotate(-.12deg)',offset:.48},
      {transform:'translate3d(4px,-2px,0) rotate(.1deg)',offset:.65},
      {transform:'translate3d(-2px,1px,0) rotate(-.05deg)',offset:.82},
      {transform:'translate3d(0,0,0) rotate(0)'}
    ],{duration:650,easing:'ease-out'});
    screenShake=animation;
    animation.finished.catch(()=>{}).then(()=>{
      if(screenShake!==animation)return;
      $('#next').disabled=false;
      delete scene.dataset.effect;
    });
  }

  function syncPortraits(speaker) {
    if (sceneKey !== 'micro') return;
    document.querySelectorAll('.portrait').forEach(portrait => {
      portrait.hidden = speaker==='intro'?!['portrait-ai','portrait-user'].includes(portrait.id):portrait.id!==`portrait-${speaker}`;
    });
    const pupil=speaker==='students'?frames[position]?.pupil||'left':null;
    $('#portrait-students').querySelectorAll('[data-pupil]').forEach(node=>{node.hidden=node.dataset.pupil!==pupil;});
    if(pupil)scene.dataset.pupil=pupil;
    else delete scene.dataset.pupil;
  }

  function shakeScreen(emotion) {
    if (sceneKey !== 'database' || !motion() || !['anger','fury'].includes(emotion)) return;
    const heavy = emotion === 'fury';
    screenShake = scene.animate(
      heavy
        ? [
            { transform:'translate3d(0,0,0) rotate(0)' },
            { transform:'translate3d(-3px,1px,0) rotate(-.08deg)',offset:.16 },
            { transform:'translate3d(3px,-1px,0) rotate(.08deg)',offset:.34 },
            { transform:'translate3d(-2px,1px,0) rotate(-.06deg)',offset:.52 },
            { transform:'translate3d(2px,-1px,0) rotate(.05deg)',offset:.7 },
            { transform:'translate3d(-1px,0,0) rotate(-.03deg)',offset:.86 },
            { transform:'translate3d(0,0,0) rotate(0)' }
          ]
        : [
            { transform:'translate3d(0,0,0) rotate(0)' },
            { transform:'translate3d(-1.5px,.5px,0) rotate(-.04deg)',offset:.25 },
            { transform:'translate3d(1.5px,-.5px,0) rotate(.04deg)',offset:.5 },
            { transform:'translate3d(-1px,0,0) rotate(-.02deg)',offset:.75 },
            { transform:'translate3d(0,0,0) rotate(0)' }
          ],
      { duration:heavy?300:220,easing:'ease-out' }
    );
  }

  function animateTurn(previousSpeaker, instant) {
    clearTurnMotion();
    if (!motion() || instant || scene.dataset.emotion === 'silence') return;
    const changed = previousSpeaker !== `${scene.dataset.speaker}:${scene.dataset.pupil||''}`;
    turnAnimations.push($('.spoken-line').animate(
      [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: changed ? 260 : 190, easing: 'cubic-bezier(.16,1,.3,1)' }
    ));
    if (!changed) return;
    const direction = scene.dataset.speaker === 'user' ? 1 : -1;
    turnAnimations.push($('.nameplate').animate(
      [{ opacity: 0, transform: `translateX(${direction * 12}px)` }, { opacity: 1, transform: 'translateX(0)' }],
      { duration: 260, easing: 'cubic-bezier(.16,1,.3,1)' }
    ));
    if (scene.dataset.emotion !== 'neutral') return;
    const portrait = $(`#portrait-${scene.dataset.speaker}`);
    if (!portrait) return;
    turnAnimations.push(portrait.animate(
      [{ opacity: 0, transform: `translateX(${direction * 20}px)` }, { opacity: 1, transform: 'translateX(0)' }],
      { duration: 340, easing: 'cubic-bezier(.16,1,.3,1)' }
    ));
  }

  function stopHeatEffects() {
    heatGeneration++;
    heatRunning=false;
    for(const effect of heatEffects){effect.animation?.cancel();effect.animation=null;}
    scene.classList.remove('heat-animated');
  }

  function animateHeatCycle(effect,generation,first=false) {
    if(!heatRunning||generation!==heatGeneration||!effect.node.isConnected)return;
    effect.animation?.cancel();
    const random=(min,max)=>min+Math.random()*(max-min);
    const {node,heat,plume,index}=effect;
    let keyframes,duration,delay;
    if(plume){
      const x=Math.max(2,Math.min(82,plume.x+random(-4,4)));
      const y=Math.max(6,Math.min(44,plume.y+random(-3,3)));
      const drift=plume.drift*random(.7,1.15),rise=random(30,55);
      node.style.setProperty('--smoke-x',`${x}%`);
      node.style.setProperty('--smoke-y',`${y}%`);
      node.style.setProperty('--smoke-size',String(plume.size*random(.85,1.12)));
      const use=node.querySelector('use'),previous=Number(use.getAttribute('href').slice(-1));
      use.setAttribute('href',`#comic-smoke-${(previous+1+Math.floor(random(0,3)))%4}`);
      keyframes=[
        {opacity:0,transform:'translate(0,12px) scale(.35,.65) rotate(0deg)'},
        {opacity:heat===4?.96:.84,transform:`translate(${drift*.2}px,0) scale(.72,.9) rotate(${random(-4,4)}deg)`,offset:.24},
        {opacity:.68,transform:`translate(${drift*.65}px,${-rise*.45}px) scale(1.02,1.05) rotate(${random(-6,6)}deg)`,offset:.62},
        {opacity:0,transform:`translate(${drift}px,${-rise}px) scale(1.3,1.12) rotate(${random(-9,9)}deg)`}
      ];
      duration=random(1800,2700)/(1+(heat-1)*.1);
      delay=first?index*random(70,140)+random(0,140):random(180,850)/(1+(heat-1)*.15);
    }else{
      node.style.left=`${index?random(58,76):random(20,40)}%`;
      node.style.top=`${random(6,22)}%`;
      node.style.rotate=`${random(-25,25)}deg`;
      keyframes=[{opacity:0,scale:.8},{opacity:1,scale:1,offset:.35},{opacity:0,scale:1.05}];
      duration=random(180,320);
      delay=first?random(200,800)+index*320:random(1200,2600);
    }
    const animation=node.animate(keyframes,{duration,delay,iterations:1,easing:'ease-out',fill:'both'});
    effect.animation=animation;
    animation.finished.then(()=>animateHeatCycle(effect,generation)).catch(()=>{});
  }

  function syncHeatEffects() {
    const available=Boolean(overheatKey&&mode==='dialog'&&scene.dataset.speaker==='ai'&&!scene.hidden&&(!workspace||workspace.isAI()));
    const button=$('#heat-motion');
    button.hidden=!available;
    button.disabled=!motion();
    button.textContent=heatPaused?'Lanjutkan efek':'Jeda efek';
    button.setAttribute('aria-label',heatPaused?'Lanjutkan efek overheat':'Jeda efek overheat');
    button.setAttribute('aria-pressed',String(heatPaused));
    const running=available&&motion()&&!heatPaused&&!document.hidden&&!$('#history').open;
    if(!running){if(heatRunning)stopHeatEffects();return;}
    if(heatRunning)return;
    heatRunning=true;
    const generation=++heatGeneration;
    scene.classList.add('heat-animated');
    heatEffects.forEach(effect=>animateHeatCycle(effect,generation,true));
  }

  function clearEmotion() {
    stopHeatEffects();
    heatEffects=[];
    reactionAnimations.forEach(animation => animation.cancel());
    reactionAnimations = [];
    overheatKey=null;
    $('#heat-motion').hidden=true;
    document.querySelectorAll('.emotion-layer').forEach(layer => layer.replaceChildren());
    scene.dataset.emotion = 'neutral';
    delete scene.dataset.reaction;
  }

  function showEmotion(turn) {
    const key=turn.emotion==='overheat'&&turn.speaker==='ai'?`${turn.heat||1}:${turn.expression||'neutral'}`:null;
    if(key&&overheatKey===key&&$('#portrait-ai .comic-smoke')){syncHeatEffects();return;}
    clearEmotion();
    const emotion = turn.emotion || 'neutral';
    scene.dataset.emotion = emotion;
    if (['neutral', 'silence'].includes(emotion)) return;
    const target = turn.reaction || turn.speaker;
    scene.dataset.reaction = target;
    const portrait = $(`#portrait-${target}`);
    if (!portrait) return;
    const layers=target==='students'?[portrait.querySelector('.student:not([hidden]) > .emotion-layer')]:[portrait.querySelector(':scope > .emotion-layer')];
    const layer=layers[0];
    const smoke = emotion === 'overheat';
    if(smoke&&target==='ai')overheatKey=key;
    const symbol = smoke ? 'smoke' : ['anger', 'fury'].includes(emotion) ? 'anger' : emotion;
    const plumes=[
      {x:4,y:8,size:.78,drift:-34,rise:34,duration:2400,delay:0},
      {x:68,y:13,size:.84,drift:39,rise:40,duration:2900,delay:160},
      {x:13,y:35,size:.68,drift:-44,rise:38,duration:2600,delay:430},
      {x:75,y:39,size:.72,drift:48,rise:46,duration:3000,delay:600},
      {x:36,y:8,size:.6,drift:13,rise:30,duration:3200,delay:800},
      {x:42,y:42,size:.66,drift:-23,rise:50,duration:2800,delay:1000}
    ];
    const count = smoke ? Math.min(6,(turn.heat || 1)+2) : emotion === 'fury' ? 3 : 1;
    for (let index = 0; index < count; index += 1) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', smoke?'0 0 100 120':'0 0 100 100');
      svg.setAttribute('class', `comic-expression comic-${symbol} comic-position-${index}`);
      const plume=plumes[index];
      if (smoke){
        svg.style.setProperty('--smoke-x',`${plume.x}%`);
        svg.style.setProperty('--smoke-y',`${plume.y}%`);
        svg.style.setProperty('--smoke-size',String(plume.size));
        svg.classList.toggle('is-critical',turn.heat === 4);
      }
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', smoke?`#comic-smoke-${index%4}`:`#comic-${symbol}`);
      svg.append(use);
      layer.append(svg);
      if(smoke)heatEffects.push({node:svg,plume,index,heat:turn.heat||1,animation:null});
    }
    if(smoke&&turn.expression&&!['neutral','silence'].includes(turn.expression)){
      const expression=document.createElementNS('http://www.w3.org/2000/svg','svg');
      const symbol=['anger','fury'].includes(turn.expression)?'anger':turn.expression;
      expression.setAttribute('viewBox','0 0 100 100');
      expression.setAttribute('class',`comic-expression comic-${symbol}`);
      const use=document.createElementNS('http://www.w3.org/2000/svg','use');
      use.setAttribute('href',`#comic-${symbol}`);expression.append(use);layer.append(expression);
    }
    if(smoke){
      for(let index=0;index<(turn.heat>=3?2:1);index++){
        const spark=document.createElementNS('http://www.w3.org/2000/svg','svg');
        spark.setAttribute('viewBox','0 0 100 100');
        spark.setAttribute('class',`comic-spark spark-${index}`);
        const use=document.createElementNS('http://www.w3.org/2000/svg','use');
        use.setAttribute('href','#comic-spark');spark.append(use);layer.append(spark);
        heatEffects.push({node:spark,index,heat:turn.heat||1,animation:null});
      }
    }
    if(smoke){syncHeatEffects();return;}
    if(!motion())return;
    const frames = emotion === 'shock'
      ? [{ transform: 'translateX(0)' }, { transform: 'translateX(15px) rotate(3deg)' }, { transform: 'translateX(0)' }]
      : [{ transform: 'translateX(0)' }, { transform: 'translateX(-7px)' }, { transform: 'translateX(7px)' }, { transform: 'translateX(-3px)' }, { transform: 'translateX(0)' }];
    if (emotion !== 'stress') reactionAnimations.push(portrait.animate(frames, { duration: emotion === 'fury' ? 350 : 260, easing: 'ease-out' }));
  }

  function setMode(nextMode) {
    mode = nextMode;
    scene.dataset.mode = nextMode;
    document.body.dataset.mode = nextMode;
    $('#intro').hidden = nextMode !== 'intro';
    $('#playfield').hidden = !['dialog', 'choice'].includes(nextMode);
    $('#choices').hidden = nextMode !== 'choice';
    $('#ending').hidden = nextMode !== 'end';
    $('#conclusion').hidden = nextMode !== 'conclusion';
    $('#keyboard-hint').hidden = nextMode !== 'dialog';
    $('#log').disabled = history.length === 0;
    workspace?.sync(frames[position],nextMode);
    syncHeatEffects();
  }

  function renderDialogueText(element,text){
    if(!text.includes('😹')){element.textContent=text;return;}
    element.replaceChildren();
    for(const part of text.split(/(😹)/u)){
      if(part==='😹'){
        const image=document.createElement('img');
        image.className='dialogue-emoji';image.src='assets/google-noto-cat-tears-of-joy.svg';
        image.width=128;image.height=128;image.alt='😹';image.decoding='async';
        element.append(image);
      }else if(part)element.append(document.createTextNode(part));
    }
  }

  function completeText() {
    clearInterval(typing);
    typing = null;
    renderDialogueText($('#spoken-text'),characters.join(''));
    $('#next-label').textContent = definition.autoConclusion&&frames[position+1]?.kind==='end'?'Lihat hasil':'Lanjut';
    playTurnEffect();
  }

  function writeText(text) {
    clearInterval(typing);
    characters = Array.from(text);
    characterIndex = 0;
    renderDialogueText($('#line-reserve'),text);
    $('#accessible-line').textContent = text;
    $('#spoken-text').textContent = '';
    $('#next-label').textContent = 'Tampilkan teks';
    if (!motion()) {
      completeText();
      return;
    }
    typing = setInterval(() => {
      characterIndex = Math.min(characterIndex + 2, characters.length);
      renderDialogueText($('#spoken-text'),characters.slice(0, characterIndex).join(''));
      if (characterIndex === characters.length) completeText();
    }, 24);
  }

  function renderTurn(instant = false) {
    const turn = frames[position];
    const previousSpeaker = mode === 'dialog' ? `${scene.dataset.speaker}:${scene.dataset.pupil||''}` : null;
    clearTurnMotion();
    setMode('dialog');
    scene.dataset.speaker = turn.speaker;
    scene.dataset.reactionOnly=String(Boolean(turn.visualOnly));
    scene.dataset.silentLine=String(/^(?:\.{3}|…)$/.test(turn.text.trim()));
    syncPortraits(turn.speaker);
    $('#speaker-name').textContent = speakerLabel(turn.speaker);
    showEmotion(turn);
    history = frames.slice(0,position+1).filter(frame=>frame.kind==='turn');
    $('#log').disabled = false;
    $('#announcer').textContent = turn.visualOnly?`Reaksi User: ${expressionLabel(turn.emotion)}. Lanjutkan untuk membaca akibatnya.`:`${$('#speaker-name').textContent}: ${turn.text}`;
    writeText(turn.text);
    animateTurn(previousSpeaker, instant);
    shakeScreen(turn.emotion);
    scene.focus({ preventScroll: true });
    publish();
  }

  function showChoices(frame) {
    if(workspace){
      const refreshed=flow.trace(definition,answers,workspace.evidence());
      if(refreshed){frames=refreshed;frame=frames[position];}
    }
    clearEmotion();
    clearTurnMotion();
    history = frames.slice(0,position).filter(item=>item.kind==='turn');
    const previous=history.at(-1);
    writeText(frame.prompt||previous?.text||'');
    completeText();
    setMode('choice');
    scene.dataset.reactionOnly='false';
    scene.dataset.silentLine='false';
    scene.dataset.speaker = 'user';
    syncPortraits('user');
    $('#speaker-name').textContent = speakerLabel(frame.prompt?'user':previous?.speaker||'ai');
    if(sceneKey==='micro')showEmotion({speaker:'user',emotion:'neutral'});
    $('.choice-instruction').textContent = frame.label;
    $('.choice-instruction').hidden = !frame.label;
    $('#choice-list').replaceChildren(...frame.options.map(response => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.choice = response.id;
      button.textContent = response.text;
      button.addEventListener('click', () => selectResponse(response));
      button.addEventListener('focus', () => highlightChoice(button));
      button.addEventListener('pointermove',event=>{
        if(event.pointerType!=='touch'&&document.activeElement!==button)button.focus({preventScroll:true});
      });
      return button;
    }));
    $('#announcer').textContent = 'Pilih jawaban User dengan panah atas atau bawah, lalu Enter.';
    const firstChoice=$('#choice-list button:not([hidden])');
    highlightChoice(firstChoice);
    firstChoice.focus({ preventScroll: true });
    publish();
  }

  function highlightChoice(button) {
    if(!button)return;
    $('#choice-list').querySelectorAll('button').forEach(item => item.classList.toggle('is-selected', item === button));
  }

  function selectResponse(response) {
    if(mode!=='choice'||selectingResponse)return;
    const current=frames[position];
    if(current?.kind!=='choice'||!current.options.some(option=>option.id===response.id))return;
    selectingResponse=true;
    try{
      const nextAnswers=[...answers,{at:current.id,option:response.id,...(workspace?{evidence:workspace.evidence()}:{})}];
      const nextFrames=flow.trace(definition,nextAnswers,workspace?.evidence());
      if(!nextFrames)return;
      answers=nextAnswers;
      frames=nextFrames;
      position+=1;
      renderFrame();
    }finally{selectingResponse=false;}
  }

  function startScene() {
    clearInterval(typing);
    typing=null;
    conclusionSent=false;
    effectPosition=null;
    workspace?.reset();
    route = fixedRoute||null;
    answers=[];
    history = [];
    frames = flow.trace(definition,[],workspace?.evidence());
    position = 0;
    renderFrame();
  }

  function renderFrame(instant = false) {
    const frame=frames[position];
    if(frame.kind==='choice')showChoices(frame);
    else if(frame.kind==='end')showEnding();
    else renderTurn(instant);
  }

  function advance() {
    if (mode !== 'dialog' || $('#history').open || scene.dataset.effect==='nuclear-shake') return;
    if (typing) { completeText(); return; }
    if(!frames[position+1])return;
    position += 1;
    renderFrame();
  }

  function showEnding() {
    clearInterval(typing);
    typing=null;
    clearTurnMotion();
    clearEmotion();
    syncPortraits('end');
    route=frames[position].ending;
    history=frames.slice(0,position).filter(frame=>frame.kind==='turn');
    setMode('end');
    const impact = frames[position].impact || definition.conclusions[route].impact;
    $('#ending-title').textContent = impact;
    $('#announcer').textContent = `${impact} Pilih Lihat hasil untuk membaca pembahasannya.`;
    publish();
    if(definition.autoConclusion){showConclusion();return;}
    $('#open-conclusion').focus({ preventScroll: true });
  }

  function reset() {
    clearInterval(typing);
    typing = null;
    clearEmotion();
    clearTurnMotion();
    effectPosition=null;
    workspace?.reset();
    if ($('#history').open) $('#history').close();
    route = null;
    position = 0;
    history = [];
    answers=[];
    frames=flow.trace(definition);
    $('#conclusion').replaceChildren();
    $('#history-list').replaceChildren();
    scene.dataset.speaker = 'ai';
    syncPortraits('intro');
    if (embedded) startScene();
    else { setMode('intro'); $('#start').focus({ preventScroll: true }); }
    window.scrollTo({ top: 0, behavior: 'instant' });
    publish();
  }

  function showConclusion() {
    if (mode !== 'end' || !route) return;
    if(embedded){if(!conclusionSent){conclusionSent=true;send('conclusion');}return;}
    const summary=flow.summary(definition,snapshot(),sceneKey),content=summary.result;
    $('#conclusion').classList.toggle('conclusion--micro',Boolean(definition.autoConclusion));
    if(definition.autoConclusion){
      const labels=content.labels;
      $('#conclusion').innerHTML=`<div class="conclusion-heading"><h2 id="conclusion-title" tabindex="-1"></h2><p id="conclusion-outcome" class="conclusion-outcome"></p><button class="secondary-button" type="button" id="retry-choice">Ulangi</button></div><div class="conclusion-body"><div class="conclusion-tabs" role="group" aria-label="Bagian hasil">${labels.map((label,index)=>`<button type="button" data-reading="${index}" aria-pressed="${index===0}">${label}</button>`).join('')}</div><div class="conclusion-reading-viewport" tabindex="0" role="region" aria-label="${labels[0]}"><p id="conclusion-reading"></p><ol id="decision-history" class="decision-history" aria-label="Riwayat pilihan" hidden></ol></div></div>`;
      $('#conclusion-outcome').textContent=content.consequence;
      $('#conclusion-reading').textContent=content.reason;
      document.querySelectorAll('[data-reading]').forEach(button=>button.addEventListener('click',()=>{
        const index=Number(button.dataset.reading);
        document.querySelectorAll('[data-reading]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
        $('#conclusion-reading').hidden=index===3;
        $('#decision-history').hidden=index!==3;
         $('#conclusion-reading').textContent=content[['reason','evidence','next'][index]]||'';
         $('.conclusion-reading-viewport').setAttribute('aria-label',labels[index]);
         $('.conclusion-reading-viewport').scrollTop=0;
      }));
    }else{
      $('#conclusion').innerHTML = `<div class="conclusion-heading"><p class="section-label">PEMBAHASAN</p><h2 id="conclusion-title" tabindex="-1"></h2><blockquote class="chosen-quote"></blockquote></div><div class="conclusion-body"><div class="verdict"></div><section><h3>Letak kesalahan</h3><p data-summary="reason"></p></section><section><h3>Akibat</h3><p data-summary="consequence"></p></section><section><h3>Prinsip kerja</h3><p data-summary="next"></p></section><ol id="decision-history" class="decision-history"></ol><div class="conclusion-actions"><button class="primary-button" type="button" id="retry-choice">${fixedRoute ? 'Ulangi' : 'Coba pilihan lain'}</button><button class="secondary-button" type="button" id="restart-scene">Ke awal</button></div></div>`;
      $('.chosen-quote').textContent=summary.quoteType==='activity'?`Aktivitas: ${summary.quote}`:`“${summary.quote}”`;
      $('.verdict').textContent=content.verdict;
      ['consequence','reason','next'].forEach(key=>$(`[data-summary="${key}"]`).textContent=content[key]);
      $('#restart-scene').addEventListener('click',reset);
    }
    $('#conclusion-title').textContent = content.title;
    $('#conclusion-title').style.whiteSpace = 'pre-line';
    $('#retry-choice').addEventListener('click', () => {
      $('#conclusion').replaceChildren();
      startScene();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    for(const decision of summary.decisions){const item=document.createElement('li');item.textContent=`${decision.label}: ${decision.processed===false?'Tidak dikerjakan. ':''}${definition.autoConclusion?decision.text:decision.summary}`;$('#decision-history').append(item);}
    if(!definition.autoConclusion)$('#decision-history').hidden=summary.decisions.length===0;
    setMode('conclusion');
    $('#announcer').textContent = 'Pembahasan hasil.';
    $('#conclusion-title').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function openLog() {
    if (!history.length || $('#history').open) return;
    completeText();
    logTrigger = document.activeElement;
    $('#history-list').replaceChildren(...history.map(turn => {
      const item = document.createElement('li');
      const name = document.createElement('strong');
      name.textContent = speakerLabel(turn.speaker);
      const text = document.createElement('p');
      renderDialogueText(text,turn.visualOnly?`Ekspresi ${expressionLabel(turn.emotion)}.`:turn.text);
      item.append(name, text);
      return item;
    }));
    $('#history').showModal();
    syncHeatEffects();
    $('#history-list').lastElementChild?.scrollIntoView({ block: 'nearest' });
  }

  async function fullscreen() {
    if (embedded) { send('shortcut', { key: 'f' }); return; }
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      $('#announcer').textContent = 'Layar penuh tidak tersedia di browser ini.';
    }
  }

  async function loadAssets() {
    $('#start').disabled = true;
    $('#start').textContent = 'Memuat…';
    try {
      await Promise.all([...document.querySelectorAll('.portrait img')].map(image => image.decode()));
      assetReady = true;
      $('#start').disabled = false;
      $('#start').textContent = 'Mulai';
      $('#asset-status').textContent = '';
      send('ready');
    } catch {
      assetReady = false;
      document.body.classList.add('is-ready');
      $('#start').disabled = false;
      $('#start').textContent = 'Coba lagi';
      $('#asset-status').textContent = 'Gambar belum dapat dimuat. Periksa berkas gambar, lalu coba lagi.';
    }
  }

  $('#start').addEventListener('click', () => { if (!assetReady) { loadAssets(); return; } startScene(); });
  $('#next').addEventListener('click', advance);
  $('#restart').addEventListener('click', reset);
  $('#fullscreen').addEventListener('click', fullscreen);
  $('#open-conclusion').addEventListener('click', showConclusion);
  $('#log').addEventListener('click', openLog);
  $('#close-history').addEventListener('click', () => $('#history').close());
  $('#history').addEventListener('close', () => {syncHeatEffects();if (logTrigger?.isConnected && !logTrigger.closest('[hidden]')) logTrigger.focus({ preventScroll: true });});
  $('#heat-motion').addEventListener('click',()=>{heatPaused=!heatPaused;syncHeatEffects();});
  document.addEventListener('visibilitychange',syncHeatEffects);
  window.addEventListener('pagehide',stopHeatEffects);
  window.addEventListener('pageshow',syncHeatEffects);
  document.addEventListener('fullscreenchange', () => $('#fullscreen').setAttribute('aria-pressed', String(Boolean(document.fullscreenElement))));
  reducedMotion.addEventListener('change', () => {
    if(reducedMotion.matches){
      if (typing) completeText();
      reactionAnimations.forEach(animation => animation.cancel());
      reactionAnimations = [];
      clearTurnMotion();
    }
    syncHeatEffects();
  });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat || $('#history').open) return;
    if(workspace?.shortcut(event))return;
    if(event.target.closest('input,textarea,select,[contenteditable=true]'))return;
    const hostKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (embedded && ['ArrowLeft', 'ArrowRight', 'Home', 'm', 'n', 'p', 'f', 't', '?'].includes(hostKey)) {
      event.preventDefault();send('shortcut', { key: hostKey });return;
    }
    if (mode === 'choice' && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      const buttons = [...$('#choice-list').querySelectorAll('button:not([hidden])')];
      if(!buttons.length)return;
      const selected=buttons.findIndex(button=>button.classList.contains('is-selected'));
      const index=selected<0?0:selected;
      const next=buttons[(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length];
      highlightChoice(next);
      next.focus({preventScroll:true});
      next.scrollIntoView({block:'nearest',inline:'nearest'});
      return;
    }
    if (event.key.toLowerCase() === 'l') { event.preventDefault(); openLog(); return; }
    if (event.key.toLowerCase() === 'f') { event.preventDefault(); fullscreen(); return; }
    if (event.key.toLowerCase() === 'b' && mode === 'dialog') { event.preventDefault();advance();return; }
    if (event.key === 'Enter' && mode === 'dialog' && !event.target.closest('button')) { event.preventDefault(); advance(); }
  });

  if (embedded) window.addEventListener('message', event => {
    if (event.source !== window.parent || event.data?.type !== 'tefa-dialogue-host' || event.data.scene !== sceneKey) return;
    const data = event.data;
    if (typeof data.motion === 'boolean') {
      hostMotion = data.motion;
      document.body.classList.toggle('motion-off', !hostMotion);
      if (!motion()) {
        if (typing) completeText();
        reactionAnimations.forEach(animation => animation.cancel());
        reactionAnimations = [];
        clearTurnMotion();
      }
      syncHeatEffects();
    }
    if (data.action === 'advance') { advance(); return; }
    if (data.action !== 'restore' || !assetReady) return;
    document.body.classList.add('is-ready');
    const saved = flow.validate(definition,data.snapshot,sceneKey);
    if (!saved || saved.mode==='intro') {
      startScene();
      return;
    }
    route = saved.route;
    effectPosition=null;
    clearEmotion();
    answers=saved.answers;
    workspace?.restore(saved.workspace);
    frames=flow.trace(definition,answers,saved.workspace);
    position = saved.position;
    renderFrame(true);
    if(mode==='dialog')completeText();
  });
  loadAssets();
})();
