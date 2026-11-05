(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  window.createIslandNotebook = onChange => {
    const steps = ['', '', ''];
    let highlighted = -1;
    function changed() {
      $('#editor-error').textContent = '';
      onChange();
    }
    function render(focusIndex) {
      const list = $('#step-editor');
      list.replaceChildren();
      steps.forEach((action, index) => {
        const row = document.createElement('li');
        const label = document.createElement('label');
        label.htmlFor = `step-${index}`;
        label.textContent = index + 1;
        label.setAttribute('aria-label', `Langkah ${index + 1}`);
        const select = document.createElement('select');
        select.id = `step-${index}`;
        select.dataset.step = index;
        select.add(new Option('Pilih tindakan…', ''));
        for (const [value, text] of Object.entries(window.ISLAND_GUIDES.actions)) select.add(new Option(text, value));
        select.value = action;
        select.addEventListener('change', () => { steps[index] = select.value; changed(); });
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = '×';
        remove.title = `Hapus langkah ${index + 1}`;
        remove.setAttribute('aria-label', `Hapus langkah ${index + 1}`);
        remove.addEventListener('click', () => {
          steps.splice(index, 1);
          changed();
          render(Math.min(index, steps.length - 1));
          if (!steps.length) $('#add-step').focus();
        });
        row.append(label, select, remove);
        list.append(row);
      });
      $('#steps-empty').hidden = steps.length > 0;
      $('#add-step').disabled = steps.length >= 5;
      highlight(highlighted);
      if (focusIndex >= 0) list.querySelector(`[data-step="${focusIndex}"]`)?.focus();
    }
    function highlight(index) {
      highlighted = index;
      [...$('#step-editor').children].forEach((row, at) => {
        if (at === index) row.setAttribute('aria-current', 'step');
        else row.removeAttribute('aria-current');
      });
    }
    $('#add-step').addEventListener('click', () => {
      if (steps.length >= 5) return;
      steps.push('');
      changed();
      render(steps.length - 1);
    });
    $('#rule-count').addEventListener('input', changed);
    $('#rule-effect').addEventListener('change', changed);
    $('#clear-rule').addEventListener('click', () => {
      $('#rule-count').value = '';
      $('#rule-effect').value = '';
      changed();
    });
    render();
    return {
      read: () => ({steps: [...steps], rule: !$('#rule-count').value && !$('#rule-effect').value ? null : {count: $('#rule-count').valueAsNumber, effect: $('#rule-effect').value}}),
      highlight,
      error: message => { $('#editor-error').textContent = message; }
    };
  };
})();
