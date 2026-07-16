# STATUS PROYEK — JIHAD PAI

## Progres Sesi

| Sesi | Nama Fitur | Status |
|---|---|---|
| 0 | Design System | ✅ **SELESAI** |
| 1 | Landing Page | ✅ **SELESAI** (sesi ini) |
| 2 | Login Admin + Kelola Data Siswa | ⬜ Belum mulai |
| 3 | Absensi & Rekapitulasi | ⬜ Belum mulai |
| 4 | Pengelolaan Nilai | ⬜ Belum mulai |
| 5 | Jurnal Kegiatan Guru | ⬜ Belum mulai |
| 6 | Catatan Perkembangan Siswa | ⬜ Belum mulai |
| 7 | Bank Soal | ⬜ Belum mulai |
| 8 | Asesmen Online + Halaman Siswa | ⬜ Belum mulai |
| 9 | Pengaturan, Ekspor, Cadangan Data | ⬜ Belum mulai |
| 10 | Fitur Tambahan Lainnya | ⬜ Belum mulai |
| 11 | Sambungkan ke Database Cloudflare D1 | ⬜ Belum mulai |

## Log — Sesi 1: Landing Page (dikerjakan hari ini, 2026-07-14)

**Dikerjakan:**
- `public/index.html` — halaman publik lengkap:
  - Navbar sticky (logo + nama aplikasi kiri, tautan + toggle tema + tombol Masuk kanan),
    dengan menu off-canvas untuk layar HP.
  - Hero section: eyebrow identitas sekolah, judul & deskripsi fungsi aplikasi, dua CTA
    ("Masuk ke Aplikasi" & "Lihat Pengumuman"), ilustrasi SVG asli bertema masjid + bulan
    sabit, dua kartu mengambang (Jurnal Guru Harian, Asesmen Online).
  - Area **Renungan Harian**: kartu konten yang berganti otomatis setiap 6 detik (kutipan
    Islami, hadis Arab-terjemahan-sumber, ayat Al-Qur'an, kisah inspiratif, motivasi),
    dilengkapi dot indikator, tombol panah, jeda otomatis saat hover/fokus, dan menghormati
    preferensi `prefers-reduced-motion`.
  - Ringkasan 3 fitur utama (Absensi, Penilaian, Asesmen) sebagai jembatan menuju sesi
    berikutnya.
  - Bagian **Pengumuman & Kegiatan PAI** (kartu bertag, tanggal, judul, ringkasan) dan
    **Galeri Dokumentasi** (ubin placeholder berwarna + catatan agar admin mengunggah foto
    asli lewat Pengaturan).
  - CTA banner ajakan masuk (Admin/Guru & Siswa) dan footer lengkap (alamat, kontak, media
    sosial, tautan cepat, hak cipta & versi aplikasi).
- `src/styles/landing.css` — berkas gaya khusus landing page (hero, rotator, kartu fitur,
  pengumuman, galeri, CTA, menu mobile, pola geometris Islami sebagai elemen signature),
  diimpor di `src/styles/main.css` setelah `utilities.css`.
- `src/lib/landing-content.js` — sumber data konten Renungan Harian, Pengumuman, dan Galeri,
  distrukturkan agar tinggal diganti sumbernya (bukan markup) saat Sesi 9 (Pengaturan) dan
  Sesi 11 (D1) terhubung.
- `src/lib/landing.js` — logika interaktif: inisialisasi tema, menu mobile off-canvas,
  rotator konten (autoplay, dot, panah, pause on hover/focus), render dinamis pengumuman &
  galeri dari `landing-content.js`.

**Keputusan Desain:**
- Semua warna/tipografi tetap mengikuti token Design System Sesi 0 — tidak ada nilai baru
  ditulis manual di halaman.
- Elemen signature halaman: pola geometris bintang delapan (khatam) sangat samar sebagai
  tekstur latar hero — nuansa Islami yang halus, bukan dekorasi berat.
- Ilustrasi hero dibuat sebagai SVG orisinal (siluet masjid, bulan sabit, bintang) agar
  tidak bergantung pada aset pihak ketiga/berhak cipta.
- Konten Renungan Harian disusun sebagai data terpisah dari markup supaya proses
  menyambungkan ke Pengaturan/D1 di sesi mendatang tidak perlu mengubah HTML.
- Galeri dokumentasi memakai ubin placeholder bergradasi warna brand (bukan foto stok)
  karena belum tersedia foto kegiatan asli — sudah diberi catatan yang jelas untuk admin.

**Pengujian:**
- Dirender di server statis lokal dan diperiksa di lebar 1440px (desktop) & 390px (mobile),
  termasuk uji buka/tutup menu mobile dan mode gelap — tidak ada error JavaScript di console.

**Lanjutan:** Sesi 2 — Login Admin + Kelola Data Siswa di folder `src/pages/data-siswa/`.

## Revisi — Desain Ulang Landing Page (2026-07-14, hari yang sama)

Pengguna menilai desain awal kurang matang dan membagikan referensi HTML dengan
gaya yang lebih disukai (mockup aplikasi di hero, daftar pengumuman bergaya
date-badge, grid galeri berwarna, grid 9 modul). Landing page dibangun ulang
mengikuti arah desain tersebut:

- **Hero** diganti dari ilustrasi SVG masjid menjadi **mockup kartu aplikasi**
  (preview halaman Absensi dengan daftar siswa & status kehadiran) plus dua
  kartu mengambang dan cincin gradasi dekoratif di belakangnya — lebih
  menunjukkan produk sungguhan, bukan ilustrasi generik.
- **Renungan Harian** kini berupa slider satu-kartu dengan tombol panah di
  kiri/kanan luar kartu dan dot di bawah (sebelumnya kartu penuh warna tanpa
  tombol panah terpisah).
- **Modul Aplikasi** diperluas dari 3 kartu contoh menjadi **9 kartu** yang
  mewakili seluruh menu admin (Dashboard s.d. Pengaturan).
- **Kabar Sekolah** diubah dari kartu bertag ke **daftar pengumuman bergaya
  date-badge** (angka tanggal besar + bulan) berdampingan dengan grid galeri
  6 ubin berwarna.
- **CTA band** & **footer** disusun ulang mengikuti proporsi & tipografi
  referensi (footer 3 kolom: tentang+sosial, tautan, kontak).
- Elemen signature diganti dari pola bintang delapan sebagai watermark latar
  menjadi **ikon bintang delapan kecil** (`.star8`, dibuat dengan CSS mask,
  bukan gambar) yang dipakai konsisten di logo, eyebrow, dan kartu mengambang.
- **Keputusan teknis:** desain visual mengikuti referensi secara setia, namun
  ikon tetap memakai sistem ikon internal (`src/components/ui/icons.js`,
  ditambah 7 ikon baru: log-in, layout-grid, book-open-check, check, clock,
  trending-up, message-circle) alih-alih menambah dependensi CDN Lucide —
  supaya landing page tidak bergantung pada layanan pihak ketiga saat
  di-hosting di Cloudflare Pages free tier.
- File yang diubah: `public/index.html` (ditulis ulang total),
  `src/styles/landing.css` (ditulis ulang total), `src/lib/landing.js`
  (ditulis ulang total), `src/lib/landing-content.js` (ditambah `FEATURES`,
  struktur `ANNOUNCEMENTS`/`GALLERY_ITEMS` disederhanakan).
- **Pengujian:** diverifikasi ulang lewat pengecekan DOM otomatis (jumlah
  kartu modul, slide, pengumuman, galeri sesuai data), uji buka/tutup menu
  mobile, uji toggle mode gelap, dan pengecekan warna teks vs latar di mode
  gelap — semua berfungsi tanpa error console.

## Revisi 2 — Warna, Logo Admin-Ready, Efek Mengambang (2026-07-14, hari yang sama)

Permintaan pengguna: sesuaikan semua fungsi dengan brief & struktur awal, buat
kombinasi warna lebih menarik/modern dari palet yang sudah ada, dan buat
mockup kartu aplikasi di hero lebih "mengambang" dengan efek bergerak saat
disorot.

**Logo siap-Pengaturan:**
- `.brand-mark` (navbar & footer) kini berupa kotak gradien primary→accent
  dengan ikon bintang delapan sebagai *fallback*, dan sebuah `<img>` yang
  otomatis menimpanya begitu admin mengunggah logo asli lewat menu
  Pengaturan (`/assets/images/logo-sekolah.png`). Selama file belum ada,
  `onerror` menyembunyikan `<img>` sehingga fallback gradien tetap tampil
  rapi — tidak ada ikon gambar rusak yang terlihat.

**Kombinasi warna lebih modern (tetap 100% memakai token di `variables.css`,
tidak ada hex baru di luar variabel, sesuai aturan Design System):**
- 5 kartu Renungan Harian diubah dari warna flat per kategori menjadi
  **gradien dua-warna (duotone)** yang memadukan token primary/accent/
  success/info/dispensasi yang sudah ada — contoh: hadis kini biru→oranye,
  kisah hijau→biru, motivasi ungu→oranye — hasilnya terlihat menyatu dengan
  identitas merek, bukan warna acak.
- Galeri Dokumentasi memakai palet duotone yang sama (sebelumnya beberapa
  ubin memakai kode warna baru di luar token — sudah diperbaiki).
- Badge "eyebrow", ikon Modul Aplikasi, cincin dekoratif di hero, dan CTA
  band kini memakai gradien blend primary+accent (+ sedikit ungu dispensasi
  di cincin hero) alih-alih warna datar tunggal.

**Mockup aplikasi lebih hidup:**
- Kartu preview Absensi di hero kini melayang naik-turun otomatis (animasi
  halus 5 detik, dimatikan otomatis jika `prefers-reduced-motion` aktif).
- Saat disorot (hover), kartu terangkat lebih tinggi + sedikit membesar +
  miring tipis, dengan bayangan yang lebih dalam dan bertitik warna biru —
  memberi kesan mengambang yang responsif terhadap interaksi pengguna.

**File yang diubah:** `src/styles/landing.css`, `public/index.html` (markup
mockup dibungkus wrapper animasi baru `.app-preview-float`, brand-mark
navbar & footer ditambah slot `<img>`).

**Pengujian:** transform kartu sebelum/sesudah hover diverifikasi berubah
(lift + scale + tilt), nama animasi `app-float` terverifikasi aktif pada
wrapper, fallback logo terverifikasi otomatis tersembunyi saat file belum
ada, gradien slide aktif diverifikasi memakai kombinasi token warna baru,
tanpa error console.
