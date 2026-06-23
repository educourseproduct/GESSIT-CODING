# Praktikum Modern JS (ES6+): Anime Watchlist Dashboard (Sesi 14)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 14)**. Pada praktikum ini, kamu akan membangun modul tracker antrean tontonan animasi bernama **"Anime Watchlist Dashboard"** menggunakan fitur-fitur modern dari JavaScript ES6+.

Praktikum ini dirancang untuk memperkenalkan dan mempraktikkan sintaks modern JavaScript ES6+ yang membuat penulisan kode menjadi lebih ringkas, efisien, dan mudah dirawat:
1. **`Class` (Pembuatan Objek)**: Menggunakan sintaks class modern untuk mendefinisikan cetak biru data anime.
2. **`Set` (Koleksi Unik)**: Mengumpulkan data genre unik dari kumpulan data secara dinamis untuk dijadikan filter kategori.
3. **`map()` (Transformasi Data)**: Mentransformasikan array data objek anime menjadi elemen visual card HTML secara dinamis.
4. **`filter()` (Penyaringan)**: Menyaring anime berdasarkan genre, status menonton, atau kecocokan teks pencarian.
5. **`reduce()` (Agregasi Data)**: Menghitung total akumulasi seluruh episode anime yang ada dalam daftar tontonan.
6. **`find()` & `findIndex()` (Pencarian)**: Mencari satu elemen anime berdasarkan kriteria judul dan posisinya (indeks antrean) dalam daftar.
7. **String Methods (`includes`, `startsWith`, `endsWith`)**: Melakukan pencarian berbasis teks secara modern pada data string.
8. **Math & Number API (`Math.trunc`, `Number.isInteger`)**: Memvalidasi integritas data numerik dan melakukan pembulatan bilangan desimal secara aman.

---

## 🎯 Tujuan Pembelajaran
1. Memahami perbedaan dan keunggulan fitur modern JavaScript (ES6+) dibanding versi sebelumnya.
2. Menggunakan **`Class`** untuk membuat cetak biru objek yang terstruktur.
3. Menggunakan **`new Set()`** untuk menyaring nilai unik dari kumpulan data.
4. Menggunakan **`.map()`**, **`.filter()`**, dan **`.reduce()`** untuk memproses data array secara deklaratif tanpa perulangan manual (`for` / `while`).
5. Menggunakan **`.find()`** dan **`.findIndex()`** untuk mencari nilai dan indeks elemen di dalam array.
6. Menerapkan method modern String (`startsWith`, `endsWith`, `includes`) untuk pencarian teks dinamis.
7. Memanfaatkan method Math & Number (`Math.trunc()`, `Number.isInteger()`) untuk validasi input dan perhitungan.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Inisialisasi Class Anime & Filter Genre Dinamis (`Class` & `Set`)
1. Selesaikan definisi class **`Anime`** yang berisi constructor dengan parameter: `judul`, `genre`, `episode`, `rating`, dan `status`.
2. Pada bagian inisialisasi filter genre:
   - Ekstrak seluruh genre dari array `animeData`.
   - Gunakan **`new Set()`** untuk menyeleksi genre-genre unik agar tidak ada duplikasi genre.
   - Konversikan kembali Set menjadi Array menggunakan **`Array.from()`** atau spread operator.
   - Lakukan perulangan untuk merender pilihan genre tersebut ke dalam dropdown HTML `#genre-filter`.

---

### Misi 2: Rendering Visual Watchlist (`map` & String Methods)
Selesaikan fungsi **`renderWatchlist(data)`**:
1. Kosongkan terlebih dahulu isi kontainer kartu `#watchlist-container`.
2. Jika data kosong, render pesan: *"Watchlist kosong atau tidak ditemukan!"*.
3. Jika ada data, gunakan metode **`.map()`** pada array data untuk menghasilkan string kartu HTML (`div.col-md-6.col-lg-4`) untuk setiap anime yang berisi:
   - Judul Anime
   - Genre (dengan badge styling)
   - Jumlah Episode
   - Rating (dibulatkan menggunakan Math API)
   - Status (Watching, Completed, atau Plan to Watch)
4. Gabungkan hasil array string HTML dari `.map()` tersebut menggunakan `.join("")` dan masukkan ke dalam innerHTML `#watchlist-container`.

---

### Misi 3: Filter Genre dan Status (`filter`)
Selesaikan fungsi **`applyFilters()`**:
1. Dapatkan nilai terpilih dari `#genre-filter`, `#status-filter`, dan kata kunci pencarian dari `#search-anime`.
2. Gunakan metode **`.filter()`** pada array `animeData` untuk menyaring anime berdasarkan:
   - Kecocokan genre (jika tidak memilih "Semua Genre").
   - Kecocokan status tontonan (jika tidak memilih "Semua Status").
   - Judul yang dicari (gunakan `.toLowerCase()` dan pencarian teks ES6 seperti **`.includes()`**, atau **`.startsWith()`**).
3. Panggil `renderWatchlist(filteredData)` dengan data hasil penyaringan.
4. Hubungkan fungsi ini ke event listener input pencarian dan dropdown filter.

---

### Misi 4: Menghitung Total Episode Ditonton (`reduce`)
Selesaikan fungsi **`updateStatistics()`**:
1. Gunakan metode **`.reduce()`** pada array `animeData` untuk menjumlahkan seluruh properti `episode` dari objek anime yang ada di daftar.
2. Tampilkan hasil perhitungan total episode tersebut ke dalam elemen `#total-episodes`.

---

### Misi 5: Detail Pencarian & Posisi Antrean (`find` & `findIndex`)
Selesaikan event handler klik untuk tombol **"Cari Posisi Antrean"** (`#btn-search-info`):
1. Ambil nilai judul pencarian dari input `#search-info-input`.
2. Gunakan metode **`.find()`** untuk mencari objek anime pertama yang judulnya cocok secara case-insensitive.
3. Gunakan metode **`.findIndex()`** untuk mendapatkan indeks posisi anime tersebut di dalam daftar `animeData`.
4. Tampilkan hasilnya ke elemen `#search-info-result`:
   - Jika ditemukan: *"Ditemukan: [Judul] (Genre: [Genre]) di antrean ke-[Indeks + 1]"*.
   - Jika tidak ditemukan: *"Anime tidak ditemukan di daftar watchlist!"*.

---

### Misi Tambahan: Tambah Anime & Validasi Numerik (`Number.isInteger` & `Math.trunc`)
Selesaikan logika tombol **"Tambah Anime"** (`#btn-add-anime`):
1. Ambil input dari form judul, genre, episode, rating, dan status.
2. Lakukan validasi:
   - Pastikan jumlah episode adalah bilangan bulat positif yang valid menggunakan **`Number.isInteger(parseFloat(episode))`**. Jika tidak valid, tampilkan alert/pesan error.
   - Nilai rating harus berada di antara 1 - 10.
3. Instansiasi objek anime baru menggunakan **`new Anime(judul, genre, episode, rating, status)`**.
4. Masukkan objek tersebut ke dalam array `animeData` menggunakan `.push()`.
5. Panggil `renderWatchlist()`, `updateStatistics()`, dan inisialisasi ulang filter genre jika ada genre baru.

---

Selamat belajar dan mencoba fitur-fitur modern dari JavaScript ES6+! Manfaatkan kesempatan ini untuk memodernisasi cara berpikir kodingmu menuju web development tingkat lanjut! 🚀
