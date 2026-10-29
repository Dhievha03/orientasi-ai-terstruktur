/* Arsip renderer sebelum redesign. */
(() => {
  'use strict';

  const deck = window.TEFA_DECK;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const pad = (value) => String(value).padStart(2, '0');
  const storageKey = 'tefa-orientasi-ai:v1';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const state = { index: 0, notes: false, clean: false, transitions: true, waterMotion: true, reveals: {} };
  let storageAvailable = true;
  let transitionTarget = null;
  let transitionHandle;
  let previousTransitionFocus;
  let noticeHandle;
  let previewChapter = 0;
  let cursorFrame;
  let calendarMotion = null;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved === 'object') {
      const position = deck.slides.findIndex((slide) => slide.id === saved.slideId);
      if (position >= 0) state.index = position;
      for (const name of ['notes', 'clean', 'transitions', 'waterMotion']) {
        if (typeof saved[name] === 'boolean') state[name] = saved[name];
      }
      if (position >= 0 && saved.deckVersion === deck.version && saved.reveals && typeof saved.reveals === 'object') {
        for (const [id,visible] of Object.entries(saved.reveals)) if (visible === true && deck.slides.some(slide => slide.id === id)) state.reveals[id] = true;
      }
    }
  } catch {
    storageAvailable = false;
  }

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        slideId: deck.slides[state.index].id,
        deckVersion: deck.version,
        notes: state.notes,
        clean: state.clean,
        transitions: state.transitions,
        waterMotion: state.waterMotion,
        reveals: state.reveals
      }));
    } catch {
      if (storageAvailable) notify('Penyimpanan browser tidak tersedia. Posisi tetap dapat digunakan selama halaman terbuka.');
      storageAvailable = false;
    }
  }

  function notify(message) {
    window.clearTimeout(noticeHandle);
    $('#notice').textContent = message;
    $('#notice').hidden = false;
    noticeHandle = window.setTimeout(() => { $('#notice').hidden = true; }, 4200);
  }

  function moon(fraction) {
    let illumination = '';
    if (fraction >= 1) {
      illumination = '<circle cx="50" cy="50" r="43" fill="currentColor"/>';
    } else if (fraction > 0) {
      const radius = Math.max(0.01, Math.abs(1 - 2 * fraction) * 43).toFixed(2);
      const sweep = fraction > 0.5 ? 1 : 0;
      illumination = `<path d="M50 7 A43 43 0 0 1 50 93 A${radius} 43 0 0 ${sweep} 50 7Z" fill="currentColor"/>`;
    }
    return `<svg class="moon-svg" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1" opacity=".5"/><circle cx="50" cy="50" r="43" fill="#071735" stroke="currentColor" stroke-width=".7"/>${illumination}<path d="M50 0v3M50 97v3M0 50h3M97 50h3" fill="none" stroke="currentColor" stroke-width="1"/></svg>`;
  }

  function calendarMoon(fraction) {
    let light = '';
    if (fraction >= 1) light = '<circle cx="50" cy="50" r="44" fill="currentColor"/>';
    else if (fraction > 0) {
      const radius = Math.max(.01,Math.abs(1-2*fraction)*44).toFixed(2);
      light = `<path d="M50 6A44 44 0 0 1 50 94A${radius} 44 0 0 ${fraction > .5 ? 1 : 0} 50 6Z" fill="currentColor"/>`;
    }
    return `<svg class="moon-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#454752"/>${light}</svg>`;
  }

  function title(text) {
    const parts = text.split('|');
    return parts.map((part, index) => `<span class="title-line${index ? ' title-accent' : ''}">${escape(part)}</span>`).join('');
  }

  function table(slide, kind = '') {
    const heads = slide.headings || ['Komponen', 'Fungsi', 'Contoh'];
    const headings = heads;
    return `<table class="data-table ${headings.length === 2 ? 'data-table--two' : ''} ${kind ? `data-table--${kind}` : ''}"><caption class="sr-only">${escape(slide.title.replace('|', ' '))}</caption><thead><tr>${headings.map((head) => `<th scope="col">${escape(head)}</th>`).join('')}</tr></thead><tbody>${slide.rows.map((row) => `<tr>${row.map((cell) => `<td>${escape(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }

  function diagram(nodes) {
    return `<div class="flow-diagram" aria-label="Alur komponen">${nodes.map(([name, description], index) => `${index ? '<span class="flow-connector" aria-hidden="true">→</span>' : ''}<div class="flow-node"><strong>${escape(name)}</strong><span>${escape(description)}</span></div>`).join('')}</div>`;
  }

  function decisionPanels(items) {
    return `<div class="decision-grid">${items.map((item) => `<section class="decision-panel"><span class="panel-label">${escape(item.label)}</span><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p><div class="panel-detail"><strong>ALASAN</strong>${escape(item.reason)}</div><div class="panel-detail"><strong>TINDAKAN BERIKUTNYA</strong>${escape(item.action)}</div></section>`).join('')}</div>`;
  }

  const isRevealed = slide => Boolean(state.reveals[slide.id]);
  function revealButton(slide,label='Tampilkan pembahasan') {
    const visible=isRevealed(slide);
    return `<button id="reveal-button" type="button" class="inline-action compact-reveal-button" aria-expanded="${visible}" aria-controls="case-discussion" data-open-label="${escape(label)}" data-close-label="Sembunyikan penjelasan"><span>${visible ? 'Sembunyikan penjelasan' : escape(label)}</span>${icon('arrow')}</button>`;
  }

  const renderers = {
    hero(slide) {
      return `<div class="hero-layout"><div class="hero-content"><div class="hero-pretitle">${escape(slide.hero.pretitle)}</div><h1 class="hero-title">${slide.hero.lines.map((line,index) => `<span${index ? ' class="hero-highlight"' : ''}>${escape(line)}</span>`).join('')}</h1><div class="hero-audience">${escape(slide.hero.audience)}</div><p class="hero-description">${escape(slide.subtitle)}</p><div class="hero-parts">${slide.parts.map(([label,text]) => `<div><strong>${escape(label)}</strong><span>${escape(text)}</span></div>`).join('')}</div></div></div>`;
    },
    pillars(slide) {
      return `<div class="pillars-grid">${slide.items.map((item) => `<section class="pillar"><div><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p></div></section>`).join('')}</div>`;
    },
    scope(slide) {
      return `<div class="scope-layout"><div><ul class="feature-list">${slide.features.map((feature) => `<li>${icon('check')}<span>${escape(feature)}</span></li>`).join('')}</ul><p class="scope-boundary">${escape(slide.boundary)}</p></div><div class="task-specimen" aria-label="Ilustrasi statis daftar tugas"><div class="specimen-head"><span>TEFA / TASKS</span><span class="specimen-tag">ILUSTRASI STATIS</span></div><h3>Satu daftar.<br>Pekerjaan lebih terarah.</h3><div class="specimen-row"><span class="square-check" aria-hidden="true"></span><span>Membuat laporan</span></div><div class="specimen-row done"><span class="square-check" aria-hidden="true"></span><span>Meninjau kebutuhan</span></div><div class="specimen-foot">01 PENGGUNA / 01 BROWSER</div></div></div>`;
    },
    toolmap(slide) { return table(slide, 'tools'); },
    toolchoice(slide) {
      return `${diagram(slide.diagram)}<div class="selection-grid">${slide.items.map((item, index) => `<section class="selection-item"><span class="selection-number">${pad(index + 1)}</span><div><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p></div></section>`).join('')}</div>`;
    },
    compare(slide) { return table(slide, 'compare'); },
    decision(slide) { return decisionPanels(slide.items); },
    workflow(slide) {
      return `<div class="workflow-grid">${slide.steps.map(([name, description], index) => `<section class="workflow-step"><span class="step-number">${pad(index + 1)} / ${index < 6 ? '→' : '✓'}</span><h3>${escape(name)}</h3><p>${escape(description)}</p></section>`).join('')}</div>`;
    },
    criteria(slide) { return table(slide, 'criteria'); },
    checkpoints(slide) {
      return `<div class="checkpoint-list">${slide.items.map(([checkpoint, situation, action]) => `<section class="checkpoint-row"><h3>${escape(checkpoint)}</h3><p>${escape(situation)}</p><p class="checkpoint-action">${escape(action)}</p></section>`).join('')}</div>`;
    },
    prompt(slide) {
      return `<div class="prompt-layout"><div>${slide.bad ? `<div class="prompt-before"><span>INSTRUKSI AWAL</span><p>“${escape(slide.bad)}”</p></div>` : ''}<blockquote class="instruction">${escape(slide.quote)}</blockquote>${slide.copyPrompt ? '<button type="button" class="inline-action" data-copy-prompt>Salin instruksi lengkap</button>' : ''}</div><ol class="prompt-elements" aria-label="Unsur prompt">${slide.elements.map((element) => `<li>${escape(element)}</li>`).join('')}</ol></div>`;
    },
    bugbrief(slide) {
      return `<div class="bug-layout"><dl class="bug-facts">${slide.facts.map(([label, detail]) => `<div><dt>${escape(label)}</dt><dd>${escape(detail)}</dd></div>`).join('')}</dl><blockquote class="instruction">“${escape(slide.quote)}”</blockquote></div>`;
    },
    mechanisms(slide) {
      return `<div class="mechanism-grid">${slide.items.map((item) => `<section class="mechanism"><span class="panel-label">${escape(item.label)}</span><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p><p class="mechanism-example">${escape(item.example)}</p></section>`).join('')}</div>`;
    },
    skill(slide) {
      return `<div class="skill-trigger">${escape(slide.trigger)}</div><div class="skill-steps">${slide.steps.map(([name, description]) => `<section class="skill-step"><h3>${escape(name)}</h3><p>${escape(description)}</p></section>`).join('')}</div><div class="skill-output"><span class="panel-label">CONTOH HASIL REVIEW</span>${escape(slide.example)}</div>`;
    },
    skillScope(slide) {
      return `<div class="paths-grid">${slide.paths.map((item) => `<section class="path-panel"><span class="panel-label">${escape(item.label)}</span><code>${escape(item.path)}</code><p>${escape(item.text)}</p></section>`).join('')}</div>${diagram(slide.diagram)}`;
    },
    loop(slide) {
      return `<div class="loop-steps">${slide.steps.map(([name, description]) => `<section class="loop-step"><h3>${escape(name)}</h3><p>${escape(description)}</p></section>`).join('')}</div><blockquote class="instruction">“${escape(slide.quote)}”</blockquote>`;
    },
    review(slide) { return decisionPanels(slide.items); },
    testplan(slide) { return table(slide, 'tests'); },
    case(slide) {
      const visible=isRevealed(slide);
      return `<div class="observation-grid">${slide.observations.map(([number,name,description])=>`<section class="observation"><span class="observation-number">${escape(number)}</span><h3>${escape(name)}</h3><p>${escape(description)}</p></section>`).join('')}</div><div class="case-question"><h3>${escape(slide.question)}</h3>${revealButton(slide)}</div><div id="case-discussion" class="discussion-grid"${visible?'':' hidden'}>${slide.discussion.map(item=>`<section class="discussion-item"><span class="panel-label">${escape(item.label)}</span><p>${escape(item.text)}</p></section>`).join('')}</div>`;
    },
    caseAction(slide) {
      return `<blockquote class="instruction">“${escape(slide.quote)}”</blockquote><div class="case-action-steps">${slide.steps.map(([name, description]) => `<section class="case-action-step"><h3>${escape(name)}</h3><p>${escape(description)}</p></section>`).join('')}</div>`;
    },
    report(slide) {
      return `<div class="report-layout"><ul class="result-list" aria-label="Hasil ilustratif">${slide.results.map(([name, status]) => `<li><span>${escape(name)}</span><span class="result-status${status === 'belum diuji' ? ' untested' : ''}">${escape(status)}</span></li>`).join('')}</ul><div class="report-decision"><h3>${escape(slide.decision)}</h3><p>${escape(slide.reason)}</p></div></div>`;
    },
    habits(slide) {
      return `<div class="habits-grid">${slide.items.map((item) => `<section class="habit"><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p><p class="habit-example">${escape(item.example)}</p></section>`).join('')}</div>`;
    },
    closing(slide) {
      return `<div class="closing-content"><h3 class="closing-question">${escape(slide.question)}</h3><blockquote class="closing-answer">${escape(slide.answer)}</blockquote><p class="closing-action">${escape(slide.action)}</p></div>`;
    },
    verifyLayers(slide) {
      return `${table(slide,'verification')}<blockquote class="verification-summary">${escape(slide.summary)}</blockquote>`;
    },
    acceptance(slide) {
      return table({...slide,rows:slide.criteria.map(index => deck.demo.criteria[index])},'ac');
    },
    contract(slide) {
      return `${table({...slide,headings:['ID','Yang perlu dipertahankan'],rows:slide.criteria.map(index => deck.demo.criteria[index])},'ac')}<div class="contract-shapes">${slide.shapes.map(([label,code]) => `<section><h3>${escape(label)}</h3><pre><code>${escape(code)}</code></pre></section>`).join('')}</div>`;
    },
    lab(slide) { return window.TEFA_DEMO.template(slide.lab); },
    agentPlan(slide) {
      return `<div class="agent-plan-layout"><blockquote class="instruction">${escape(slide.quote)}</blockquote><div><span class="panel-label">CONTOH RENCANA AI</span><ol class="agent-plan-steps">${slide.steps.map(([label,text]) => `<li><strong>${escape(label)}</strong><span>${escape(text)}</span></li>`).join('')}</ol><p class="plan-correction">${escape(slide.correction)}</p></div></div><div class="approval-example"><strong>SETELAH RENCANA DIPERIKSA</strong><p>“${escape(slide.approval)}”</p></div>`;
    },
    codeExample(slide) {
      return `<div class="code-demo-layout"><section><span class="code-label">${escape(slide.codeLabel)} / JavaScript</span><pre class="code-block"><code>${escape(deck.demo.code[slide.codeKey])}</code></pre></section><dl class="code-explanation">${slide.explanation.map(([label,text]) => `<div><dt>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl></div>`;
    },
    codeDiff(slide) {
      return `<div class="diff-legend"><span>− dihapus</span><span>+ ditambahkan</span></div><pre class="code-block code-diff"><code>${slide.lines.map(([kind,line]) => `<span class="diff-line diff-${kind}"><b aria-hidden="true">${kind === 'add' ? '+' : kind === 'remove' ? '−' : ' '}</b>${escape(line)}</span>`).join('')}</code></pre>`;
    },
    testMatrix(slide) {
      const rows = slide.testIds.map(id => {const test=deck.demo.tests.find(test => test.id === id);return [`${test.id} / ${test.ac}`,test.steps,test.expected];});
      return `<span class="matrix-caption">RENCANA PERCOBAAN / HASIL YANG DIHARAPKAN</span>${table({...slide,headings:['Tes / syarat','Langkah','Hasil yang diharapkan'],rows},'matrix')}`;
    },
    debugExample(slide) {
      return `<div class="debug-layout"><div><span class="code-label">CONTOH KESALAHAN</span><pre class="code-block"><code>${escape(slide.code)}</code></pre><p class="debug-explanation">${escape(slide.explanation)}</p></div><blockquote class="instruction">${escape(slide.quote)}</blockquote></div><ol class="debug-steps">${slide.steps.map(step => `<li>${escape(step)}</li>`).join('')}</ol>`;
    },
    reportGuide(slide) { return renderers.pillars(slide); },
    reportExample(slide) {
      return `<div class="report-example"><span class="panel-label">CONTOH FORMAT / SESUAIKAN DENGAN HASIL DEMO</span>${slide.paragraphs.map(text => `<p>${escape(text)}</p>`).join('')}</div><button type="button" class="inline-action" data-open-demo-report>Lihat catatan demo yang dijalankan</button>`;
    },
    focus(slide) {
      return `<div class="focus-content">${slide.statement?`<p class="focus-statement">${escape(slide.statement)}</p>`:''}${slide.points?`<dl class="focus-points">${slide.points.map(([label,text])=>`<div><dt>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl>`:''}${slide.example?`<div class="focus-example"><span>${escape(slide.example.label)}</span><p>${escape(slide.example.text)}</p></div>`:''}</div>`;
    },
    contrast(slide) {
      const open=!slide.progressive||isRevealed(slide);
      const panel=item=>`<section class="contrast-panel"><h3>${escape(item.title)}</h3><ul>${item.points.map(text=>`<li>${escape(text)}</li>`).join('')}</ul></section>`;
      return `<div id="compact-contrast" class="compact-contrast${open?' is-open':''}">${panel(slide.left)}<div${slide.progressive?' id="case-discussion"':''}${open?'':' hidden'}>${panel(slide.right)}</div></div>${slide.progressive?revealButton(slide,'Tampilkan perbandingan'):''}${slide.example?`<p class="contrast-example">${escape(slide.example)}</p>`:''}`;
    },
    process(slide) {
      return `<ol class="simple-process">${slide.steps.map(([label,text],index)=>`<li><span>${pad(index+1)}</span><h3>${escape(label)}</h3><p>${escape(text)}</p></li>`).join('')}</ol>`;
    },
    promptShort(slide) {
      return `<div class="short-prompt"><span class="compact-label">${escape(slide.label||'CONTOH INSTRUKSI')}</span><blockquote>${escape(slide.quote)}</blockquote>${slide.fullPrompt?'<div class="compact-actions"><button type="button" class="inline-action" data-open-full-prompt>Instruksi lengkap</button><button type="button" class="text-action" data-copy-prompt>Salin instruksi</button></div>':''}</div>`;
    },
    pathFocus(slide) {
      return `<div class="path-focus"><span class="compact-label">${escape(slide.label)}</span><pre>${escape(slide.path)}</pre><p>${escape(slide.statement)}</p></div>`;
    },
    compactContract(slide) {
      return `${renderers.focus(slide)}<div class="compact-shapes">${slide.shapes.map(code=>`<pre>${escape(code)}</pre>`).join('')}</div>`;
    },
    caseOne(slide) {
      return `<blockquote class="compact-scene">${escape(slide.scene)}</blockquote>${revealButton(slide,slide.revealLabel||'Tampilkan pembahasan')}<div id="case-discussion" class="compact-reveal${isRevealed(slide)?' revealed':''}"${isRevealed(slide)?'':' hidden'}>${slide.discussion.map(([label,text])=>`<section><h3>${escape(label)}</h3><p>${escape(text)}</p></section>`).join('')}</div>`;
    },
    codeFocus(slide) {
      const lines=slide.code.split('\n');
      return `<div class="code-focus"><pre class="code-focus-block"><code>${lines.map((line,index)=>`<span class="code-focus-line${slide.highlight?.includes(index+1)?' is-highlighted':''}${slide.diff?(line.startsWith('+')?' diff-add':line.startsWith('-')?' diff-remove':''):''}">${escape(line)||' '}</span>`).join('')}</code></pre>${slide.result?`<p class="code-focus-result">${escape(slide.result)}</p>`:''}<button type="button" class="text-action" data-open-code="${escape(slide.codeKey)}">Kode lengkap</button></div>`;
    },
    testPair(slide) {
      return `<div class="compact-tests">${slide.tests.map(([id,steps,expected])=>`<section><span class="compact-test-id">${escape(id)}</span><div><h3>${escape(steps)}</h3><p>${escape(expected)}</p></div></section>`).join('')}</div>`;
    },
    reportShort(slide) {
      return `<div class="short-report"><span class="compact-label">CONTOH LAPORAN / SESUAIKAN DENGAN HASIL NYATA</span><blockquote>${escape(slide.quote)}</blockquote>${slide.actualReport?'<button type="button" class="text-action" data-open-demo-report>Lihat catatan demo</button>':''}</div>`;
    }
  };

  function initializeNavigation() {
    $('#chapter-nav').innerHTML = `<div id="menu-cursor" class="menu-cursor" aria-hidden="true"><svg viewBox="0 0 440 140" preserveAspectRatio="none"><path class="cursor-red" d="M0 46 440 0 391 140 12 122Z"/><path class="cursor-white" d="M0 35 420 18 372 134 0 116Z"/></svg></div>${deck.chapters.map((chapter, index) => `<button class="chapter-tab${chapter.moon >= 1 ? ' is-full' : ''}" data-chapter="${escape(chapter.id)}" style="--indent:${chapter.indent || 0}px" aria-label="Bab ${index + 1}: ${escape(chapter.name)}" title="${escape(chapter.name)}"><span class="tab-number">${pad(index + 1)}</span><span class="tab-name">${escape(chapter.menu || chapter.name)}</span></button>`).join('')}`;
    $('#slide-ticks').innerHTML = deck.slides.map(() => '<span></span>').join('');
    $('#calendar-track').innerHTML = deck.chapters.map((chapter,index) => `<div class="calendar-day" data-calendar-chapter="${index}"><div class="calendar-day-label"><span class="calendar-day-number">${pad(index+1)}</span><span class="calendar-day-caption">BAB</span></div><div class="calendar-day-moon">${calendarMoon(chapter.moon)}</div></div>`).join('');
    $('#glossary-list').innerHTML = deck.glossary.map(([term,definition]) => `<div><dt>${escape(term)}</dt><dd>${escape(definition)}</dd></div>`).join('');
    $('#full-prompt-content').textContent = deck.demo.prompt;
    $('#chapter-nav').addEventListener('click', (event) => {
      const button = event.target.closest('[data-chapter]');
      if (!button) return;
      const index = deck.slides.findIndex((slide) => slide.chapter === button.dataset.chapter);
      closeMenu();
      navigate(index);
    });
    $('#chapter-nav').addEventListener('pointerover', (event) => {
      const button = event.target.closest('[data-chapter]');
      if (button) previewMenu(deck.chapters.findIndex((chapter) => chapter.id === button.dataset.chapter), true, true);
    });
    $('#chapter-nav').addEventListener('pointerleave', restoreMenu);
    $('#chapter-nav').addEventListener('focusin', (event) => {
      const button = event.target.closest('[data-chapter]');
      if (button) previewMenu(deck.chapters.findIndex((chapter) => chapter.id === button.dataset.chapter), true, !button.matches(':focus-visible'));
    });
    $('#chapter-nav').addEventListener('focusout', (event) => {
      if (!$('#chapter-nav').contains(event.relatedTarget)) restoreMenu();
    });
    $('#chapter-nav').addEventListener('keydown', (event) => {
      if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
      const buttons = [...document.querySelectorAll('.chapter-tab')];
      const current = buttons.indexOf(event.target.closest('.chapter-tab'));
      if (current < 0) return;
      event.preventDefault();
      const next = (current + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus({ preventScroll: true });
      if ($('#chapter-nav').scrollHeight > $('#chapter-nav').clientHeight + 2) buttons[next].scrollIntoView({block:'nearest',inline:'nearest'});
    });
  }

  function activeChapterIndex() {
    return deck.chapters.findIndex((chapter) => chapter.id === deck.slides[state.index].chapter);
  }

  function resetActionDescription() {
    $('#action-description').textContent = state.index === deck.slides.length - 1 ? 'Perjalanan selesai' : 'Lanjutkan materi';
  }

  function previewMenu(index, showHint = false, preservePointerPosition = false) {
    previewChapter = index;
    const buttons = [...document.querySelectorAll('.chapter-tab')];
    // Bekukan posisi tombol di bawah pointer; animasi label lain tidak memindahkan sasaran klik.
    const currentTransform = getComputedStyle(buttons[index]).transform;
    const targetLift = preservePointerPosition && currentTransform !== 'none' ? new DOMMatrixReadOnly(currentTransform).m42 : 0;
    buttons.forEach((button, buttonIndex) => {
      button.classList.toggle('is-cursor-target', buttonIndex === index);
      button.style.setProperty('--lift', `${buttonIndex < index ? -18 : buttonIndex > index ? 18 : targetLift}px`);
    });
    $('#menu-cursor').classList.toggle('is-full', deck.chapters[index].moon >= 1);
    if (showHint) $('#action-description').textContent = `Buka ${deck.chapters[index].name}`;
    positionCursor();
  }

  function positionCursor() {
    window.cancelAnimationFrame(cursorFrame);
    cursorFrame = window.requestAnimationFrame(() => {
      const button = document.querySelectorAll('.chapter-tab')[previewChapter];
      if (!button || !button.offsetWidth) return;
      const cursor = $('#menu-cursor');
      const scale = Number(getComputedStyle(button).getPropertyValue('--indent-scale')) || 1;
      const indent = (deck.chapters[previewChapter].indent || 0) * scale;
      const width = button.querySelector('.tab-name').offsetWidth + 77;
      cursor.style.width = `${width}px`;
      const lift = Number.parseFloat(button.style.getPropertyValue('--lift')) || 0;
      cursor.style.height = `${button.offsetHeight + 38}px`;
      cursor.style.transform = `translate(${button.offsetLeft + indent - 24}px, ${button.offsetTop + lift - 20}px)`;
    });
  }

  function restoreMenu() {
    const focused = document.activeElement.closest('.chapter-tab');
    const index = focused ? deck.chapters.findIndex((chapter) => chapter.id === focused.dataset.chapter) : activeChapterIndex();
    previewMenu(index);
    resetActionDescription();
  }

  function render(animate = false) {
    const slide = deck.slides[state.index];
    const chapterIndex = deck.chapters.findIndex((chapter) => chapter.id === slide.chapter);
    const chapter = deck.chapters[chapterIndex];
    const fullMoon = chapter.moon >= 1;
    document.body.classList.toggle('full-moon-material', fullMoon);
    window.TEFA_WATER?.setFullMoon(fullMoon);
    const chapterSlides = deck.slides.filter((item) => item.chapter === chapter.id);
    const localIndex = chapterSlides.findIndex((item) => item.id === slide.id);
    const article = $('#slide');
    window.TEFA_DEMO.unmount();
    article.className = `slide compact-slide slide--${slide.type}${fullMoon ? ' is-full-moon' : ''}`;
    article.dataset.slideId = slide.id;
    article.setAttribute('aria-labelledby', 'slide-title');
    article.innerHTML = `<div class="kicker">${escape(slide.kicker)}</div>${slide.type !== 'hero' ? `<h2 id="slide-title">${title(slide.title)}</h2>${slide.lead ? `<p class="lead">${escape(slide.lead)}</p>` : ''}` : ''}<div class="slide-body">${renderers[slide.type](slide)}</div>${slide.takeaway ? `<p class="takeaway">${escape(slide.takeaway)}</p>` : ''}`;
    if (slide.type === 'hero') {
      article.querySelector('h1').id = 'slide-title';
      article.querySelector('h1').setAttribute('aria-label', slide.title);
    }
    if (animate && state.transitions && !reducedMotion.matches) {
      // Mulai ulang animasi ringan setelah konten slide diganti.
      void article.offsetWidth;
      article.classList.add('is-entering');
    }
    $('#stage').scrollTop = 0;
    $('#notes-content').innerHTML = slide.notes.map(note => `<li>${escape(note.replace(/\s*\[\d+(?:[\s,]+\d+)*\]/g,''))}</li>`).join('');
    $('#notes-panel').scrollTop = 0;
    $('#chapter-label').textContent = `BAB ${pad(chapterIndex + 1)}`;
    $('#local-slide-number').textContent = pad(localIndex + 1);
    $('#local-slide-total').textContent = `/ ${pad(chapterSlides.length)}`;
    $('#deck-counter').textContent = `${pad(state.index + 1)} / ${pad(deck.slides.length)}`;
    $('#phase-label').textContent = chapter.phase;
    $('#sidebar-moon').innerHTML = moon(chapter.moon);
    $('#sidebar-moon').style.color = fullMoon ? 'var(--gold)' : '#021b50';
    document.querySelectorAll('.chapter-tab').forEach((button, index) => {
      if (index === chapterIndex) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    previewMenu(chapterIndex);
    resetActionDescription();
    [...$('#slide-ticks').children].forEach((tick, index) => { tick.className = index === state.index ? 'current' : index < state.index ? 'past' : ''; });
    $('#previous-button').disabled = state.index === 0;
    $('#next-button').disabled = state.index === deck.slides.length - 1;
    $('#next-button').title = state.index === deck.slides.length - 1 ? 'Akhir presentasi. Home untuk kembali ke awal.' : 'Slide berikutnya (→)';
    const revealButton = $('#reveal-button');
    if (revealButton) revealButton.addEventListener('click', toggleDiscussion);
    if (slide.type === 'lab') window.TEFA_DEMO.mount(article.querySelector('[data-demo-lab]'));
    article.querySelectorAll('[data-copy-prompt]').forEach(button => button.addEventListener('click',() => copyText(deck.demo.prompt,button)));
    article.querySelectorAll('[data-open-demo-report]').forEach(button => button.addEventListener('click',() => window.TEFA_DEMO.showDialog('report')));
    article.querySelectorAll('[data-open-code]').forEach(button=>button.addEventListener('click',()=>window.TEFA_DEMO.showDialog('code',button.dataset.openCode)));
    article.querySelectorAll('[data-open-full-prompt]').forEach(button=>button.addEventListener('click',()=>openDialog('#prompt-dialog')));
    $('#announcer').textContent = `Bab ${chapterIndex + 1}, ${chapter.name}. Slide ${localIndex + 1} dari ${chapterSlides.length}. ${slide.title.replace('|', ' ')}`;
    document.title = `${slide.type === 'hero' ? deck.title : slide.title.replace('|', ' ')} · Sharing TEFA`;
    save();
  }

  function applyPreferences() {
    const motionEnabled = state.transitions && !reducedMotion.matches;
    document.body.classList.toggle('clean-mode', state.clean);
    document.body.classList.toggle('motion-off', !motionEnabled);
    const waterEnabled = state.waterMotion && !reducedMotion.matches && Boolean(window.TEFA_WATER);
    window.TEFA_WATER?.setMotion(waterEnabled);
    window.TEFA_WATER?.setClean(state.clean);
    $('#notes-panel').hidden = !state.notes || state.clean;
    $('#exit-clean').hidden = !state.clean;
    $('#notes-button').setAttribute('aria-expanded', String(state.notes && !state.clean));
    $('#clean-button').setAttribute('aria-pressed', String(state.clean));
    $('#motion-button').setAttribute('aria-pressed', String(motionEnabled));
    const label = reducedMotion.matches ? 'Transisi dinonaktifkan oleh preferensi kurangi gerakan perangkat' : `Transisi ${state.transitions ? 'aktif' : 'nonaktif'} (T)`;
    $('#motion-button').title = label;
    $('#motion-button').setAttribute('aria-label', label);
    $('#water-button').setAttribute('aria-pressed', String(waterEnabled));
    const waterLabel = reducedMotion.matches ? 'Laut diam: preferensi kurangi gerakan perangkat' : `Gerak laut ${waterEnabled ? 'aktif' : 'dijeda'} (L)`;
    $('#water-button').title = waterLabel;
    $('#water-button').setAttribute('aria-label', waterLabel);
    positionCursor();
    save();
  }

  function navigate(index, skipAnimation = false) {
    if (transitionTarget !== null || index < 0 || index >= deck.slides.length || index === state.index) return;
    const chapterChanged = deck.slides[state.index].chapter !== deck.slides[index].chapter;
    if (chapterChanged && state.transitions && !reducedMotion.matches && !skipAnimation) {
      startTransition(index);
      return;
    }
    state.index = index;
    render(!skipAnimation);
  }

  function startTransition(index) {
    transitionTarget = index;
    previousTransitionFocus = document.activeElement;
    const chapterIndex = deck.chapters.findIndex((chapter) => chapter.id === deck.slides[index].chapter);
    const chapter = deck.chapters[chapterIndex];
    const previousChapterIndex = activeChapterIndex();
    const previousChapter = deck.chapters[previousChapterIndex];
    const isClimax = Boolean(chapter.climax);
    const duration = isClimax ? 3000 : 1300;
    const overlay = $('#chapter-transition');
    $('#transition-number').textContent = pad(chapterIndex + 1);
    $('#transition-title-text').textContent = chapter.name;
    $('#transition-phase').textContent = chapter.phase;
    $('#transition-moon').innerHTML = calendarMoon(previousChapter.moon);
    overlay.classList.toggle('full-moon', isClimax);
    overlay.classList.remove('is-landed');
    overlay.style.setProperty('--transition-duration', `${duration}ms`);
    overlay.style.setProperty('--land-duration', `${duration*.30}ms`);
    overlay.style.clipPath = 'polygon(135% 0,100% 0,100% 100%,100% 100%)';
    overlay.hidden = false;
    calendarMotion = { from: previousChapterIndex, to: chapterIndex, focus: previousChapterIndex, entry: 0 };
    layoutCalendar();
    $('#app-shell').style.setProperty('--reveal-duration', `${duration*0.18}ms`);
    $('#app-shell').classList.add('is-changing');
    $('#app-shell').inert = true;
    $('#exit-clean').inert = true;
    $('#skip-transition').focus({ preventScroll: true });
    const started = performance.now();
    let committed = false;
    let lastMoonFrame = 0;
    const clamp = (value) => Math.max(0,Math.min(1,value));
    const ease = (value) => value < .5 ? 4*value**3 : 1-(-2*value+2)**3/2;
    const step = (now) => {
      if (transitionTarget === null) return;
      const progress = Math.min(1,(now-started)/duration);
      const entry = 1-(1-clamp(progress/.19))**3;
      const travel = ease(clamp((progress-.26)/.44));
      const logicalFocus = previousChapterIndex+(chapterIndex-previousChapterIndex)*travel;
      calendarMotion.entry = entry;
      setCalendarFocus(logicalFocus+(1-entry)*.6,logicalFocus);
      const wipe = progress < .14 ? 1-ease(clamp(progress/.14)) : progress > .88 ? ease(clamp((progress-.88)/.12)) : 0;
      const edge = -35+170*wipe;
      overlay.style.clipPath = `polygon(${edge}% 0,100% 0,100% 100%,${edge-35}% 100%)`;
      $('.calendar-month').style.opacity = String(entry);
      $('.calendar-month').style.transform = `translateY(${(1-entry)*30}px)`;
      $('.calendar-heading').style.opacity = String(clamp((progress-.08)/.14));
      $('#calendar-axis-line').style.strokeDashoffset = String(calendarMotion.geometry.lineLength*(1-entry));
      $('#transition-moon').style.opacity = String(clamp((progress-.16)/.1));
      if (now-lastMoonFrame > 32) {
        $('#transition-moon').innerHTML = calendarMoon(previousChapter.moon+(chapter.moon-previousChapter.moon)*travel);
        lastMoonFrame = now;
      }
      if (progress >= .70) overlay.classList.add('is-landed');
      if (!committed && progress >= 0.70) {
        state.index = transitionTarget;
        render(false);
        committed = true;
      }
      if (progress >= 0.82) $('#app-shell').classList.add('is-revealing');
      if (progress >= 1) finishTransition();
      else transitionHandle = requestAnimationFrame(step);
    };
    transitionHandle = requestAnimationFrame(step);
  }

  function layoutCalendar() {
    if (!calendarMotion) return;
    const width = innerWidth;
    const height = innerHeight;
    const compact = width <= 600;
    const x = width*(compact ? .56 : .61);
    const y = height*.70;
    const stepX = compact ? Math.max(132,width*.34) : width*.13;
    const stepY = -height*(compact ? .15 : .13);
    const slope = stepY/stepX;
    const lineY0 = y-slope*x;
    const lineY1 = y+slope*(width-x);
    const lineLength = Math.hypot(width,lineY1-lineY0);
    calendarMotion.geometry = { x,y,stepX,stepY,lineLength };
    const overlay = $('#chapter-transition');
    overlay.style.setProperty('--focus-x',`${x}px`);
    overlay.style.setProperty('--focus-y',`${y}px`);
    $('#calendar-axis').setAttribute('viewBox',`0 0 ${width} ${height}`);
    const axis = $('#calendar-axis-line');
    for (const [name,value] of Object.entries({x1:0,y1:lineY0,x2:width,y2:lineY1})) axis.setAttribute(name,String(value));
    axis.style.strokeDasharray = String(lineLength);
    axis.style.strokeDashoffset = String(lineLength*(1-calendarMotion.entry));
    document.querySelectorAll('.calendar-day').forEach((day,index) => {
      day.style.left = `${x+index*stepX}px`;
      day.style.top = `${y+index*stepY}px`;
    });
    const metaX = compact ? 24 : width*.075;
    const bandY = height*.62+Math.tan(20*Math.PI/180)*(metaX-width*.5);
    const month = $('.calendar-month');
    month.style.left = `${metaX}px`;
    month.style.top = `${bandY-month.offsetHeight/2-(compact ? 36 : 0)}px`;
    setCalendarFocus(calendarMotion.focus);
  }

  function setCalendarFocus(focus,logicalFocus = focus) {
    if (!calendarMotion?.geometry) return;
    calendarMotion.focus = focus;
    const {stepX,stepY} = calendarMotion.geometry;
    $('#calendar-track').style.transform = `translate(${-focus*stepX}px,${-focus*stepY}px)`;
    const selected = Math.max(0,Math.min(deck.chapters.length-1,Math.round(logicalFocus)));
    $('#chapter-transition').dataset.calendarChapter = String(selected+1);
    document.querySelectorAll('.calendar-day').forEach((day,index) => {
      day.classList.toggle('is-current',index === selected);
      const distance = Math.abs(index-logicalFocus);
      day.style.opacity = String(Math.max(.25,1-distance*.13));
    });
  }

  function finishTransition() {
    if (transitionTarget === null) return;
    window.cancelAnimationFrame(transitionHandle);
    const needsRender = state.index !== transitionTarget;
    state.index = transitionTarget;
    transitionTarget = null;
    calendarMotion = null;
    $('#chapter-transition').hidden = true;
    $('#app-shell').inert = false;
    $('#exit-clean').inert = false;
    $('#app-shell').classList.remove('is-changing','is-revealing');
    window.TEFA_WATER?.setTransition(0);
    if (needsRender) render(false);
    if (previousTransitionFocus && document.contains(previousTransitionFocus) && previousTransitionFocus.getClientRects().length && !previousTransitionFocus.disabled) {
      previousTransitionFocus.focus({ preventScroll: true });
    } else $('#slide').focus({ preventScroll: true });
  }

  function toggleDiscussion() {
    const button = $('#reveal-button');
    if (!button) return;
    const id=deck.slides[state.index].id;
    state.reveals[id]=!state.reveals[id];
    const visible=state.reveals[id];
    const discussion = $('#case-discussion');
    discussion.hidden = !visible;
    discussion.classList.toggle('revealed',visible);
    $('#compact-contrast')?.classList.toggle('is-open',visible);
    button.setAttribute('aria-expanded',String(visible));
    button.querySelector('span').textContent=visible?button.dataset.closeLabel:button.dataset.openLabel;
    $('#announcer').textContent=visible?'Penjelasan ditampilkan.':'Penjelasan disembunyikan.';
    save();
  }

  function toggleNotes() {
    if (state.clean) return;
    state.notes = !state.notes;
    applyPreferences();
  }

  function toggleClean() {
    state.clean = !state.clean;
    closeMenu();
    applyPreferences();
    if (state.clean) $('#exit-clean').focus({ preventScroll: true });
    else $('#clean-button').focus({ preventScroll: true });
  }

  function toggleMotion() {
    if (reducedMotion.matches) {
      notify('Transisi dinonaktifkan untuk menghormati preferensi kurangi gerakan perangkat.');
      return;
    }
    state.transitions = !state.transitions;
    applyPreferences();
    $('#announcer').textContent = `Transisi ${state.transitions ? 'diaktifkan' : 'dinonaktifkan'}.`;
  }

  function toggleWater() {
    if (reducedMotion.matches) {
      notify('Gerak laut mengikuti preferensi kurangi gerakan perangkat.');
      return;
    }
    state.waterMotion = !state.waterMotion;
    applyPreferences();
    $('#announcer').textContent = `Gerak laut ${state.waterMotion ? 'diaktifkan' : 'dijeda'}.`;
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else notify('Browser ini tidak mendukung tombol layar penuh. Gunakan kontrol layar penuh browser.');
    } catch {
      notify('Layar penuh tidak dapat dibuka. Gunakan kontrol layar penuh browser.');
    }
  }

  function goHome() {
    closeMenu();
    state.reveals = {};
    state.index = 0;
    render(false);
  }

  function closeMenu() {
    const restoreFocus = $('#sidebar').classList.contains('is-open') && $('#sidebar').contains(document.activeElement);
    $('#sidebar').classList.remove('is-open');
    $('#menu-button').setAttribute('aria-expanded', 'false');
    $('#menu-button').setAttribute('aria-label', 'Buka navigasi bab');
    $('#menu-button').querySelector('span').textContent = 'BAB';
    $('#menu-button').querySelector('use').setAttribute('href', '#i-menu');
    previewMenu(activeChapterIndex());
    resetActionDescription();
    if (restoreFocus) $('#menu-button').focus({ preventScroll: true });
  }

  function openDialog(selector) {
    closeMenu();
    const dialog = $(selector);
    if (!dialog.open) dialog.showModal();
  }

  async function copyText(text,button) {
    let copied = false;
    try { await navigator.clipboard.writeText(text); copied = true; } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text; textarea.className = 'sr-only';
      document.body.append(textarea); textarea.select();
      try { copied = document.execCommand('copy'); } catch { copied = false; }
      textarea.remove(); button.focus({preventScroll:true});
    }
    button.textContent = copied ? 'Instruksi lengkap disalin' : 'Salin teks instruksi secara manual';
    $('#announcer').textContent = copied ? 'Instruksi lengkap disalin ke clipboard.' : 'Browser tidak mengizinkan penyalinan otomatis.';
  }

  initializeNavigation();
  applyPreferences();
  render();
  new ResizeObserver(positionCursor).observe($('#chapter-nav'));
  window.addEventListener('resize',layoutCalendar);
  document.fonts.ready.then(positionCursor);

  const actionHints = {
    'notes-button': 'Buka catatan pemateri',
    'fullscreen-button': 'Atur layar penuh',
    'clean-button': 'Fokus pada materi',
    'motion-button': 'Atur gerakan menu',
    'water-button': 'Atur gerak laut',
    'home-button': 'Kembali ke awal',
    'glossary-button': 'Lihat arti istilah',
    'help-button': 'Pintasan pemateri',
    'previous-button': 'Slide sebelumnya',
    'next-button': 'Slide berikutnya'
  };
  Object.entries(actionHints).forEach(([id, hint]) => {
    const button = document.getElementById(id);
    button.addEventListener('pointerenter', () => { $('#action-description').textContent = hint; });
    button.addEventListener('focus', () => { $('#action-description').textContent = hint; });
    button.addEventListener('pointerleave', resetActionDescription);
    button.addEventListener('blur', resetActionDescription);
  });

  $('#previous-button').addEventListener('click', () => navigate(state.index - 1));
  $('#next-button').addEventListener('click', () => navigate(state.index + 1));
  $('#notes-button').addEventListener('click', toggleNotes);
  $('#close-notes').addEventListener('click', () => {
    state.notes = false;
    applyPreferences();
    $('#notes-button').focus({ preventScroll: true });
  });
  $('#fullscreen-button').addEventListener('click', toggleFullscreen);
  $('#clean-button').addEventListener('click', toggleClean);
  $('#exit-clean').addEventListener('click', toggleClean);
  $('#motion-button').addEventListener('click', toggleMotion);
  $('#water-button').addEventListener('click', toggleWater);
  $('#home-button').addEventListener('click', goHome);
  $('#skip-transition').addEventListener('click', finishTransition);
  $('#glossary-button').addEventListener('click', () => openDialog('#glossary-dialog'));
  $('#copy-full-prompt').addEventListener('click',()=>copyText(deck.demo.prompt,$('#copy-full-prompt')));
  document.querySelectorAll('[data-demo-panel]').forEach(button => button.addEventListener('click',() => window.TEFA_DEMO.showDialog(button.dataset.demoPanel)));
  $('#help-button').addEventListener('click', () => openDialog('#help-dialog'));
  $('#menu-button').addEventListener('click', () => {
    const open = !$('#sidebar').classList.contains('is-open');
    $('#sidebar').classList.toggle('is-open', open);
    $('#menu-button').setAttribute('aria-expanded', String(open));
    $('#menu-button').setAttribute('aria-label', `${open ? 'Tutup' : 'Buka'} navigasi bab`);
    $('#menu-button').querySelector('span').textContent = open ? 'TUTUP' : 'BAB';
    $('#menu-button').querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
    if (open) {
      previewMenu(activeChapterIndex());
      positionCursor();
      if ($('#chapter-nav').scrollHeight > $('#chapter-nav').clientHeight + 2) document.querySelector('.chapter-tab[aria-current="step"]')?.scrollIntoView({block:'nearest',inline:'nearest'});
    }
  });
  $('#stage').addEventListener('click', closeMenu);

  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });

  document.addEventListener('fullscreenchange', () => {
    const fullscreen = Boolean(document.fullscreenElement);
    const button = $('#fullscreen-button');
    button.setAttribute('aria-pressed', String(fullscreen));
    button.setAttribute('aria-label', fullscreen ? 'Keluar layar penuh (F)' : 'Layar penuh (F)');
    button.title = fullscreen ? 'Keluar layar penuh (F)' : 'Layar penuh (F)';
    button.querySelector('span').textContent = fullscreen ? 'Keluar layar penuh' : 'Layar penuh';
  });

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) finishTransition();
    applyPreferences();
  });

  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (document.querySelector('dialog[open]')) return;
    if (transitionTarget !== null) {
      if (['Escape', 'Enter', ' '].includes(event.key)) { event.preventDefault(); finishTransition(); }
      else if (event.key === 'Tab') { event.preventDefault(); $('#skip-transition').focus(); }
      return;
    }
    const key = event.key.toLowerCase();
    const handled = ['arrowleft', 'arrowright', 'home', 'n', 'p', 'f', 't', 'l', 'b', '?', 'escape'];
    if (!handled.includes(key)) return;
    event.preventDefault();
    if (event.repeat && !['arrowleft', 'arrowright'].includes(key)) return;
    if (key === 'arrowleft') navigate(state.index - 1);
    else if (key === 'arrowright') navigate(state.index + 1);
    else if (key === 'home') goHome();
    else if (key === 'n') toggleNotes();
    else if (key === 'p') toggleClean();
    else if (key === 'f') toggleFullscreen();
    else if (key === 't') toggleMotion();
    else if (key === 'l') toggleWater();
    else if (key === 'b') toggleDiscussion();
    else if (key === '?') openDialog('#help-dialog');
    else if (key === 'escape') {
      if (state.clean) toggleClean();
      else if ($('#sidebar').classList.contains('is-open')) { closeMenu(); $('#menu-button').focus(); }
      else if (state.notes) { state.notes = false; applyPreferences(); $('#notes-button').focus(); }
    }
  });

  if (!storageAvailable) notify('Penyimpanan lokal tidak tersedia di browser ini. Presentasi tetap dapat digunakan.');
})();
