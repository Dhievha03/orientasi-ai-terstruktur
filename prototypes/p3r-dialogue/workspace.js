(() => {
  'use strict';
  const $=selector=>document.querySelector(selector);
  function create(callbacks){
    const example=window.TEFA_REGISTRATION_EXAMPLE;
    const observations=window.TEFA_REGISTRATION_OBSERVATIONS;
    const definition=window.TEFA_DIALOGUE_SCENES.micro;
    let saved=definition.cleanWorkspace(),state=example.initial(),signature='',lastResponse=null,active=false,lossApplied=false,selectedCode=null,selectionAnchor=0,selectionCursor=0,previewRevision=0;
    const preview=$('#registration-preview');
    const controller=new AbortController(),events={signal:controller.signal};
    const evidence=()=>structuredClone(saved);
    const after=()=>callbacks.answerCount();
    function publish(){callbacks.change(evidence());}
    function remember(event){
      if(callbacks.endingLocked())return;
      saved.events.push({...event,after:after()});
      saved.events=saved.events.slice(-80);
    }
    function refresh(){if(saved.view==='ai')callbacks.refresh();}
    function codeFocus(){
      return selectedCode?{kind:'code',file:saved.file,topic:selectedCode.id,key:example.sourceKey(state,saved.file),range:{start:selectedCode.start,end:selectedCode.end}}:null;
    }
    function selectionTools(){
      const reported=selectedCode&&state.reported?.includes(observations.codeKey(codeFocus())),locked=callbacks.endingLocked();
      $('#code-discuss').disabled=!selectedCode||reported||locked;
      $('#code-clear').disabled=!selectedCode;
      $('#code-selection-status').textContent=!selectedCode?'Belum ada kode ditandai.':selectedCode.start===selectedCode.end?`Baris ${selectedCode.start+1} ditandai.`:`Baris ${selectedCode.start+1}-${selectedCode.end+1} ditandai.`;
      $('#code-context').textContent=!state.created?'Berkas muncul setelah AI membuat formulir.':reported?'Bagian ini sudah dibahas. Tandai bagian lain atau lanjutkan percakapan di AI.':'Klik atau blok teks kode yang ingin dibahas. Panah atas/bawah memilih baris, Shift memperluas tanda.';
      $('#source-code').querySelectorAll('.code-line').forEach(row=>{
        const line=Number(row.dataset.line),selected=Boolean(selectedCode&&line>=selectedCode.start&&line<=selectedCode.end);
        row.classList.toggle('code-line--selected',selected);
      });
    }
    function selectRange(start,end){
      selectedCode=example.codeSelection(state,saved.file,Math.min(start,end),Math.max(start,end));
      saved.selection=selectedCode?{file:saved.file,key:example.sourceKey(state,saved.file),range:{start:selectedCode.start,end:selectedCode.end}}:null;
      selectionTools();
    }
    function renderCode(){
      const source=example.sources(state),available=['html','css','js'].filter(key=>Boolean(source[key]));
      if(!available.includes(saved.file)&&available.length)saved.file=available.includes('js')?'js':available[0];
      const selected=saved.file,pre=$('#source-code');pre.replaceChildren();
      $('#project-empty').hidden=available.length>0;
      $('#project-empty').textContent=state.created?'Berkas halaman telah dihapus.':'Belum ada berkas. Lanjutkan percakapan sampai AI membuat formulir.';
      $('#project-css-status').hidden=!state.created||Boolean(source.css);
      const text=source[selected]||'';
      for(const [index,line] of text.split('\n').entries()){
        const row=document.createElement('span');row.className='code-line';row.dataset.line=String(index);
        const number=document.createElement('span');number.className='code-number';number.textContent=String(index+1);number.setAttribute('aria-hidden','true');
        const code=document.createElement('code');
        const tokens=/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/.*|\b(?:const|let|if|else|for|of|return|async|await|function|true|false|null|new)\b|\b\d+\b)/g;
        let start=0;
        for(const match of line.matchAll(tokens)){
          code.append(document.createTextNode(line.slice(start,match.index)));
          const token=document.createElement('span');token.className=match[0].startsWith('//')?'token-comment':/^["']/.test(match[0])?'token-string':'token-keyword';token.textContent=match[0];code.append(token);start=match.index+match[0].length;
        }
        code.append(document.createTextNode(line.slice(start)||(!line?' ':'')));
        if(selected==='js'&&(state.checkResponse&&/response\.ok|hasil\.success/.test(line)||state.fieldErrors&&/hasil\.errors/.test(line)||state.keepValues&&/form\.reset/.test(line)))row.classList.add('code-line--changed');
        row.append(number,code);pre.append(row);
      }
      document.querySelectorAll('[data-code-file]').forEach(button=>{button.hidden=!available.includes(button.dataset.codeFile);if(button.dataset.codeFile===selected)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');});
      $('#code-file-name').textContent=available.length?{html:'index.html',css:'styles.css',js:'app.js'}[selected]:'Belum ada berkas';
      pre.hidden=!text;
      const selection=saved.selection;
      if(selection?.file===saved.file&&selection.key===example.sourceKey(state,saved.file)){
        selectionAnchor=selection.range.start;selectionCursor=selection.range.end;selectRange(selectionAnchor,selectionCursor);
      }else{selectedCode=null;selectionTools();}
    }
    function responseTools(){
      const findings=lastResponse?observations.responseFindings(saved,state).filter(item=>!state.reported?.includes(item.observationKey)):[];
      const labels={response:'Pesan halaman berbeda dengan response',errors:'Keterangan kesalahan tidak tampil',reset:'Isian ikut kosong saat ditolak',accepted:'Pendaftaran diterima', 'rejected-match':'Penolakan pada percobaan ini'};
      const old=$('#response-topic').value;
      $('#response-topic').replaceChildren(...(findings.length?findings.map(item=>new Option(labels[item.topic],item.topic)):[new Option(lastResponse?'Response ini sudah dibahas':'Belum ada response','')]));
      if(findings.some(item=>item.topic===old))$('#response-topic').value=old;
      $('#response-topic').disabled=!findings.length;
      $('#response-discuss').disabled=!findings.length||callbacks.endingLocked();
      $('#appearance-discuss').disabled=!state.created||!state.filesAvailable||state.reported?.includes(`appearance:${example.sourceKey(state,'css')}`)||callbacks.endingLocked();
    }
    function renderPreview(){previewRevision++;preview.srcdoc=example.documentSource(state,saved.input,lastResponse,previewRevision);responseTools();}
    function setView(view,notify=true){
      if(!active)return;
      if(notify&&saved.view!==view)remember({kind:'view',view});
      saved.view=view;if(view==='code')saved.viewedCode=true;if(view==='apps')saved.viewedApps=true;
      document.body.dataset.workspaceView=view;
      $('#scene').hidden=view!=='ai';$('#registration-workspace').hidden=view==='ai';$('#code-view').hidden=view!=='code';$('#apps-view').hidden=view!=='apps';$('#ai-health').hidden=view!=='ai';
      document.querySelectorAll('[data-workspace-view]').forEach(button=>button.setAttribute('aria-current',button.dataset.workspaceView===view?'page':'false'));
      if(view==='code')renderCode();if(view==='apps')responseTools();
      if(notify)publish();
    }
    function sync(frame,mode){
      active=!['intro','conclusion','end'].includes(mode);
      $('#workspace-nav').hidden=!active;$('#ai-health').hidden=!active;
      if(!active){$('#registration-workspace').hidden=true;$('#scene').hidden=false;document.body.dataset.workspaceView='ai';return;}
      const next=frame.labState||state;
      const nextSignature=JSON.stringify(['created','checkResponse','fieldErrors','keepValues','design','filesAvailable','dataLost'].map(key=>next[key]));
      state=structuredClone(next);
      if(saved.selection&&saved.selection.key!==example.sourceKey(state,saved.selection.file)){saved.selection=null;selectedCode=null;}
      if(signature!==nextSignature){
        const restoring=signature==='';signature=nextSignature;lastResponse=null;
        if(state.dataLost&&!lossApplied){saved.records=[];lossApplied=true;}
        if(restoring){const previous=saved.attempts.findLast(item=>['checkResponse','fieldErrors','keepValues'].every(key=>item[key]===state[key]));if(previous)lastResponse=example.backend(previous.input);}
        renderCode();renderPreview();
      }
      const used=frame.requests||1,heat=definition.heatLevel(used),condition=heat===4?'Habis':heat>=2?'Kritis':heat?'Panas':'Stabil';
      $('#health-fill').style.transform=`scaleX(${Math.max(0,Math.min(1,(definition.requestLimit-used)/(definition.requestLimit-1)))})`;
      $('#ai-health').dataset.condition=condition.toLowerCase();$('#ai-health').setAttribute('aria-label',`Kondisi AI ${condition.toLowerCase()}`);$('#health-description').textContent=condition;
      setView(saved.view,false);
    }
    function discuss(focus){
      if(callbacks.endingLocked())return;
      saved.focus={...focus,after:after()};
      remember({kind:focus.kind==='code'?'code':focus.kind==='appearance'?'appearance':'response',file:focus.file,topic:focus.topic,...(focus.range?{range:focus.range}:{})});
      setView('ai');refresh();
    }
    document.querySelectorAll('[data-workspace-view]').forEach(button=>button.addEventListener('click',()=>{setView(button.dataset.workspaceView);refresh();},events));
    document.querySelectorAll('[data-code-file]').forEach(button=>button.addEventListener('click',()=>{if(saved.file===button.dataset.codeFile)return;saved.file=button.dataset.codeFile;saved.selection=null;selectedCode=null;if(saved.focus?.kind==='code')saved.focus=null;renderCode();publish();},events));
    $('#code-clear').addEventListener('click',()=>{selectedCode=null;saved.selection=null;if(saved.focus?.kind==='code')saved.focus=null;window.getSelection()?.removeAllRanges();selectionTools();$('#source-code').focus({preventScroll:true});publish();},events);
    const editor=$('#source-code');
    function captureSelection(event){
      const selection=window.getSelection();
      const rowFor=node=>(node?.nodeType===Node.ELEMENT_NODE?node:node?.parentElement)?.closest('.code-line');
      const anchor=rowFor(selection?.anchorNode),focus=rowFor(selection?.focusNode);
      if(selection&&!selection.isCollapsed&&anchor&&focus&&editor.contains(anchor)&&editor.contains(focus)){
        selectionAnchor=Number(anchor.dataset.line);selectionCursor=Number(focus.dataset.line);
      }else{
        const row=event?.target.closest('.code-line');if(!row)return;
        const line=Number(row.dataset.line);
        if(!event.shiftKey||!selectedCode)selectionAnchor=line;
        selectionCursor=line;
      }
      if(saved.focus?.kind==='code')saved.focus=null;selectRange(selectionAnchor,selectionCursor);publish();
    }
    editor.addEventListener('pointerup',captureSelection,events);
    document.addEventListener('selectionchange',()=>{if(saved.view==='code'&&!window.getSelection()?.isCollapsed)captureSelection();},events);
    $('#source-code').addEventListener('keydown',event=>{
      if(event.altKey||event.ctrlKey||event.metaKey)return;
      if(event.key==='Enter'){
        event.preventDefault();event.stopPropagation();
        if(!$('#code-discuss').disabled)$('#code-discuss').click();
      }else if(['ArrowUp','ArrowDown','Home','End'].includes(event.key)){
        const source=example.sources(state)[saved.file];if(!source)return;
        event.preventDefault();event.stopPropagation();
        const last=source.split('\n').length-1;
        const next=event.key==='Home'?0:event.key==='End'?last:selectedCode?Math.max(0,Math.min(last,selectionCursor+(event.key==='ArrowDown'?1:-1))):0;
        if(!event.shiftKey||!selectedCode)selectionAnchor=next;
        selectionCursor=next;if(saved.focus?.kind==='code')saved.focus=null;selectRange(selectionAnchor,next);publish();
        editor.querySelector(`[data-line="${next}"]`)?.scrollIntoView({block:'nearest',inline:'nearest'});
      }
    },events);
    $('#code-discuss').addEventListener('click',()=>{const focus=codeFocus();if(focus)discuss(focus);},events);
    $('#response-discuss').addEventListener('click',()=>{
      const item=observations.responseFindings(saved,state).find(finding=>finding.topic===$('#response-topic').value);
      if(item&&lastResponse)discuss({kind:'response',topic:item.topic,key:item.key});
    },events);
    $('#appearance-discuss').addEventListener('click',()=>discuss({kind:'appearance',topic:'design',key:example.sourceKey(state,'css')}),events);
    $('#clear-response').addEventListener('click',()=>{lastResponse=null;renderPreview();$('#workspace-note').textContent='Response dibersihkan. Isian dan riwayat percobaan tetap ada.';},events);
    window.addEventListener('message',event=>{
      if(event.source!==preview.contentWindow||event.data?.revision!==previewRevision||!active)return;
      const message=event.data;
      if(message.type==='registration-ready')preview.contentWindow.postMessage({type:'registration-records',records:saved.records},'*');
      else if(message.type==='registration-runtime-error')$('#workspace-note').textContent=`Kode Apps berhenti: ${String(message.message||'Kesalahan JavaScript').slice(0,500)}`;
      else if(message.type==='registration-shortcut'&&['1','2','3'].includes(message.key)){setView({'1':'ai','2':'code','3':'apps'}[message.key]);refresh();}
      else if(message.type==='registration-input'&&!callbacks.endingLocked()){saved.input=example.normalize(message.input);publish();}
      else if(message.type==='registration-result'&&state.filesAvailable&&!callbacks.endingLocked()){
        if(!['checkResponse','fieldErrors','keepValues'].every(key=>message.flags?.[key]===state[key]))return;
        const input=example.normalize(message.input);lastResponse=example.backend(input);
        if(lastResponse.body.success){saved.records.push(lastResponse.body.data);saved.records=saved.records.slice(-30);preview.contentWindow.postMessage({type:'registration-records',records:saved.records},'*');}
        saved.sequence++;
        saved.attempts.push({input,...(message.valuesAfter&&typeof message.valuesAfter==='object'?{valuesAfter:example.normalize(message.valuesAfter)}:{}),after:after(),serial:saved.sequence,checkResponse:state.checkResponse,fieldErrors:state.fieldErrors,keepValues:state.keepValues});saved.attempts=saved.attempts.slice(-30);
        remember({kind:'submit',serial:saved.sequence});
        $('#workspace-note').textContent='Percobaan dicatat. Anda bisa membahas response ini atau kembali ke AI.';
        responseTools();publish();refresh();
      }
    },events);
    function shortcut(event){
      if(!active||event.altKey||event.ctrlKey||event.metaKey||event.repeat||document.querySelector('dialog[open]'))return false;
      if(event.target.closest('input,textarea,select,[contenteditable=true]'))return false;
      const view={'1':'ai','2':'code','3':'apps'}[event.key];
      if(view){event.preventDefault();setView(view);refresh();return true;}
      return saved.view!=='ai';
    }
    return {sync,evidence,shortcut,setView,
      restore(value){saved=definition.cleanWorkspace(value);signature='';lastResponse=null;lossApplied=false;selectedCode=null;},
      reset(){saved=definition.cleanWorkspace();signature='';lastResponse=null;lossApplied=false;selectedCode=null;},
      destroy(){controller.abort();},isAI:()=>saved.view==='ai'
    };
  }
  window.TEFA_REGISTRATION_WORKSPACE={create};
})();
