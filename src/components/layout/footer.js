/**
 * JIHAD PAI — Footer Landing Page
 */

export function renderFooter({
  schoolName = 'SDN 262 Panyileukan',
  address = 'Jl. Panyileukan, Bandung, Jawa Barat',
  phone = '(022) 000-0000',
  email = 'info@sdn262panyileukan.sch.id',
  version = 'v1.0.0',
} = {}) {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__grid">
          <div>
            <div class="site-footer__brand">JIHAD PAI</div>
            <p>Jurnal, Informasi Harian, dan Administrasi Guru PAI — ${schoolName}.</p>
          </div>
          <div>
            <div class="site-footer__brand">Kontak</div>
            <div class="site-footer__links">
              <span>${address}</span>
              <span>${phone}</span>
              <span>${email}</span>
            </div>
          </div>
          <div>
            <div class="site-footer__brand">Tautan</div>
            <div class="site-footer__links">
              <a href="#pengumuman">Pengumuman</a>
              <a href="#galeri">Galeri Dokumentasi</a>
              <a href="/login">Masuk Aplikasi</a>
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <span>&copy; ${year} ${schoolName}. Hak cipta dilindungi.</span>
          <span>JIHAD PAI ${version}</span>
        </div>
      </div>
    </footer>
  `;
}
