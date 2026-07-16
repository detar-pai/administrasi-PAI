/**
 * JIHAD PAI — Topbar Admin & Navbar Publik
 */

import { getIcon } from '../ui/icons.js';

/** Topbar di dalam halaman Admin/Guru (berdampingan dengan sidebar). */
export function renderAdminTopbar({ pageTitle = 'Dashboard', userName = 'Guru PAI', avatarUrl = '' } = {}) {
  return `
    <header class="topbar">
      <div class="topbar__left">
        <button type="button" class="btn btn-icon btn-ghost topbar__menu-toggle" data-sidebar-toggle aria-label="Buka menu">
          ${getIcon('menu')}
        </button>
        <span class="topbar__title">${pageTitle}</span>
      </div>
      <div class="topbar__right">
        <button type="button" class="btn btn-icon btn-ghost" aria-label="Notifikasi">
          ${getIcon('bell')}
        </button>
        <button type="button" class="btn btn-icon btn-ghost" data-theme-toggle role="switch" aria-checked="false" aria-label="Ganti mode terang/gelap">
          ${getIcon('sun')}
        </button>
        <div class="topbar__user" data-action="user-menu">
          <img class="avatar" src="${avatarUrl || 'https://ui-avatars.com/api/?background=165DFF&color=fff&name=' + encodeURIComponent(userName)}" alt="${userName}">
          <span class="hide-mobile">${userName}</span>
          ${getIcon('chevron-down', { size: 16 })}
        </div>
      </div>
    </header>
  `;
}

/** Navbar sticky untuk Landing Page publik. */
export function renderPublicNavbar({ schoolName = 'SDN 262 Panyileukan', logoUrl = '/assets/images/logo-sekolah.png' } = {}) {
  return `
    <nav class="navbar-public">
      <a href="/" class="navbar-public__brand">
        <img src="${logoUrl}" alt="Logo ${schoolName}" onerror="this.style.visibility='hidden'">
        <span>JIHAD PAI</span>
      </a>
      <div class="navbar-public__links">
        <a href="#tentang">Tentang</a>
        <a href="#pengumuman">Pengumuman</a>
        <a href="#galeri">Galeri</a>
        <a href="#kontak">Kontak</a>
        <button type="button" class="btn btn-icon btn-ghost" data-theme-toggle role="switch" aria-checked="false" aria-label="Ganti mode terang/gelap">
          ${getIcon('sun')}
        </button>
        <a href="/login" class="btn btn-primary">Masuk</a>
      </div>
      <button type="button" class="btn btn-icon btn-ghost show-mobile" data-sidebar-toggle aria-label="Buka menu">
        ${getIcon('menu')}
      </button>
    </nav>
  `;
}
