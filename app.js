(() => {
  'use strict';
  const deck=window.TEFA_DECK;
  const $=selector=>document.querySelector(selector);
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
  const pad=value=>String(value).padStart(2,'0');
  const icon=name=>`<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const key='tefa-orientasi-ai:v1';
  const calendar=window.TEFA_CALENDAR;
  const state={index:0,notes:false,clean:false,transitions:true,waterMotion:true,reveals:{},steps:{}};
  let busy=false,menuClosing=false,preview=0,noticeHandle,menuFocus;
  let storageAvailable=true;
  try {
    const saved=JSON.parse(localStorage.getItem(key));
    if(saved&&typeof saved==='object'){
      for(const name of ['notes','clean','transitions','waterMotion'])if(typeof saved[name]==='boolean')state[name]=saved[name];
      const index=deck.slides.findIndex(slide=>slide.id===saved.slideId);
      if(index>=0&&saved.deckVersion===deck.version){state.index=index;for(const slide of deck.slides){if(saved.reveals?.[slide.id]===true)state.reveals[slide.id]=true;const step=saved.steps?.[slide.id];if(Number.isInteger(step)&&step>=0&&step<Math.max(slide.turns?.length||0,slide.fragments?.length||0))state.steps[slide.id]=step;}}
    }
  } catch {storageAvailable=false;}
  const current=()=>deck.slides[state.index];
  const chapterIndex=()=>deck.chapters.findIndex(chapter=>chapter.id===current().chapter);
  const motion=()=>state.transitions&&!reduced.matches;
  const opened=slide=>Boolean(state.reveals[slide.id]);
  const stepOf=slide=>state.steps[slide.id]||0;

  function save(){try{localStorage.setItem(key,JSON.stringify({...state,slideId:current().id,deckVersion:deck.version}));}catch{storageAvailable=false;}}
  function notice(text){clearTimeout(noticeHandle);$('#notice').textContent=text;$('#notice').hidden=false;noticeHandle=setTimeout(()=>{$('#notice').hidden=true;},4000);}
  function header(slide){const chapter=deck.chapters.find(item=>item.id===slide.chapter);return `<span class="submenu-section" aria-hidden="true">${escape(chapter.menu)}</span><div class="slide-heading"><p class="eyebrow">${escape(slide.eyebrow)}</p><h1 id="slide-title">${escape(slide.title)}</h1></div>`;}
  function revealButton(slide,label='Tampilkan pembahasan'){return `<button id="reveal-button" class="action-button" data-reveal aria-expanded="${opened(slide)}" aria-controls="reveal-content"><span>${opened(slide)?'Tutup pembahasan':escape(label)}</span>${icon('arrow')}</button>`;}
  function note(text){return text?`<p class="slide-note">${escape(text)}</p>`:'';}
  function finding(reveal){return `<div class="finding"><span class="small-label">${escape(reveal.label||'PEMBAHASAN')}</span><h2>${escape(reveal.title)}</h2><p>${escape(reveal.text)}</p></div>`;}
  function formIllustration(input,message,tone='error'){return `<div class="form-illustration" aria-label="Ilustrasi formulir"><div class="illustration-top"><span>FORMULIR PENDAFTARAN</span><span>CONTOH</span></div><div class="illustration-field"><span>NAMA</span><strong>${escape(input)}</strong></div><div class="illustration-result ${tone}"><span class="result-dot"></span><strong>${escape(message)}</strong></div><span class="illustration-caption">Ilustrasi perilaku aplikasi · tidak mengirim data</span></div>`;}
  function proofImage(proof){return `<figure class="demo-proof"><img src="${escape(proof.src)}" width="504" height="210" alt="${escape(proof.alt)}" decoding="sync"><figcaption>${escape(proof.caption)}</figcaption></figure>`;}

  const renderers={
    cover(slide){return `<div class="cover-composition"><div class="cover-type"><p class="eyebrow">${escape(slide.eyebrow)}</p><h1 id="slide-title" aria-label="${escape(slide.title)}"><span class="cover-intro">${escape(slide.intro)}</span><span class="cover-word">${escape(slide.headline)}</span></h1><p class="cover-subtitle">${escape(slide.subtitle)}</p></div><aside class="cover-device" aria-label="Alur kerja bersama AI"><span class="cover-side-word" aria-hidden="true">HUMAN<br>IN CONTROL.</span><div class="cover-keywords">${slide.keywords.map(word=>`<span>${escape(word)}</span>`).join('')}</div></aside></div>`;},
    roles(slide){return `${header(slide)}<div class="roles-layout"><section class="role-human"><span class="small-label">ARAH + KEPUTUSAN</span><h2>${escape(slide.human.title)}</h2><ul>${slide.human.items.map(text=>`<li>${escape(text)}</li>`).join('')}</ul></section><span class="role-cross" aria-hidden="true">×</span><section class="role-ai"><span class="small-label">BANTUAN + PELAKSANAAN</span><h2>${escape(slide.ai.title)}</h2><ul>${slide.ai.items.map(text=>`<li>${escape(text)}</li>`).join('')}</ul></section></div>${note(slide.conclusion)}`;},
    comparison(slide){return `${header(slide)}<div class="comparison-layout">${[slide.left,slide.right].map((side,index)=>`<section class="comparison-side"><span class="comparison-index" aria-hidden="true">${pad(index+1)}</span><span class="small-label">${escape(side.label)}</span><h2>${escape(side.heading)}</h2><p>${escape(side.text)}</p></section>`).join('')}</div>${note(slide.footnote)}`;},
    situation(slide){return `${header(slide)}<div class="situation-layout">${slide.proof?proofImage(slide.proof):formIllustration(slide.input,slide.actual,'success')}<div class="situation-reading"><span class="small-label">KONDISI AWAL</span><p class="large-reading">${escape(slide.caption)}</p>${revealButton(slide,'Lihat hasil yang diharapkan')}<div id="reveal-content"${opened(slide)?'':' hidden'}>${finding(slide.reveal)}</div></div></div>`;},
    brief(slide){return `${header(slide)}<dl class="brief-layout">${slide.rows.map(([label,text],index)=>`<div><dt><span>${pad(index+1)}</span>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl>${note(slide.annotation)}`;},
    ecosystem(slide){return `${header(slide)}<div class="ecosystem-layout">${slide.nodes.map((node,index)=>`<section><span class="small-label">${node.number} / ${index===0?'KENDALI KERJA':index===1?'RESPONS AI':'AKSES PROYEK'}</span><h2>${escape(node.title)}</h2><p>${escape(node.text)}</p><div class="ecosystem-examples">${escape(node.examples)}</div></section>`).join('')}<span class="ecosystem-link link-one" aria-hidden="true">↔</span><span class="ecosystem-link link-two" aria-hidden="true">↔</span></div>${note(slide.conclusion)}`;},
    route(slide){return `${header(slide)}<div class="route-layout">${slide.steps.map(([label,text],index)=>`${index?'<span class="route-connector" aria-hidden="true">→</span>':''}<section><span class="route-number">${pad(index+1)}</span><h2>${escape(label)}</h2><p>${escape(text)}</p></section>`).join('')}</div>${note(slide.note)}`;},
    prompt(slide){const selected=stepOf(slide);return `${header(slide)}<div class="prompt-layout"><div class="prompt-selector" role="group" aria-label="Bagian instruksi">${slide.fragments.map((part,index)=>`<button data-fragment="${index}" aria-pressed="${selected===index}"><span>${pad(index+1)}</span>${escape(part.label)}</button>`).join('')}</div><div class="prompt-reading"><span class="small-label">CONTOH / ${escape(slide.fragments[selected].label)}</span><blockquote>${escape(slide.fragments[selected].text)}</blockquote><button class="text-button" data-open-prompt>Instruksi lengkap ${icon('arrow')}</button></div></div>${note(slide.note)}`;},
    context(slide){return `${header(slide)}<div class="context-layout"><div class="context-core"><span class="small-label">KONTEKS</span><h2>${escape(slide.center)}</h2><span class="context-mark" aria-hidden="true">↗</span></div><dl>${slide.items.map(([label,text])=>`<div><dt>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl></div>${note(slide.conclusion)}`;},
    criteria(slide){return `${header(slide)}<div class="criteria-layout">${slide.checks.map(([label,text],index)=>`<section><span class="criteria-number">${pad(index+1)}</span><div><h2>${escape(label)}</h2><p>${escape(text)}</p></div>${icon('check')}</section>`).join('')}</div>${note(slide.note)}`;},
    instructionLayers(slide){return `${header(slide)}<div class="layers-layout">${slide.layers.map((layer,index)=>`<section><div class="layer-top"><span class="layer-number">${pad(index+1)}</span><span class="small-label">${escape(layer.tag)}</span></div><h2>${escape(layer.heading)}</h2><p>${escape(layer.example)}</p></section>`).join('')}</div>`;},
    checkpoints(slide){return `${header(slide)}<ol class="checkpoints-layout">${slide.steps.map(([label,text],index)=>`<li><span class="checkpoint-index">${pad(index+1)}</span><h2>${escape(label)}</h2><p>${escape(text)}</p></li>`).join('')}</ol>`;},
    feedback(slide){return `${header(slide)}<div class="feedback-layout"><div class="feedback-vague"><span class="small-label">TERLALU UMUM</span><p>${escape(slide.vague)}</p></div><div class="feedback-specific"><span class="small-label">BERDASARKAN KEJADIAN</span><blockquote>${escape(slide.specific)}</blockquote></div></div><div class="feedback-bottom">${revealButton(slide,'Mengapa lebih membantu?')}<div id="reveal-content"${opened(slide)?'':' hidden'}>${finding(slide.reveal)}</div></div>`;},
    boundaries(slide){return `${header(slide)}<div class="boundaries-layout"><p class="boundary-statement">${escape(slide.main)}</p><dl>${slide.items.map(([label,text])=>`<div><dt>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl></div>`;},
    assignment(slide){return `${header(slide)}<div class="assignment-layout"><div><span class="small-label">PEKERJAAN YANG DIMINTA</span><h2>${escape(slide.task)}</h2></div><div><ul>${slide.scope.map(text=>`<li>${escape(text)}</li>`).join('')}</ul><p class="assignment-aside">${escape(slide.aside)}</p></div></div>`;},
    workflow(slide){return `${header(slide)}<ol class="workflow-layout">${slide.stages.map((stage,index)=>`<li><span>${pad(index+1)}</span><h2>${escape(stage)}</h2>${index<slide.stages.length-1?'<b aria-hidden="true">→</b>':''}</li>`).join('')}</ol>${note(slide.note)}`;},
    mission(slide){return `<div class="mission-layout"><p class="eyebrow">${escape(slide.eyebrow)}</p><h1 id="slide-title" aria-label="${escape(slide.title)}">${escape(slide.headline).replace(/\n/g,'<br>')}</h1><div class="mission-bottom"><p>${escape(slide.subtitle)}</p><span>${escape(slide.note)}</span></div><div class="mission-moon" aria-hidden="true">${calendar.moon(1)}</div></div>`;},
    conversation(slide){const at=stepOf(slide);return `${header(slide)}<div class="conversation-layout"><aside><span class="small-label">SIMULASI PERCAKAPAN</span><div class="conversation-count"><strong>${pad(at+1)}</strong><span>/ ${pad(slide.turns.length)}</span></div><p>Penugasan<br>Rencana AI<br>Penilaian</p></aside><section class="conversation-stage"><span class="speaker-label${at===1?' speaker-ai':''}">${escape(slide.turns[at].role)}</span><blockquote>${escape(slide.turns[at].text)}</blockquote><div class="conversation-actions"><button class="text-button" data-turn-back${at===0?' disabled':''}>Sebelumnya</button><button id="reveal-button" class="action-button" data-turn-next${at===slide.turns.length-1?' disabled':''}>${at===0?'Lihat rencana AI':at===1?'Lihat penilaian':'Pembahasan selesai'}${icon('arrow')}</button></div></section></div>`;},
    scopeCase(slide){return `${header(slide)}<div class="scope-layout"><span class="small-label">USULAN AI / SIMULASI</span><blockquote>${escape(slide.proposal)}</blockquote><p>${escape(slide.question)}</p>${revealButton(slide)}<div id="reveal-content"${opened(slide)?'':' hidden'}>${finding(slide.reveal)}</div></div>`;},
    outcome(slide){const at=opened(slide),shown=at?slide.after:slide.before;return `${header(slide)}<div class="outcome-layout"><div><span class="small-label outcome-label">${escape(shown.label)}</span>${shown.proof?proofImage(shown.proof):formIllustration(shown.input,shown.message,at?'error':'success')}</div><div class="outcome-explanation"><h2>${escape(shown.explanation)}</h2><button id="reveal-button" class="action-button" data-reveal aria-expanded="${at}">${escape(at?slide.hideLabel||'Lihat sebelum perbaikan':slide.showLabel||'Lihat hasil perbaikan')}${icon('arrow')}</button></div></div>${note(slide.note)}`;},
    evidence(slide){return `${header(slide)}<div class="evidence-layout"><div class="claim"><span class="small-label">${escape(slide.claimLabel||'KLAIM AI')}</span><blockquote>${escape(slide.claim)}</blockquote></div><div class="evidence-facts">${slide.facts.map((fact,index)=>`<div class="fact fact-${index}"><span>${escape(fact.status)}</span><p>${escape(fact.text)}</p></div>`).join('')}</div></div><div class="evidence-decision">${revealButton(slide,'Lihat keputusan')}<div id="reveal-content"${opened(slide)?'':' hidden'}>${finding(slide.reveal)}</div></div>${note(slide.note)}`;},
    request(slide){return `${header(slide)}<div class="request-layout"><blockquote>${escape(slide.quote)}</blockquote><div>${slide.highlights.map((label,index)=>`<span><b>${pad(index+1)}</b>${escape(label)}</span>`).join('')}</div></div>`;},
    decision(slide){return `${header(slide)}<div class="decision-layout"><ol>${slide.conditions.map((text,index)=>`<li><span>${pad(index+1)}</span>${escape(text)}</li>`).join('')}</ol><div class="decision-conclusion"><span class="small-label">${escape(slide.resultLabel||'DASAR PENERIMAAN')}</span><h2>${escape(slide.conclusion)}</h2>${slide.proof?proofImage(slide.proof):''}</div></div>${note(slide.note)}`;},
    report(slide){return `${header(slide)}<div class="report-layout">${slide.sections.map((section,index)=>`<section><span class="report-index">${pad(index+1)}</span><h2>${escape(section.label)}</h2><p>${escape(section.text)}</p></section>`).join('')}</div>${note(slide.note)}`;},
    habits(slide){return `${header(slide)}<div class="habits-layout">${slide.habits.map(([label,text],index)=>`<section><strong>${pad(index+1)}</strong><span>${escape(label)}</span><h2>${escape(text)}</h2></section>`).join('')}</div>`;},
    closing(slide){return `<div class="closing-layout"><p class="eyebrow">${escape(slide.eyebrow)}</p><h1 id="slide-title" aria-label="${escape(slide.title)}">${escape(slide.statement).replace(/\n/g,'<br>')}</h1><p>${escape(slide.closing)}</p><span class="closing-word" aria-hidden="true">IN CONTROL.</span></div>`;}
  };

  function render(animate=true){
    const slide=current(),chapter=deck.chapters[chapterIndex()],article=$('#slide');
    const scroll=$('#stage').scrollTop;
    article.className=`slide slide--${slide.type}${chapter.moon>=1?' is-full-moon':''}`;
    article.dataset.slideId=slide.id;article.setAttribute('aria-labelledby','slide-title');article.innerHTML=renderers[slide.type](slide);
    document.body.dataset.slideType=slide.type;document.body.classList.toggle('full-moon-material',chapter.moon>=1);
    $('#chapter-label').textContent=pad(chapterIndex()+1);$('#chapter-name').textContent=chapter.name;
    $('#phase-moon').innerHTML=calendar.moon(chapter.moon);
    const local=deck.slides.filter(item=>item.chapter===chapter.id);$('#local-counter').textContent=`SLIDE ${local.findIndex(item=>item.id===slide.id)+1} DALAM BAB`;
    $('#deck-counter').textContent=`${pad(state.index+1)} / ${pad(deck.slides.length)}`;
    $('#notes-content').innerHTML=slide.notes.map(text=>`<li>${escape(text)}</li>`).join('');
    $('#previous-button').disabled=state.index===0;$('#next-button').disabled=state.index===deck.slides.length-1;
    $('#next-button').title=state.index===deck.slides.length-1?'Akhir presentasi. Home untuk kembali ke awal.':'Slide berikutnya (→)';
    document.querySelectorAll('.chapter-tab').forEach((button,index)=>{if(index===chapterIndex())button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
    $('#stage').scrollTop=animate?0:scroll;
    document.title=`${slide.type==='cover'?deck.title:slide.title} · TEFA`;
    $('#announcer').textContent=`Bab ${chapterIndex()+1}, ${chapter.name}. ${slide.title}`;
    save();
  }
  function refreshAction(focusSelector){
    render(false);
    const wanted=$(focusSelector);
    const focusTarget=wanted&&!wanted.disabled?wanted:$('#slide').querySelector('button:not(:disabled)')||$('#slide');
    focusTarget.focus({preventScroll:true});
    if(motion())$('#slide').querySelector('#reveal-content,.conversation-stage,.prompt-reading,.outcome-layout')?.animate([{opacity:.25,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.2,.8,.25,1)'});
  }
  function reveal(){
    if(current().type==='conversation'){changeStep(1);return;}
    if(!current().reveal&&current().type!=='outcome')return;
    state.reveals[current().id]=!opened(current());refreshAction('#reveal-button');
    $('#announcer').textContent=opened(current())?'Pembahasan ditampilkan.':'Pembahasan disembunyikan.';
  }
  function changeStep(delta){
    const count=current().turns?.length||current().fragments?.length||0;
    const next=Math.max(0,Math.min(count-1,stepOf(current())+delta));
    if(next===stepOf(current()))return;
    state.steps[current().id]=next;refreshAction('[data-turn-next]');
  }
  async function navigate(index){
    if(busy||calendar.isRunning()||index<0||index>=deck.slides.length||index===state.index)return;
    busy=true;const from=chapterIndex(),to=deck.chapters.findIndex(chapter=>chapter.id===deck.slides[index].chapter);
    if(from!==to&&motion()){
      calendar.start(deck.chapters,from,to,()=>{state.index=index;render();},()=>{busy=false;$('#slide').focus({preventScroll:true});});return;
    }
    const direction=index>state.index?1:-1;
    if(motion())await $('#slide').animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction*25}px)`}],{duration:150,easing:'cubic-bezier(.55,0,1,.45)'}).finished;
    state.index=index;render();
    if(motion()){
      await $('#slide').animate([{opacity:0,transform:`translateX(${direction*32}px)`},{opacity:1,transform:'translateX(0)'}],{duration:260,easing:'cubic-bezier(.16,1,.3,1)'}).finished;
    }
    busy=false;
    if(document.activeElement?.disabled)$('#slide').focus({preventScroll:true});
  }

  function buildMenu(){
    window.TEFA_PAUSE.initialize(deck);
    $('#glossary-list').innerHTML=deck.glossary.map(([term,definition])=>`<div><dt>${escape(term)}</dt><dd>${escape(definition)}</dd></div>`).join('');
    $('#full-prompt-content').innerHTML=deck.fullPrompt.split('\n\n').map(text=>`<p>${escape(text)}</p>`).join('');
    $('#chapter-nav').addEventListener('pointerover',event=>{const button=event.target.closest('[data-chapter]');if(button)previewMenu(deck.chapters.findIndex(chapter=>chapter.id===button.dataset.chapter));});
    $('#chapter-nav').addEventListener('focusin',event=>{const button=event.target.closest('[data-chapter]');if(button)previewMenu(deck.chapters.findIndex(chapter=>chapter.id===button.dataset.chapter));});
    $('#chapter-nav').addEventListener('click',async event=>{const button=event.target.closest('[data-chapter]');if(!button||menuClosing)return;const index=deck.slides.findIndex(slide=>slide.chapter===button.dataset.chapter);await closeMenu(false);if(index!==state.index)navigate(index);else $('#menu-button').focus({preventScroll:true});});
  }
  function positionCursor(){
    window.TEFA_PAUSE.layout();
  }
  function previewMenu(index){
    preview=index;window.TEFA_PAUSE.select(index);
  }
  function applyWater(){window.TEFA_WATER?.setFullMoon(false);window.TEFA_WATER?.setMotion(state.waterMotion&&!reduced.matches&&$('#chapter-menu').open&&!menuClosing);}
  function openMenu(){
    if(busy||calendar.isRunning()||$('#chapter-menu').open)return;
    closeAllDialogs();menuFocus=document.activeElement;
    const menu=$('#chapter-menu');menu.classList.remove('menu-closing');menu.classList.add('menu-opening');menu.showModal();document.body.classList.add('menu-open');
    previewMenu(chapterIndex());applyWater();
    document.querySelectorAll('.chapter-tab')[chapterIndex()].focus({preventScroll:true});
  }
  async function closeMenu(restore=true){
    const menu=$('#chapter-menu');if(!menu.open||menuClosing)return;
    menuClosing=true;menu.classList.remove('menu-opening');menu.classList.add('menu-closing');
    if(motion())await menu.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:'translateX(50px)'}],{duration:210,easing:'cubic-bezier(.55,0,1,.45)'}).finished;
    menu.close();menu.classList.remove('menu-closing');document.body.classList.remove('menu-open');menuClosing=false;applyWater();
    if(restore){
      const target=menuFocus?.isConnected&&menuFocus!==document.body&&menuFocus.getClientRects().length?menuFocus:$('#menu-button');
      target.focus({preventScroll:true});
    }
  }
  function closeAllDialogs(){document.querySelectorAll('dialog[open]').forEach(dialog=>{if(dialog.id!=='chapter-menu')dialog.close();});}
  function openDialog(selector){closeAllDialogs();const dialog=$(selector);dialog.showModal();if(motion())dialog.animate([{opacity:0,transform:'translate(28px,12px)'},{opacity:1,transform:'translate(0,0)'}],{duration:260,easing:'cubic-bezier(.16,1,.3,1)'});}
  async function closeDialog(dialog){
    if(!dialog.open||dialog.dataset.closing==='true')return;
    dialog.dataset.closing='true';
    if(motion())await dialog.animate([{opacity:1,transform:'translate(0,0)'},{opacity:0,transform:'translate(24px,-7px)'}],{duration:170,easing:'cubic-bezier(.55,0,1,.45)'}).finished;
    dialog.close();delete dialog.dataset.closing;
  }
  function preferences(){
    document.body.classList.toggle('clean-mode',state.clean);document.body.classList.toggle('motion-off',!motion());
    $('#notes-panel').hidden=!state.notes||state.clean;$('#exit-clean').hidden=!state.clean;$('#notes-button').setAttribute('aria-expanded',String(state.notes&&!state.clean));
    $('#clean-button').setAttribute('aria-pressed',String(state.clean));$('#clean-state').innerHTML=`${state.clean?'Aktif':'Nonaktif'} <kbd>P</kbd>`;
    $('#motion-button').setAttribute('aria-pressed',String(motion()));$('#motion-state').innerHTML=`${reduced.matches?'Kurangi gerakan':state.transitions?'Aktif':'Nonaktif'} <kbd>T</kbd>`;
    $('#water-button').setAttribute('aria-pressed',String(state.waterMotion&&!reduced.matches));$('#water-state').innerHTML=`${reduced.matches?'Kurangi gerakan':state.waterMotion?'Aktif':'Dijeda'} <kbd>L</kbd>`;
    applyWater();save();
  }
  function toggleClean(){closeAllDialogs();state.clean=!state.clean;preferences();if(state.clean)$('#exit-clean').focus({preventScroll:true});else $('#settings-button').focus({preventScroll:true});}
  function home(){closeAllDialogs();if(busy||calendar.isRunning())return;state.index=0;state.steps={};state.reveals={};render();$('#slide').focus({preventScroll:true});}
  async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();closeAllDialogs();$('#slide').focus({preventScroll:true});}else notice('Gunakan kontrol layar penuh browser.');}catch{notice('Layar penuh tidak dapat dibuka melalui tombol ini.');}}
  async function copyPrompt(){
    let copied=false;
    try{await navigator.clipboard.writeText(deck.fullPrompt);copied=true;}catch{
      const field=document.createElement('textarea');field.value=deck.fullPrompt;field.className='sr-only';$('#prompt-dialog').append(field);field.select();try{copied=document.execCommand('copy');}catch{copied=false;}field.remove();$('#copy-full-prompt').focus({preventScroll:true});
    }
    $('#copy-status').textContent=copied?'Instruksi disalin.':'Penyalinan otomatis tidak tersedia. Pilih dan salin teks instruksi secara manual.';
  }

  buildMenu();calendar.initialize(deck.chapters);render();preferences();
  $('#slide').addEventListener('click',event=>{
    if(event.target.closest('[data-reveal]'))reveal();
    else if(event.target.closest('[data-turn-next]'))changeStep(1);
    else if(event.target.closest('[data-turn-back]'))changeStep(-1);
    else if(event.target.closest('[data-open-prompt]'))openDialog('#prompt-dialog');
    else {const button=event.target.closest('[data-fragment]');if(button){state.steps[current().id]=Number(button.dataset.fragment);refreshAction(`[data-fragment="${button.dataset.fragment}"]`);}}
  });
  $('#menu-button').addEventListener('click',openMenu);$('#close-menu').addEventListener('click',()=>closeMenu());
  $('#chapter-menu').addEventListener('cancel',event=>{event.preventDefault();closeMenu();});
  $('#settings-button').addEventListener('click',()=>openDialog('#settings-dialog'));
  $('#notes-button').addEventListener('click',()=>{state.notes=!state.notes;preferences();});
  $('#close-notes').addEventListener('click',()=>{state.notes=false;preferences();$('#notes-button').focus({preventScroll:true});});
  $('#previous-button').addEventListener('click',()=>navigate(state.index-1));$('#next-button').addEventListener('click',()=>navigate(state.index+1));
  $('#fullscreen-button').addEventListener('click',fullscreen);$('#clean-button').addEventListener('click',toggleClean);$('#exit-clean').addEventListener('click',toggleClean);
  $('#motion-button').addEventListener('click',()=>{if(reduced.matches){notice('Transisi mengikuti pengaturan kurangi gerakan perangkat.');return;}state.transitions=!state.transitions;preferences();});
  $('#water-button').addEventListener('click',()=>{if(reduced.matches){notice('Gerak air mengikuti pengaturan kurangi gerakan perangkat.');return;}state.waterMotion=!state.waterMotion;preferences();});
  $('#glossary-button').addEventListener('click',()=>openDialog('#glossary-dialog'));$('#home-button').addEventListener('click',home);$('#copy-full-prompt').addEventListener('click',copyPrompt);
  document.querySelectorAll('.modal').forEach(dialog=>{
    dialog.querySelector('[data-close-dialog]').addEventListener('click',()=>closeDialog(dialog));
    dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog(dialog);});
    dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closeDialog(dialog);});
  });
  document.addEventListener('fullscreenchange',()=>{$('#fullscreen-state').innerHTML=`${document.fullscreenElement?'Keluar':'Buka'} <kbd>F</kbd>`;});
  document.fonts.ready.then(positionCursor);new ResizeObserver(positionCursor).observe($('#chapter-nav'));
  reduced.addEventListener('change',()=>{
    if(reduced.matches){
      calendar.finish();
      document.getAnimations().forEach(animation=>{
        try{if(Number.isFinite(animation.effect?.getComputedTiming().endTime))animation.finish();else animation.cancel();}catch{ /* Gerak CSS dapat selesai saat preferensi berubah. */ }
      });
    }
    preferences();
  });
  document.addEventListener('keydown',event=>{
    if(event.altKey||event.ctrlKey||event.metaKey||event.target.closest('input,textarea,select,[contenteditable="true"]'))return;
    if(calendar.isRunning()){
      if(['Escape','Enter',' '].includes(event.key)){event.preventDefault();calendar.finish();}
      else if(event.key==='Tab'){event.preventDefault();$('#skip-transition').focus();}return;
    }
    if($('#chapter-menu').open){
      if(['ArrowUp','ArrowDown'].includes(event.key)){event.preventDefault();preview=(preview+(event.key==='ArrowDown'?1:-1)+deck.chapters.length)%deck.chapters.length;document.querySelectorAll('.chapter-tab')[preview].focus({preventScroll:true});}
      else if(event.key==='Enter'&&event.target.closest('.chapter-tab')){event.preventDefault();document.querySelectorAll('.chapter-tab')[preview].click();}
      else if(event.key.toLowerCase()==='m'){event.preventDefault();closeMenu();}
      return;
    }
    if(document.querySelector('dialog[open]'))return;
    const key=event.key.toLowerCase();
    if(!['arrowleft','arrowright','m','n','p','f','t','l','b','home','escape','?'].includes(key))return;
    event.preventDefault();if(event.repeat)return;
    if(key==='arrowleft')navigate(state.index-1);else if(key==='arrowright')navigate(state.index+1);
    else if(key==='m')openMenu();else if(key==='n'){if(!state.clean){state.notes=!state.notes;preferences();}}
    else if(key==='p')toggleClean();else if(key==='f')fullscreen();else if(key==='b'){if(current().type==='prompt')changeStep(1);else reveal();}
    else if(key==='t')$('#motion-button').click();else if(key==='l')$('#water-button').click();else if(key==='home')home();else if(key==='?')openDialog('#settings-dialog');
    else if(key==='escape'){if(state.clean)toggleClean();else if(state.notes){state.notes=false;preferences();}}
  });
  if(!storageAvailable)notice('Penyimpanan lokal tidak tersedia. Presentasi tetap dapat digunakan selama halaman terbuka.');
})();
