# Design System — JIHAD PAI (Sesi 0)

Dokumen ini merangkum seluruh token dan komponen dasar yang dibangun pada
**Sesi 0**. Semua halaman fitur berikutnya (Sesi 1–10) **wajib** memakai
token dan kelas CSS di sini — jangan menulis warna/ukuran baru secara manual.

## 1. Cara Pakai

Tambahkan satu baris ini di `<head>` setiap halaman:

```html
<link rel="stylesheet" href="/src/styles/main.css">
<script type="module" src="/src/main.js"></script>
```

`main.css` sudah meng-`@import` seluruh berkas token & komponen secara
berurutan. `main.js` otomatis menyalakan mode terang/gelap dan toggle
sidebar mobile — tidak perlu inisialisasi manual di tiap halaman.

## 2. Warna

| Token | Hex | Kegunaan |
|---|---|---|
| `--color-primary-500` | `#165DFF` | Warna utama (tombol utama, link, sidebar aktif) |
| `--color-accent-500` | `#FF7D00` | Warna aksen (CTA sekunder, highlight) |
| `--color-success-500` | `#00B42A` | Status positif (Hadir, Tuntas, Aktif) |
| `--color-warning-500` | `#FFAB00` | Status waspada (Sakit, MOTS) |
| `--color-danger-500` | `#F53F3F` | Status negatif (Alfa, Hapus, HOTS) |
| `--color-info-500` | `#3491FA` | Informasi (Izin) |

Semua warna latar/teks/border memakai token semantik (`--bg-surface`,
`--text-heading`, `--border-color`, dst.) yang **berubah otomatis** saat
mode gelap aktif — jangan pernah menulis hex langsung di komponen halaman.

## 3. Tipografi

- Font utama: **Poppins**, fallback **Inter** (`--font-base`)
- Font Arab (ayat/hadis): `--font-arabic` — gunakan kelas `.text-arabic`
- Skala ukuran: `--fs-xs` (12px) s.d. `--fs-4xl` (48px)

## 4. Mode Terang & Gelap

Tema diatur lewat atribut `data-theme="light|dark"` pada `<html>`,
disimpan di `localStorage` (`jihadpai-theme`), dan otomatis mengikuti
preferensi sistem operasi jika pengguna belum pernah memilih manual.

Tambahkan tombol toggle di mana pun dengan atribut `data-theme-toggle`:

```html
<button data-theme-toggle class="btn btn-icon btn-ghost" aria-label="Ganti tema">🌓</button>
```

## 5. Komponen Siap Pakai

| Komponen | Berkas CSS | Kelas utama |
|---|---|---|
| Tombol | `buttons.css` | `.btn .btn-primary .btn-accent .btn-outline .btn-ghost .btn-danger` |
| Kartu | `cards.css` | `.card .card-header .card-body .card-footer .stat-card` |
| Input Form | `inputs.css` | `.form-group .form-input .form-select .form-textarea .switch` |
| Tabel | `tables.css` | `.table-wrapper .table .col-freeze .table-striped` |
| Navigasi | `navigation.css` | `.sidebar .topbar .navbar-public .site-footer` |
| Modal | `modals.css` | `.modal-overlay .modal .toast` |
| Badge/Status | `badges.css` | `.badge-hadir .badge-izin .badge-lots .badge-active` |

Komponen JS interaktif (menghasilkan markup siap tempel) ada di
`src/components/`:

- `layout/sidebar.js` → `renderSidebar(activeId)` + `initSidebarToggle()`
- `layout/navbar.js` → `renderAdminTopbar()`, `renderPublicNavbar()`
- `layout/footer.js` → `renderFooter()`
- `ui/theme-toggle.js` → `initTheme()`, `toggleTheme()`
- `ui/icons.js` → `getIcon(nama)`
- `forms/form-field.js` → `renderFormField(config)`

Contoh pemakaian di sebuah halaman fitur:

```js
import { renderSidebar, initSidebarToggle } from '../../components/layout/sidebar.js';
import { renderAdminTopbar } from '../../components/layout/navbar.js';

document.getElementById('layout-root').innerHTML = `
  ${renderSidebar('dashboard')}
  <main class="app-main">
    ${renderAdminTopbar({ pageTitle: 'Dashboard' })}
    <div class="container">...</div>
  </main>
`;
initSidebarToggle();
```

## 6. Kolom Freeze (khusus halaman Penilaian)

Tabel nilai bergaya spreadsheet memakai `.col-freeze-1/2/3` pada kolom
No/NIS/Nama agar tetap terlihat saat digulir ke samping. Lihat komentar
di `tables.css` untuk detail pemakaian `--freeze-offset-*`.

## 7. Pratinjau Visual

Buka `docs/design-system-demo.html` di browser untuk melihat seluruh
komponen sekaligus (termasuk toggle mode terang/gelap) sebelum dipakai
di halaman sungguhan.

## 8. Aturan Konsistensi

- **Dilarang** menulis warna hex/ukuran font baru langsung di halaman —
  selalu lewat variabel di `variables.css`.
- **Dilarang** membuat berkas CSS baru di luar `src/styles/` (lihat aturan
  struktur folder terkunci di project brief).
- Setiap komponen baru yang dipakai berulang di lebih dari satu halaman
  wajib dipindah ke `src/components/ui/` atau `src/components/layout/`.
