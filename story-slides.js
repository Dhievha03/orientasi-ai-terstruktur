(() => {
  'use strict';
  const scenes = window.TEFA_DIALOGUE_SCENES;
  const flow = window.TEFA_DIALOGUE_FLOW;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
  let host, activeSlide;
  function validSnapshot(value,sceneKey) {
    return flow.validate(scenes[sceneKey],value,sceneKey);
  }
  const isComplete = (value,sceneKey) => validSnapshot(value,sceneKey)?.mode === 'end';
  const restartSnapshot = sceneKey => flow.initial(scenes[sceneKey],sceneKey);
  function send(message) {
    if(activeSlide)document.querySelector('#story-frame')?.contentWindow.postMessage({type:'tefa-dialogue-host',scene:activeSlide.sceneKey,...message},'*');
  }
  window.addEventListener('message',event => {
    const frame = document.querySelector('#story-frame');
    if (!host || !activeSlide || event.source !== frame?.contentWindow || event.data?.type !== 'tefa-dialogue' || event.data.scene !== activeSlide.sceneKey) return;
    const message = event.data;
    if (message.action === 'ready') send({action:'restore',snapshot:host.getSnapshot(activeSlide.id),motion:host.motion()});
    else if (message.action === 'progress') {
      const snapshot = validSnapshot(message.snapshot,activeSlide.sceneKey);
      if (snapshot) host.saveSnapshot(activeSlide.id,snapshot);
    } else if (message.action === 'conclusion' && isComplete(host.getSnapshot(activeSlide.id),activeSlide.sceneKey)) host.next();
    else if (message.action === 'shortcut' && ['ArrowLeft','ArrowRight','Home','m','n','p','f','t','?'].includes(message.key)) host.shortcut(message.key);
  });
  window.TEFA_STORY = {
    configure(callbacks){host=callbacks;},
    mount(slide){activeSlide=slide.type==='storyScene'?slide:null;},
    send,validSnapshot,isComplete,restartSnapshot,
    renderBrief(slide){return `<div class="scene-brief-layout"><section class="scene-brief-story"><p class="scene-brief-context">${escape(slide.context)}</p>${slide.requirements?`<dl class="scene-brief-requirements">${slide.requirements.map(([label,text])=>`<div><dt>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl>`:`<p class="scene-brief-purpose">${escape(slide.purpose)}</p>`}<button class="action-button scene-start" data-start-scene>Mulai</button></section><aside class="scene-brief-cast" aria-label="Pemeran percakapan"><figure><img src="prototypes/p3r-dialogue/assets/makoto.webp" width="1111" height="1359" alt="Siluet User"><figcaption><strong>User</strong><span>Developer yang memberi instruksi dan menilai hasil.</span></figcaption></figure><figure><img src="prototypes/p3r-dialogue/assets/aigis.webp" width="1113" height="1337" alt="Siluet AI"><figcaption><strong>AI</strong><span>Agent yang membantu pekerjaan melalui tools pengembangan.</span></figcaption></figure></aside></div>`;},
    renderScene(slide){return `<h1 id="slide-title" class="sr-only">${escape(slide.title)}</h1><iframe id="story-frame" class="story-frame" src="prototypes/p3r-dialogue/index.html?embed=1&amp;scene=${encodeURIComponent(slide.sceneKey)}" title="${escape(slide.title)}" width="1280" height="720"></iframe>`;},
    renderConclusion(slide,snapshot,selected){
      const data=scenes[slide.sceneKey];
      if (!isComplete(snapshot,slide.sceneKey)) return `<div class="story-locked"><h2>Dialog belum selesai.</h2><p>Selesaikan dialog untuk melihat pembahasan.</p><button class="action-button" data-return-story>Lanjutkan</button></div>`;
      const {result,decisions,quote:rawQuote,quoteType}=flow.summary(data,snapshot,slide.sceneKey);
      const quote=quoteType==='activity'?`Aktivitas: ${escape(rawQuote)}`:`“${escape(rawQuote)}”`;
      const keys=data.autoConclusion?['reason','evidence','next']:['consequence','reason','next'];
      const labels=data.autoConclusion?[...result.labels]:['Akibat','Alasan','Prinsip'];
      const branching=Boolean(data.nodes||data.simulate);
      if(branching&&!data.autoConclusion)labels.push('Perjalanan');
      const reading=selected===3&&branching?`<ol class="story-path"${data.autoConclusion?'':' tabindex="0"'} aria-label="Riwayat pilihan">${decisions.map(item=>`<li><strong>${escape(item.label)}</strong><span>${item.processed===false?'Tidak dikerjakan. ':''}${escape(data.autoConclusion?item.text:item.summary)}</span></li>`).join('')}</ol>`:`<p class="story-explanation">${escape(result[keys[selected]||keys[0]])}</p>`;
      if(data.autoConclusion)return `<div class="story-conclusion story-conclusion--micro"><section class="story-result"><h1 id="slide-title">${escape(result.title)}</h1><p class="story-outcome">${escape(result.consequence)}</p><button class="text-button" data-repeat-story>Ulangi</button></section><section class="story-reading"><div class="view-selector" data-parts="${labels.length}" role="group" aria-label="Bagian hasil">${labels.map((label,index)=>`<button data-view="${index}" aria-pressed="${index===selected}">${escape(label)}</button>`).join('')}</div><div class="story-reading-viewport" tabindex="0" role="region" aria-label="${escape(labels[selected]||labels[0])}">${reading}</div></section></div>`;
      return `<div class="story-conclusion"><div class="story-result"><span class="small-label">${data.fixedRoute?'PEMBAHASAN':snapshot.route==='partial'?'PEMULIHAN SEBAGIAN':'HASIL KEPUTUSAN'}</span><h2>${escape(result.title).replace(/\n/g,'<br>')}</h2><blockquote>${quote}</blockquote><button class="text-button" data-repeat-story>${data.fixedRoute?'Ulangi':'Coba pilihan lain'}</button></div><section class="story-reading"><p class="story-verdict">${escape(result.verdict)}</p><div class="view-selector" data-parts="${labels.length}" role="group" aria-label="Bagian pembahasan">${labels.map((label,index)=>`<button data-view="${index}" aria-pressed="${index===selected}">${label}</button>`).join('')}</div>${reading}</section></div>`;
    }
  };
})();
