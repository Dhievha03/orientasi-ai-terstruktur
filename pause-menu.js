window.TEFA_PAUSE = (() => {
  'use strict';
  const $=selector=>document.querySelector(selector);
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char]);
  const poses=[
    [0,0,-18,1.15],[12,12,-12,.92],[6,22,-8,1.02],[-4,33,-5,1.03],
    [10,43,-3,.96],[0,54,-1,1.01],[14,64,0,.94],[-7,74,0,1.05],[-4,85,2,1],[10,96,8,.95]
  ];
  let deck,selected=0,inkFrame,settleUntil=0;
  const selectorShapes=(width,height)=>({
    white:[[0,height*.9],[width,0],[width*.89,height*.84]],
    ribbon:[[-12,height*.9],[width*.98,height*.24],[width*.94,height*.40],[0,height*1.02]]
  });
  function initialize(content){
    deck=content;
    $('#chapter-nav').innerHTML=`<div id="menu-cursor" class="pause-selector" aria-hidden="true"><svg preserveAspectRatio="none"><defs><mask id="pause-outside-white" maskUnits="userSpaceOnUse"><rect class="pause-mask-ground" fill="white"/><path class="pause-mask-cut" fill="black"/></mask></defs><path class="pause-selector-back"/><path class="cursor-white"/><path class="pause-selector-ribbon" mask="url(#pause-outside-white)"/></svg></div>${deck.chapters.map((chapter,index)=>{
      const [x,y,angle,scale]=poses[index];
      return `<button class="chapter-tab" data-chapter="${chapter.id}" aria-label="${escape(chapter.menu)} · ${escape(chapter.name)}" style="--order:${index};--pose-x:${x}%;--pose-y:${y}%;--pose-angle:${angle}deg;--word-scale:${scale}"><span class="pause-label tab-name" aria-hidden="true"><span class="pause-label-base">${escape(chapter.menu)}</span><span class="pause-label-ink">${escape(chapter.menu)}</span><span class="pause-label-flare">${escape(chapter.menu)}</span></span></button>`;
    }).join('')}`;
    $('#open-menu-selection').addEventListener('click',()=>document.querySelectorAll('.chapter-tab')[selected].click());
  }
  function select(index){
    selected=index;
    document.querySelectorAll('.chapter-tab').forEach((button,at)=>{
      button.classList.toggle('is-preview',at===index);
      button.style.setProperty('--pause-shift',`${at<index?-24:at>index?20:0}px`);
    });
    const chapter=deck.chapters[index];
    $('#menu-preview-name').textContent=chapter.name;
    $('#menu-preview-description').textContent=chapter.description;
    $('#menu-topics').innerHTML=deck.slides.filter(slide=>slide.chapter===chapter.id).slice(0,3).map((slide,at)=>`<li style="--topic-order:${at}">${escape(slide.title)}</li>`).join('');
    layout();
    const button=document.querySelectorAll('.chapter-tab')[index];
    if(innerWidth<=700&&document.activeElement===button)button.scrollIntoView({block:'nearest',inline:'nearest'});
  }
  function layout(follow=true){
    const button=document.querySelectorAll('.chapter-tab')[selected];
    if(!button||!$('#chapter-menu').open)return;
    const label=button.querySelector('.pause-label'),cursor=$('#menu-cursor');
    const wordWidth=label.offsetWidth,wordHeight=label.offsetHeight;
    const width=wordWidth*1.35+48,height=wordHeight*1.9;
    const labelX=wordWidth*.28+16,labelY=wordHeight*.65;
    const dx=label.offsetLeft-labelX,dy=label.offsetTop-labelY-button.offsetHeight/2;
    const matrix=new DOMMatrix(getComputedStyle(button).transform),offset=matrix.transformPoint(new DOMPoint(dx,dy));
    const angle=parseFloat(getComputedStyle(button).getPropertyValue('--pose-angle'));
    const x=button.offsetLeft+offset.x,y=button.offsetTop+button.offsetHeight/2+offset.y;
    cursor.style.width=`${width}px`;cursor.style.height=`${height}px`;cursor.style.transform=`translate(${x}px,${y}px) rotate(${angle}deg)`;
    cursor.querySelector('svg').setAttribute('viewBox',`0 0 ${width} ${height}`);
    const {white,ribbon}=selectorShapes(width,height);
    const path=points=>`M${points.map(point=>point.join(' ')).join(' L')}Z`;
    const clip=points=>`polygon(${points.map(([px,py])=>`${px-labelX}px ${py-labelY}px`).join(',')})`;
    cursor.querySelector('.cursor-white').setAttribute('d',path(white));
    cursor.querySelector('.pause-mask-cut').setAttribute('d',path(white));
    const ground=cursor.querySelector('.pause-mask-ground');
    for(const [name,value]of Object.entries({x:-24,y:-24,width:width+48,height:height+48}))ground.setAttribute(name,value);
    cursor.querySelector('.pause-selector-back').setAttribute('d',path([[0,height*.98],[width+10,-4],[width*.91+8,height*.84+9]]));
    cursor.querySelector('.pause-selector-ribbon').setAttribute('d',path(ribbon));
    label.style.setProperty('--pause-ink-clip',clip(white));
    label.style.setProperty('--pause-flare-clip',clip(ribbon));
    syncInk();
    if(follow){
      settleUntil=performance.now()+700;
      if(!inkFrame&&!document.body.classList.contains('motion-off'))inkFrame=requestAnimationFrame(followInk);
    }
  }
  function syncInk(){
    const svg=$('#menu-cursor svg'),matrix=svg.getScreenCTM();if(!matrix)return;
    const screen=DOMMatrix.fromMatrix(matrix),width=svg.viewBox.baseVal.width,height=svg.viewBox.baseVal.height;
    const {white,ribbon}=selectorShapes(width,height);
    document.querySelectorAll('.chapter-tab').forEach(button=>{
      const label=button.querySelector('.pause-label'),style=getComputedStyle(button),transform=new DOMMatrix(style.transform),box=button.getBoundingClientRect();
      const corners=[[0,0],[button.offsetWidth,0],[0,button.offsetHeight],[button.offsetWidth,button.offsetHeight]].map(([x,y])=>transform.transformPoint(new DOMPoint(x,y)));
      const originX=box.left-Math.min(...corners.map(point=>point.x)),originY=box.top-Math.min(...corners.map(point=>point.y));
      const inverse=transform.inverse();
      const clip=points=>`polygon(${points.map(([x,y])=>{
        const point=screen.transformPoint(new DOMPoint(x,y)),local=inverse.transformPoint(new DOMPoint(point.x-originX,point.y-originY));
        return `${local.x-label.offsetLeft}px ${local.y-label.offsetTop}px`;
      }).join(',')})`;
      label.style.setProperty('--pause-ink-clip',clip(white));label.style.setProperty('--pause-flare-clip',clip(ribbon));
    });
  }
  function followInk(){
    inkFrame=null;if(!$('#chapter-menu').open)return;
    layout(false);
    if(performance.now()<settleUntil&&!document.body.classList.contains('motion-off'))inkFrame=requestAnimationFrame(followInk);
  }
  return {initialize,select,layout};
})();
