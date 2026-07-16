/**
 * JIHAD PAI — Konten Landing Page (dapat diperbarui Admin)
 *
 * Larik-larik di berkas ini merepresentasikan data yang nantinya dikelola
 * melalui menu Pengaturan > Konten Landing Page (Sesi 9) dan disimpan di
 * Cloudflare D1 (Sesi 11). Untuk Sesi 1, data disimpan statis di sini agar
 * halaman publik dapat langsung berfungsi; struktur objeknya sudah disamakan
 * dengan skema yang akan dipakai backend sehingga migrasinya tinggal
 * mengganti sumber data dari array ini menjadi hasil fetch API, tanpa
 * mengubah markup maupun logika render di landing.js.
 */

/** type: 'kutipan' | 'hadis' | 'ayat' | 'kisah' | 'motivasi' */
export const ROTATOR_SLIDES = [
  {
    type: 'ayat',
    label: 'Ayat Al-Qur\u2019an',
    arabic: '\u0625\u0650\u0646\u0651\u064E\u0645\u064E\u0627 \u0627\u0644\u0652\u0645\u064F\u0624\u0652\u0645\u0650\u0646\u064F\u0648\u0646\u064E \u0625\u0650\u062E\u0652\u0648\u064E\u0629\u064C \u0641\u064E\u0623\u064E\u0635\u0652\u0644\u0650\u062D\u064F\u0648\u0627 \u0628\u064E\u064A\u0652\u0646\u064E \u0623\u064E\u062E\u064E\u0648\u064E\u064A\u0652\u0643\u064F\u0645\u0652',
    text: '\u201cSesungguhnya orang-orang mukmin itu bersaudara, maka damaikanlah antara kedua saudaramu.\u201d',
    source: 'QS. Al-Hujurat: 10',
  },
  {
    type: 'hadis',
    label: 'Hadis Pilihan',
    arabic: '\u0637\u064E\u0644\u064E\u0628\u064F \u0627\u0644\u0652\u0639\u0650\u0644\u0652\u0645\u0650 \u0641\u064E\u0631\u0650\u064A\u0636\u064E\u0629\u064C \u0639\u064E\u0644\u064E\u0649 \u0643\u064F\u0644\u0651\u0650 \u0645\u064F\u0633\u0652\u0644\u0650\u0645\u064D',
    text: '\u201cMenuntut ilmu itu wajib bagi setiap muslim.\u201d',
    source: 'HR. Ibnu Majah',
  },
  {
    type: 'kutipan',
    label: 'Kutipan Islami',
    text: '\u201cSebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.\u201d',
    source: 'HR. Ahmad, Ath-Thabrani, Ad-Daruqutni',
  },
  {
    type: 'kisah',
    label: 'Kisah Inspiratif',
    text: 'Ketika Rasulullah \u2ee2 diminta mendoakan keburukan bagi penduduk Thaif yang menyakitinya, beliau justru berdoa agar keturunan mereka kelak menjadi orang-orang yang menyembah Allah semata \u2014 teladan kesabaran dan kasih sayang seorang pendidik.',
    source: 'Sirah Nabawiyah',
  },
  {
    type: 'motivasi',
    label: 'Motivasi Guru & Siswa',
    text: '\u201cSetiap huruf yang engkau ajarkan hari ini bisa menjadi amal yang terus mengalir. Teruslah menanam kebaikan di kelasmu, Bapak/Ibu Guru.\u201d',
    source: 'Motivasi Harian JIHAD PAI',
  },
];

/** 9 modul aplikasi — konten statis (mengikuti struktur menu terkunci), ditampilkan di bagian "Modul Aplikasi". */
export const FEATURES = [
  { icon: 'dashboard', title: 'Dashboard', desc: 'Ringkasan statistik, grafik kehadiran & nilai secara real time.' },
  { icon: 'data-siswa', title: 'Data Siswa', desc: 'Pusat data peserta didik, lengkap dengan akun login & import Excel.' },
  { icon: 'absensi', title: 'Absensi', desc: 'Isi kehadiran secepat klik, dengan rekap harian hingga semester.' },
  { icon: 'penilaian', title: 'Penilaian', desc: 'Input nilai bergaya spreadsheet dengan kolom identitas yang selalu terlihat.' },
  { icon: 'catatan-siswa', title: 'Catatan Siswa', desc: 'Rekam jejak perkembangan karakter siswa dalam bentuk timeline.' },
  { icon: 'jurnal-guru', title: 'Jurnal Guru', desc: 'Jurnal mengajar digital lengkap dengan tampilan kalender.' },
  { icon: 'bank-soal', title: 'Bank Soal', desc: 'Simpan soal sekali, gunakan berulang untuk berbagai asesmen.' },
  { icon: 'asesmen', title: 'Asesmen Online', desc: 'Ujian online dengan koreksi otomatis & nilai tersinkron ke Penilaian.' },
  { icon: 'pengaturan', title: 'Pengaturan', desc: 'Identitas sekolah, kop surat, tahun ajaran, hingga tema aplikasi.' },
];

/** Contoh data pengumuman & info kegiatan PAI — akan diganti sumber D1 pada Sesi 9/11. */
export const ANNOUNCEMENTS = [
  { day: '14', month: 'Jul', title: 'Rapat Koordinasi KKG PAI Gugus 03', desc: 'Pembahasan penyusunan jurnal & asesmen semester ganjil 2026/2027.' },
  { day: '18', month: 'Jul', title: 'Pembukaan Tahun Ajaran 2026/2027', desc: 'Seluruh data kelas & siswa baru mulai diinput melalui menu Data Siswa.' },
  { day: '22', month: 'Jul', title: 'Pelatihan Bank Soal HOTS', desc: 'Workshop penyusunan soal berbasis penalaran untuk mapel PAI.' },
];

/** Contoh label galeri dokumentasi — nantinya diisi unggahan foto asli via Pengaturan. */
export const GALLERY_ITEMS = [
  { label: 'Pesantren Kilat' },
  { label: 'Lomba Tahfiz' },
  { label: 'Sholat Dhuha' },
  { label: 'Rapat Guru PAI' },
  { label: 'Praktik Wudhu' },
  { label: 'Peringatan Maulid' },
];
