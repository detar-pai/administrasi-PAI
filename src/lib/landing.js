/**
 * JIHAD PAI — Logika Halaman Publik (Landing Page)
 * Tema, navbar mobile, slider Renungan Harian, render dinamis Modul Aplikasi,
 * Pengumuman & Galeri, serta animasi reveal saat digulir. Data konten ada di
 * src/lib/landing-content.js agar mudah disambungkan ke Pengaturan/D1 nanti
 * tanpa mengubah markup.
 */

import { initTheme } from '../components/ui/theme-toggle.js';
import { getIcon } from '../components/ui/icons.js';
import { ROTATOR_SLIDES, FEATURES, ANNOUNCEMENTS, GALLERY_ITEMS } from './landing-content.js';

const SLIDE_INTERVAL_MS = 6000;

/* ---------- Navbar: bayangan saat digulir + toggle menu mobile ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!navbar) return;

  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.classList.remove('is-open');
    }));
  }
}

/* ---------- Slider Renungan Harian ---------- */
function initSlider() {
  const track = document.getElementById('sliderTrack');
  const dotsWrap = document.getElementById('sliderDots');
  if (!track || !dotsWrap) return;

  track.innerHTML = ROTATOR_SLIDES.map((s, i) => `
    <article class="slide slide--${s.type}${i === 0 ? ' is-active' : ''}">
      <span class="slide-badge">${s.label}</span>
      ${s.arabic ? `<p class="slide-arabic">${s.arabic}</p>` : ''}
      <p class="slide-text">${s.text}</p>
      <p class="slide-source">\u2014 ${s.source}</p>
    </article>
  `).join('');

  dotsWrap.innerHTML = ROTATOR_SLIDES.map((_, i) => `
    <button type="button" class="slider-dot${i === 0 ? ' is-active' : ''}" data-dot="${i}" aria-label="Konten ke-${i + 1}"></button>
  `).join('');

  const slides = [...track.querySelectorAll('.slide')];
  const dots = [...dotsWrap.querySelectorAll('.slider-dot')];
  let current = 0;
  let timer = null;
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function show(index) {
    slides[current]?.classList.remove('is-active');
    dots[current]?.classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current]?.classList.add('is-active');
    dots[current]?.classList.add('is-active');
  }
  function next() { show(current + 1); }
  function prev() { show(current - 1); }
  function start() { if (reducedMotion) return; stop(); timer = setInterval(next, SLIDE_INTERVAL_MS); }
  function stop() { if (timer) clearInterval(timer); timer = null; }

  document.getElementById('sliderNext')?.addEventListener('click', () => { next(); start(); });
  document.getElementById('sliderPrev')?.addEventListener('click', () => { prev(); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));

  const root = document.querySelector('.slider');
  root?.addEventListener('mouseenter', stop);
  root?.addEventListener('mouseleave', start);
  root?.addEventListener('focusin', stop);
  root?.addEventListener('focusout', start);

  start();
}

/* ---------- Modul Aplikasi (feature grid) ---------- */
function renderFeatures() {
  const wrap = document.getElementById('featureGrid');
  if (!wrap) return;
  wrap.innerHTML = FEATURES.map((f) => `
    <div class="feature-card reveal">
      <div class="icon">${getIcon(f.icon, { size: 22 })}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');
}

/* ---------- Pengumuman ---------- */
function renderAnnouncements() {
  const wrap = document.getElementById('announceList');
  if (!wrap) return;
  wrap.innerHTML = ANNOUNCEMENTS.map((a) => `
    <div class="announce-item">
      <div class="announce-date"><span class="d">${a.day}</span><span class="m">${a.month}</span></div>
      <div class="announce-body">
        <h4>${a.title}</h4>
        <p>${a.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ---------- Galeri ---------- */
function renderGallery() {
  const wrap = document.getElementById('galleryGrid');
  if (!wrap) return;
  wrap.innerHTML = GALLERY_ITEMS.map((g, i) => `
    <div class="gallery-item g${(i % 6) + 1}"><span>${g.label}</span></div>
  `).join('');
}

/* ---------- Reveal saat digulir ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  renderFeatures();
  renderAnnouncements();
  renderGallery();
  initSlider();
  initReveal();
});
