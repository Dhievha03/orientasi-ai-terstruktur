/* Koreografi pergantian bab yang telah disetujui, dipisahkan agar desain slide tidak mengubahnya. */
window.TEFA_CALENDAR = (() => {
  const $ = selector => document.querySelector(selector);
  const pad = value => String(value).padStart(2,'0');
  let running = null;
  let frame;
  function lightPath(fraction){
    const radius=Math.max(.01,Math.abs(1-2*fraction)*44).toFixed(2);
    return `M50 6A44 44 0 0 1 50 94A${radius} 44 0 0 ${fraction>.5?1:0} 50 6Z`;
  }
  function moon(fraction) {
    return `<svg class="moon-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#454752"/><path class="moon-light" d="${lightPath(fraction)}" fill="currentColor" opacity="${fraction>0?1:0}"/></svg>`;
  }
  function updateMoon(fraction){
    const light=$('#transition-moon .moon-light');
    light.setAttribute('d',lightPath(fraction));light.setAttribute('opacity',String(fraction>0?1:0));
  }
  function initialize(chapters){
    $('#calendar-track').innerHTML=chapters.map((chapter,index)=>`<div class="calendar-day"><div class="calendar-day-label"><span class="calendar-day-number">${pad(index+1)}</span><span class="calendar-day-caption">BAB</span></div><div class="calendar-day-moon">${moon(chapter.moon)}</div></div>`).join('');
    $('#skip-transition').addEventListener('click',finish);
    window.addEventListener('resize',layout);
  }
  function setFocus(focus,logical=focus){
    if(!running?.geometry)return;
    running.focus=focus;
    const {stepX,stepY}=running.geometry;
    $('#calendar-track').style.transform=`translate(${-focus*stepX}px,${-focus*stepY}px)`;
    const selected=Math.max(0,Math.min(running.chapters.length-1,Math.round(logical)));
    $('#chapter-transition').dataset.calendarChapter=String(selected+1);
    document.querySelectorAll('.calendar-day').forEach((day,index)=>{
      const distance=Math.abs(index-logical);
      day.classList.toggle('is-current',index===selected);day.style.opacity=String(Math.max(.7,1-distance*.06));
      day.querySelector('.calendar-day-moon').style.opacity=String(Math.min(1,distance/.55));
    });
  }
  function layout(){
    if(!running)return;
    const width=innerWidth,height=innerHeight,compact=width<=600;
    const x=width*(compact?.68:.60),y=height*.62+Math.tan(20*Math.PI/180)*(x-width*.5);
    const stepX=compact?Math.max(132,width*.34):width*.13,stepY=-height*(compact?.15:.13);
    const numberHeight=$('.calendar-day-number').offsetHeight;
    const slope=stepY/stepX,axisY=y+numberHeight*.60,lineY0=axisY-slope*x,lineY1=axisY+slope*(width-x),lineLength=Math.hypot(width,lineY1-lineY0);
    running.geometry={x,y,stepX,stepY,lineLength};
    $('#chapter-transition').style.setProperty('--focus-x',`${x}px`);$('#chapter-transition').style.setProperty('--focus-y',`${y}px`);
    $('#calendar-axis').setAttribute('viewBox',`0 0 ${width} ${height}`);
    const axis=$('#calendar-axis-line');
    for(const [key,value]of Object.entries({x1:0,y1:lineY0,x2:width,y2:lineY1}))axis.setAttribute(key,String(value));
    axis.style.strokeDasharray=String(lineLength);axis.style.strokeDashoffset=String(lineLength*(1-running.entry));
    document.querySelectorAll('.calendar-day').forEach((day,index)=>{
      day.style.left=`${x+index*stepX}px`;day.style.top=`${y+index*stepY}px`;
      const label=day.querySelector('.calendar-day-label'),number=day.querySelector('.calendar-day-number');
      label.style.left=`${-number.offsetWidth/2}px`;label.style.top=`${-number.offsetHeight/2}px`;
    });
    const metaX=compact?24:width*.075,month=$('.calendar-month'),number=$('#transition-number');
    month.style.left=`${metaX}px`;
    const numberX=metaX+number.offsetLeft+number.offsetWidth/2;
    const bandY=height*.62+Math.tan(20*Math.PI/180)*(numberX-width*.5);
    month.style.top=`${bandY-number.offsetTop-number.offsetHeight/2}px`;
    setFocus(running.focus);
  }
  function start(chapters,from,to,onCommit,onFinish){
    if(running)return;
    const previous=chapters[from],chapter=chapters[to],duration=chapter.climax?4200:2400,overlay=$('#chapter-transition');
    $('#transition-number').textContent=pad(to+1);$('#transition-title-text').textContent=chapter.name;$('#transition-moon').innerHTML=moon(previous.moon);
    overlay.classList.toggle('full-moon',Boolean(chapter.climax));overlay.classList.remove('is-landed');overlay.style.setProperty('--land-duration',`${duration*.30}ms`);
    overlay.style.clipPath='polygon(135% 0,100% 0,100% 100%,100% 100%)';overlay.hidden=false;
    running={chapters,from,to,focus:from,entry:0,onCommit,onFinish,committed:false};layout();
    $('#app-shell').classList.add('is-changing');$('#app-shell').style.setProperty('--reveal-duration',`${duration*.18}ms`);$('#app-shell').inert=true;$('#exit-clean').inert=true;
    $('#skip-transition').focus({preventScroll:true});
    const started=performance.now();
    const clamp=value=>Math.max(0,Math.min(1,value)),ease=value=>value<.5?4*value**3:1-(-2*value+2)**3/2;
    const step=now=>{
      if(!running)return;
      const progress=Math.min(1,(now-started)/duration),entry=1-(1-clamp(progress/.19))**3,travel=ease(clamp((progress-.26)/.38)),focus=from+(to-from)*travel;
      running.entry=entry;setFocus(focus+(1-entry)*.6,focus);
      const wipe=progress<.14?1-ease(clamp(progress/.14)):progress>.88?ease(clamp((progress-.88)/.12)):0,edge=-35+170*wipe;
      overlay.style.clipPath=`polygon(${edge}% 0,100% 0,100% 100%,${edge-35}% 100%)`;
      $('.calendar-month').style.opacity=String(entry);$('.calendar-month').style.transform=`translateY(${(1-entry)*30}px)`;$('.calendar-heading').style.opacity=String(clamp((progress-.08)/.14));
      $('#calendar-axis-line').style.strokeDashoffset=String(running.geometry.lineLength*(1-entry));$('#transition-moon').style.opacity=String(clamp((progress-.16)/.1));
      const phase=ease(clamp((progress-.18)/.46));
      updateMoon(previous.moon+(chapter.moon-previous.moon)*phase);
      if(progress>=.64){overlay.classList.add('is-landed');if(!running.committed){running.committed=true;onCommit();}}
      if(progress>=.82)$('#app-shell').classList.add('is-revealing');
      if(progress>=1)finish();else frame=requestAnimationFrame(step);
    };
    frame=requestAnimationFrame(step);
  }
  function finish(){
    if(!running)return;
    cancelAnimationFrame(frame);const current=running;running=null;
    if(!current.committed)current.onCommit();
    $('#chapter-transition').hidden=true;$('#app-shell').inert=false;$('#exit-clean').inert=false;$('#app-shell').classList.remove('is-changing','is-revealing');current.onFinish();
  }
  return {initialize,start,finish,moon,isRunning:()=>Boolean(running)};
})();
