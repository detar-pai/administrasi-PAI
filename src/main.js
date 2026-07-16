/**
 * JIHAD PAI — Titik Awal Aplikasi
 * Menginisialisasi hal-hal global: tema (terang/gelap) dan toggle sidebar.
 * Setiap halaman di src/pages/**\/index.html cukup memuat berkas ini
 * sebagai <script type="module" src="/src/main.js"></script>.
 */

import { initTheme } from './components/ui/theme-toggle.js';
import { initSidebarToggle } from './components/layout/sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebarToggle();
});
