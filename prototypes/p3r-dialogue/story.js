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
  const speakerLabel = speaker => speaker === 'user' ? 'User' : speaker === 'narrator' ? 'Narator' : speaker==='students'?'Siswa-siswa':'AI';
  const expressionLabel=emotion=>({shock:'terkejut',stress:'stres',silence:'hening',anger:'marah',fury:'sangat marah'}[emotion]||'tenang');
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
  let selectingResponse=false;
  let conclusionSent=false;
  const workspace=definition.workspace?window.TEFA_REGISTRATION_WORKSPACE.create({
    answerCount:()=>answers.length,
    endingLocked:()=>frames.at(-1)?.kind==='end',
    change:()=>publish(),
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
  }

  function syncPortraits(speaker) {
    if (sceneKey !== 'micro') return;
    document.querySelectorAll('.portrait').forEach(portrait => {
      portrait.hidden = speaker==='intro'?!['portrait-ai','portrait-user'].includes(portrait.id):portrait.id!==`portrait-${speaker}`;
    });
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
    const changed = previousSpeaker !== scene.dataset.speaker;
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

  function clearEmotion() {
    reactionAnimations.forEach(animation => animation.cancel());
    reactionAnimations = [];
    document.querySelectorAll('.emotion-layer').forEach(layer => layer.replaceChildren());
    scene.dataset.emotion = 'neutral';
    delete scene.dataset.reaction;
  }

  function showEmotion(turn) {
    clearEmotion();
    const emotion = turn.emotion || 'neutral';
    scene.dataset.emotion = emotion;
    if (['neutral', 'silence'].includes(emotion)) return;
    const target = turn.reaction || turn.speaker;
    scene.dataset.reaction = target;
    const portrait = $(`#portrait-${target}`);
    if (!portrait) return;
    const layers=target==='students'?[...portrait.querySelectorAll('.student > .emotion-layer')]:[portrait.querySelector(':scope > .emotion-layer')];
    const layer=layers[0];
    const smoke = emotion === 'overheat';
    const symbol = smoke ? 'smoke' : ['anger', 'fury'].includes(emotion) ? 'anger' : emotion;
    const plumes=[
      {x:4,y:8,size:.78,drift:-34,rise:34,duration:2400,delay:0},
      {x:68,y:13,size:.84,drift:39,rise:40,duration:2900,delay:160},
      {x:13,y:35,size:.68,drift:-44,rise:38,duration:2600,delay:430},
      {x:75,y:39,size:.72,drift:48,rise:46,duration:3000,delay:600},
      {x:36,y:8,size:.6,drift:13,rise:30,duration:3200,delay:800},
      {x:42,y:42,size:.66,drift:-23,rise:50,duration:2800,delay:1000}
    ];
    const count = target==='students'?layers.length:smoke ? Math.min(6,(turn.heat || 1)+2) : emotion === 'fury' ? 3 : 1;
    for (let index = 0; index < count; index += 1) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', smoke?'0 0 100 120':'0 0 100 100');
      svg.setAttribute('class', `comic-expression comic-${symbol}${target==='students'?'':` comic-position-${index}`}`);
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
      (target==='students'?layers[index]:layer).append(svg);
      if (smoke && motion()) reactionAnimations.push(svg.animate(
        [
          {opacity:0,transform:'translate(0,12px) scale(.35,.65) rotate(0deg)'},
          {opacity:turn.heat === 4 ? .96 : .84,transform:`translate(${plume.drift*.2}px,0) scale(.72,.9) rotate(${index%2?3:-3}deg)`,offset:.24},
          {opacity:.68,transform:`translate(${plume.drift*.65}px,${-plume.rise*.45}px) scale(1.02,1.05) rotate(${index%2?-4:5}deg)`,offset:.62},
          {opacity:0,transform:`translate(${plume.drift}px,${-plume.rise}px) scale(1.3,1.12) rotate(${index%2?-7:8}deg)`}
        ],
        {duration:turn.heat===4?plume.duration*.7:plume.duration,delay:turn.heat===4?plume.delay*.45:plume.delay,iterations:1,easing:'cubic-bezier(.2,.55,.35,1)',fill:'both'}
      ));
    }
    if(smoke&&turn.expression&&!['neutral','silence'].includes(turn.expression)){
      const expression=document.createElementNS('http://www.w3.org/2000/svg','svg');
      const symbol=['anger','fury'].includes(turn.expression)?'anger':turn.expression;
      expression.setAttribute('viewBox','0 0 100 100');
      expression.setAttribute('class',`comic-expression comic-${symbol}`);
      const use=document.createElementNS('http://www.w3.org/2000/svg','use');
      use.setAttribute('href',`#comic-${symbol}`);expression.append(use);layer.append(expression);
    }
    if(smoke&&turn.heat>=2){
      for(let index=0;index<(turn.heat>=3?2:1);index++){
        const spark=document.createElementNS('http://www.w3.org/2000/svg','svg');
        spark.setAttribute('viewBox','0 0 100 100');
        spark.setAttribute('class',`comic-spark spark-${index}`);
        const use=document.createElementNS('http://www.w3.org/2000/svg','use');
        use.setAttribute('href','#comic-spark');spark.append(use);layer.append(spark);
        if(motion())reactionAnimations.push(spark.animate([{opacity:0,scale:.8},{opacity:1,scale:1,offset:.35},{opacity:0,scale:1.05}],{duration:320,delay:index*200,easing:'ease-out',fill:'both'}));
      }
    }
    if (!motion() || smoke) return;
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
    $('#next-label').textContent = definition.autoConclusion&&frames[position+1]?.kind==='end'?'Lihat konklusi':'Lanjut';
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
    const previousSpeaker = mode === 'dialog' ? scene.dataset.speaker : null;
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
    if (mode !== 'dialog' || $('#history').open) return;
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
    $('#announcer').textContent = `${impact} Lihat konklusi untuk pembahasan.`;
    publish();
    if(definition.autoConclusion){showConclusion();return;}
    $('#open-conclusion').focus({ preventScroll: true });
  }

  function reset() {
    clearInterval(typing);
    typing = null;
    clearEmotion();
    clearTurnMotion();
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
      $('#conclusion').innerHTML=`<div class="conclusion-heading"><h2 id="conclusion-title" tabindex="-1"></h2><p id="conclusion-outcome" class="conclusion-outcome"></p><button class="secondary-button" type="button" id="retry-choice">Ulangi percakapan</button></div><div class="conclusion-body"><div class="conclusion-tabs" role="group" aria-label="Bagian hasil">${labels.map((label,index)=>`<button type="button" data-reading="${index}" aria-pressed="${index===0}">${label}</button>`).join('')}</div><div class="conclusion-reading-viewport" tabindex="0" role="region" aria-label="${labels[0]}"><p id="conclusion-reading"></p><ol id="decision-history" class="decision-history" aria-label="Riwayat pilihan" hidden></ol></div></div>`;
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
      $('#conclusion').innerHTML = `<div class="conclusion-heading"><p class="section-label">KONKLUSI</p><h2 id="conclusion-title" tabindex="-1"></h2><blockquote class="chosen-quote"></blockquote></div><div class="conclusion-body"><div class="verdict"></div><section><h3>Letak kesalahan</h3><p data-summary="reason"></p></section><section><h3>Akibat</h3><p data-summary="consequence"></p></section><section><h3>Prinsip kerja</h3><p data-summary="next"></p></section><ol id="decision-history" class="decision-history"></ol><div class="conclusion-actions"><button class="primary-button" type="button" id="retry-choice">${fixedRoute ? 'Ulang adegan' : 'Coba perjalanan lain'}</button><button class="secondary-button" type="button" id="restart-scene">Mulai dari awal</button></div></div>`;
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
    $('#announcer').textContent = 'Konklusi adegan.';
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
    $('#start').textContent = 'Menyiapkan aset…';
    try {
      await Promise.all([...document.querySelectorAll('.portrait img')].map(image => image.decode()));
      assetReady = true;
      $('#start').disabled = false;
      $('#start').textContent = 'Mulai adegan';
      $('#asset-status').textContent = '';
      send('ready');
    } catch {
      assetReady = false;
      document.body.classList.add('is-ready');
      $('#start').disabled = false;
      $('#start').textContent = 'Muat ulang aset';
      $('#asset-status').textContent = 'Portrait gagal dimuat. Periksa berkas dalam folder assets, lalu coba lagi.';
    }
  }

  $('#start').addEventListener('click', () => { if (!assetReady) { loadAssets(); return; } startScene(); });
  $('#next').addEventListener('click', advance);
  $('#restart').addEventListener('click', reset);
  $('#fullscreen').addEventListener('click', fullscreen);
  $('#open-conclusion').addEventListener('click', showConclusion);
  $('#log').addEventListener('click', openLog);
  $('#close-history').addEventListener('click', () => $('#history').close());
  $('#history').addEventListener('close', () => { if (logTrigger?.isConnected && !logTrigger.closest('[hidden]')) logTrigger.focus({ preventScroll: true }); });
  document.addEventListener('fullscreenchange', () => $('#fullscreen').setAttribute('aria-pressed', String(Boolean(document.fullscreenElement))));
  reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    if (typing) completeText();
    reactionAnimations.forEach(animation => animation.cancel());
    reactionAnimations = [];
    clearTurnMotion();
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
    answers=saved.answers;
    workspace?.restore(saved.workspace);
    frames=flow.trace(definition,answers,saved.workspace);
    position = saved.position;
    renderFrame(true);
    if(mode==='dialog')completeText();
  });
  loadAssets();
})();
