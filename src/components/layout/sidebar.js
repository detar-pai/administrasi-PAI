/**
 * JIHAD PAI — Sidebar Admin/Guru
 * Sidebar responsif: tampil penuh di desktop, menjadi off-canvas (hamburger)
 * di layar HP. Daftar menu mengikuti struktur folder src/pages/ pada brief.
 */

import { getIcon } from '../ui/icons.js';

export const SIDEBAR_MENU = [
  { id: 'dashboard', label: 'Dashboard', href: '/pages/dashboard/', icon: 'dashboard' },
  { id: 'data-siswa', label: 'Data Siswa', href: '/pages/data-siswa/', icon: 'data-siswa' },
  { id: 'absensi', label: 'Absensi', href: '/pages/absensi/', icon: 'absensi' },
  { id: 'penilaian', label: 'Penilaian', href: '/pages/penilaian/', icon: 'penilaian' },
  { id: 'catatan-siswa', label: 'Catatan Siswa', href: '/pages/catatan-siswa/', icon: 'catatan-siswa' },
  { id: 'jurnal-guru', label: 'Jurnal Guru', href: '/pages/jurnal-guru/', icon: 'jurnal-guru' },
  { id: 'bank-soal', label: 'Bank Soal', href: '/pages/bank-soal/', icon: 'bank-soal' },
  { id: 'asesmen', label: 'Asesmen', href: '/pages/asesmen/', icon: 'asesmen' },
  { id: 'pengaturan', label: 'Pengaturan', href: '/pages/pengaturan/', icon: 'pengaturan' },
];

/**
 * Membuat markup HTML sidebar.
 * @param {string} activeId - id menu yang sedang aktif (lihat SIDEBAR_MENU)
 * @param {{schoolName?: string, logoUrl?: string}} options
 */
export function renderSidebar(activeId = 'dashboard', options = {}) {
  const { schoolName = 'SDN 262 Panyileukan', logoUrl = '/assets/images/logo-sekolah.png' } = options;

  const links = SIDEBAR_MENU.map((item) => `
    <a href="${item.href}" class="sidebar__link${item.id === activeId ? ' is-active' : ''}" data-menu-id="${item.id}">
      ${getIcon(item.icon)}
      <span>${item.label}</span>
    </a>`).join('');

  return `
    <aside class="sidebar" id="app-sidebar">
      <div class="sidebar__brand">
        <img src="${logoUrl}" alt="Logo ${schoolName}" onerror="this.style.visibility='hidden'">
        <div class="sidebar__brand-text">
          JIHAD PAI
          <small>${schoolName}</small>
        </div>
      </div>
      <nav class="sidebar__nav" aria-label="Menu utama">
        ${links}
      </nav>
      <div class="sidebar__footer">
        <a href="#" class="sidebar__link" data-action="logout">
          ${getIcon('logout')}
          <span>Keluar</span>
        </a>
      </div>
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `;
}

/** Memasang interaksi buka/tutup sidebar di layar HP. Panggil setelah sidebar di-render ke DOM. */
export function initSidebarToggle() {
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!sidebar) return;

  const open = () => {
    sidebar.classList.add('is-open');
    overlay?.classList.add('is-visible');
  };
  const close = () => {
    sidebar.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
  };

  document.querySelectorAll('[data-sidebar-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      sidebar.classList.contains('is-open') ? close() : open();
    });
  });
  overlay?.addEventListener('click', close);

  // Tutup otomatis saat memilih menu di layar kecil
  sidebar.querySelectorAll('.sidebar__link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) close();
    });
  });
}
