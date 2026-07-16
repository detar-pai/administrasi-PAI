/**
 * JIHAD PAI — Form Field Helper
 * Menghasilkan markup form-group siap pakai (label + input + helper/error text)
 * agar formulir di seluruh halaman (Data Siswa, Jurnal Guru, Catatan Siswa,
 * Bank Soal, dll.) konsisten mengikuti Design System.
 */

/**
 * @param {Object} config
 * @param {string} config.type - 'text' | 'number' | 'date' | 'email' | 'password' | 'select' | 'textarea'
 * @param {string} config.name
 * @param {string} config.label
 * @param {string} [config.placeholder]
 * @param {boolean} [config.required]
 * @param {string} [config.help] - teks bantuan di bawah input
 * @param {string} [config.error] - pesan error (jika ada, menandai input sebagai invalid)
 * @param {{value:string,label:string}[]} [config.options] - untuk type 'select'
 */
export function renderFormField(config) {
  const {
    type = 'text',
    name,
    label,
    placeholder = '',
    required = false,
    help = '',
    error = '',
    options = [],
  } = config;

  const fieldId = `field-${name}`;
  const errorClass = error ? ' has-error' : '';
  const requiredMark = required ? '<span class="required">*</span>' : '';

  let control = '';
  if (type === 'select') {
    const opts = options.map((o) => `<option value="${o.value}">${o.label}</option>`).join('');
    control = `<select id="${fieldId}" name="${name}" class="form-select${errorClass}" ${required ? 'required' : ''}>${opts}</select>`;
  } else if (type === 'textarea') {
    control = `<textarea id="${fieldId}" name="${name}" class="form-textarea${errorClass}" placeholder="${placeholder}" ${required ? 'required' : ''}></textarea>`;
  } else {
    control = `<input type="${type}" id="${fieldId}" name="${name}" class="form-input${errorClass}" placeholder="${placeholder}" ${required ? 'required' : ''}>`;
  }

  return `
    <div class="form-group">
      <label class="form-label" for="${fieldId}">${label} ${requiredMark}</label>
      ${control}
      ${help ? `<div class="form-help">${help}</div>` : ''}
      ${error ? `<div class="form-error-text">${error}</div>` : ''}
    </div>
  `;
}
