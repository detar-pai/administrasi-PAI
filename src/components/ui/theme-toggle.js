/**
 * JIHAD PAI — Theme Toggle
 * Mengelola mode Terang/Gelap. Preferensi pengguna disimpan di localStorage
 * agar tetap dipakai walau aplikasi dimuat ulang, dan bisa juga diatur lewat
 * halaman Pengaturan > Tampilan.
 */

const STORAGE_KEY = 'jihadpai-theme';

/** Mengembalikan 'light' | 'dark' sesuai preferensi tersimpan (jika ada). */
export function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Menerapkan tema ke elemen <html> dan menyimpannya. */
export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* localStorage tidak tersedia — abaikan */
  }
  document.dispatchEvent(new CustomEvent('jihadpai:theme-changed', { detail: { theme } }));
  syncToggleUI(theme);
}

/** Membalik tema saat ini. */
export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

/** Memperbarui tampilan tombol/switch toggle (ikon matahari/bulan, aria-checked). */
function syncToggleUI(theme) {
  document.querySelectorAll('[data-theme-toggle]').forEach((el) => {
    el.setAttribute('aria-checked', String(theme === 'dark'));
    el.classList.toggle('is-dark', theme === 'dark');
  });
}

/**
 * Dipanggil sekali saat aplikasi dimuat (lihat src/main.js).
 * Urutan prioritas: preferensi tersimpan > preferensi sistem > terang.
 */
export function initTheme() {
  const stored = getStoredTheme();
  const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const initial = stored || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initial);
  syncToggleUI(initial);

  document.querySelectorAll('[data-theme-toggle]').forEach((el) => {
    el.addEventListener('click', toggleTheme);
  });

  // Ikuti perubahan preferensi sistem hanya jika pengguna belum memilih manual
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}
