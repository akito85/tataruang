// TATARUANG — sumber konten terpusat (nanti digantikan CMS).
// Semua halaman membaca dari sini; menambah item = tampilan ikut bertambah.

export const posts = [
  {
    slug: 'memahami-rab-renovasi',
    judul: 'Memahami RAB Renovasi: Panduan untuk Pemilik Rumah',
    ringkasan:
      'RAB bukan sekadar daftar harga. Pahami komponen upah, material, dan koefisien agar Anda bisa membaca penawaran kontraktor dengan percaya diri.',
    kategori: 'Panduan Biaya',
    tanggal: '2026-06-28',
    menit: 7,
  },
  {
    slug: 'urutan-renovasi-yang-benar',
    judul: 'Urutan Renovasi yang Benar agar Tidak Bongkar Dua Kali',
    ringkasan:
      'Renovasi punya urutan teknis yang tidak bisa ditawar. Salah urutan berarti membongkar pekerjaan yang baru selesai — dan membayar dua kali.',
    kategori: 'Tips Renovasi',
    tanggal: '2026-06-14',
    menit: 6,
  },
  {
    slug: 'memilih-grade-material',
    judul: 'Ekonomi, Standar, atau Premium? Memilih Grade Material dengan Sadar',
    ringkasan:
      'Grade material menentukan 40–60% biaya renovasi Anda. Ketahui di bagian mana grade tinggi layak dibayar, dan di mana grade ekonomi justru pilihan cerdas.',
    kategori: 'Panduan Biaya',
    tanggal: '2026-05-30',
    menit: 8,
  },
  {
    slug: 'dapur-kecil-terasa-luas',
    judul: '7 Trik Desain agar Dapur Kecil Terasa Dua Kali Lebih Luas',
    ringkasan:
      'Dapur 2×3 meter bukan alasan untuk sesak. Tujuh keputusan desain ini membuat dapur mungil bekerja — dan terasa — seperti dapur besar.',
    kategori: 'Inspirasi Desain',
    tanggal: '2026-05-16',
    menit: 5,
  },
  {
    slug: 'kapan-butuh-tukang-harian',
    judul: 'Tukang Harian vs Borongan: Kapan Memilih yang Mana?',
    ringkasan:
      'Salah pilih skema kerja bisa membuat pekerjaan kecil jadi mahal atau proyek besar jadi berlarut. Ini garis batasnya yang jelas.',
    kategori: 'Tips Renovasi',
    tanggal: '2026-04-25',
    menit: 5,
  },
]

export const projects = [
  {
    slug: 'dapur-terbuka-kemang',
    judul: 'Dapur Terbuka Kemang',
    meta: 'DAPUR — JAKSEL — 2026',
    labelSebelum: 'FOTO SEBELUM — DAPUR TERTUTUP',
    labelSesudah: 'FOTO SESUDAH — DAPUR TERBUKA',
  },
  {
    slug: 'kamar-mandi-hotel-menteng',
    judul: 'Kamar Mandi Rasa Hotel',
    meta: 'KAMAR MANDI — MENTENG — 2026',
    labelSebelum: 'FOTO SEBELUM — KM 1980-AN',
    labelSesudah: 'FOTO SESUDAH — RASA HOTEL',
  },
  {
    slug: 'ruang-keluarga-bsd',
    judul: 'Ruang Keluarga Terpadu BSD',
    meta: 'RUANG KELUARGA — BSD — 2026',
    labelSebelum: 'FOTO SEBELUM — DUA KAMAR GELAP',
    labelSesudah: 'FOTO SESUDAH — RUANG TERPADU',
  },
  {
    slug: 'fasad-ruko-bandung',
    judul: 'Fasad Ruko Braga',
    meta: 'KOMERSIAL — BANDUNG — 2025',
    labelSebelum: 'FOTO SEBELUM — RUKO LAMA',
    labelSesudah: 'FOTO SESUDAH — FASAD BARU',
  },
]

export const testimonials = [
  { nama: 'Ratna Widya', meta: 'Renovasi Dapur, Jaksel', kutipan: 'RAB-nya benar-benar dipegang. Selisih akhir hanya 4% dari estimasi awal, dan itu pun karena saya menambah item sendiri.' },
  { nama: 'Bimo Prasetyo', meta: 'Renovasi Rumah, Tangsel', kutipan: 'Pengawasnya kirim foto progres tiap sore. Saya renovasi rumah sambil tetap kerja di luar kota tanpa was-was.' },
  { nama: 'Sari Kusuma', meta: 'Renovasi KM, Depok', kutipan: 'Kamar mandi selesai sembilan hari, sesuai janji. Waterproofing-nya difoto dan dites dulu sebelum keramik dipasang.' },
  { nama: 'Andre Gunawan', meta: 'Tukang Harian, Bandung', kutipan: 'Pesan tukang jam delapan malam, besok paginya sudah datang. Tarifnya persis seperti di aplikasi, tidak ada biaya tambahan.' },
  { nama: 'Melati Hapsari', meta: 'Desain Interior, Jogja', kutipan: 'Desainnya bukan cuma bagus di gambar — setiap material di 3D-nya ada harganya di RAB. Tidak ada kejutan saat eksekusi.' },
  { nama: 'Fajar Nugroho', meta: 'Komersial, Surabaya', kutipan: 'Kafe kami buka tepat di tanggal yang direncanakan. Tim TATARUANG kerja malam saat area harus steril di jam operasional.' },
]

export const team = [
  { nama: 'Arya Mahendra', jabatan: 'Direktur & Arsitek Utama', kode: 'T/01' },
  { nama: 'Nadia Puspita', jabatan: 'Kepala Desain Interior', kode: 'T/02' },
  { nama: 'Yusuf Ramdhani', jabatan: 'Manajer Operasional Lapangan', kode: 'T/03' },
  { nama: 'Clara Simanjuntak', jabatan: 'Kepala Estimasi & RAB', kode: 'T/04' },
]

const BULAN = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES']

export function formatTanggal(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${BULAN[m - 1]} ${y}`
}
