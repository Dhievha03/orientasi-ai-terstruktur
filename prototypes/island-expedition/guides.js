(() => {
  'use strict';
  const actions = {take: 'Ambil kayu terdekat', carry: 'Bawa ke gudang', store: 'Simpan kayu'};
  const effects = ['stop', 'report'];
  function validate(program) {
    if (!program.steps.length) return 'Tambahkan paling sedikit satu langkah untuk robot.';
    if (program.steps.length > 5) return 'Gunakan maksimal 5 langkah untuk latihan ini.';
    for (let index = 0; index < program.steps.length; index++) {
      if (!Object.prototype.hasOwnProperty.call(actions, program.steps[index])) return `Langkah ${index + 1} belum diisi. Pilih tindakan terlebih dahulu.`;
    }
    if (program.rule) {
      if (!Number.isInteger(program.rule.count) || program.rule.count < 1 || program.rule.count > 9) return 'Isi batas kayu dengan bilangan bulat 1–9, atau kosongkan seluruh aturan.';
      if (!effects.includes(program.rule.effect)) return 'Pilih apa yang harus dilakukan robot ketika batas kayu tercapai.';
    }
    return '';
  }
  function checkRule(rule, wood) {
    if (!rule || wood < rule.count) return 'continue';
    return rule.effect;
  }
  window.ISLAND_GUIDES = {actions, validate, checkRule};
})();
