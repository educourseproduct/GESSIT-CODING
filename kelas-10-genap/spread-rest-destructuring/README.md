# Praktikum Spread, Rest & Destructuring: Anime Watchlist Optimizer (Sesi 15)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 15)**. Pada praktikum ini, kamu akan membangun modul pengolah antrean dan detail tontonan bernama **"Anime Watchlist Optimizer & Queue Manager"** menggunakan fitur powerful ES6+: **Spread Operator**, **Rest Parameter**, dan **Destructuring Assignment**.

Modul ini dirancang agar kamu dapat menguasai tiga konsep manipulasi data modern yang sangat sering digunakan dalam web development profesional:
1. **`Spread Operator` (`...`)**: Membuka elemen array atau properti objek ke dalam wadah baru. Sangat berguna untuk menggabungkan data atau menyalin (cloning) objek secara aman (*immutability*).
2. **`Rest Parameter` (`...`)**: Mengumpulkan beberapa argumen yang dikirim ke fungsi menjadi sebuah array utuh.
3. **`Destructuring Assignment` (`[]` / `{}`)**: Membongkar elemen dari array atau properti dari objek secara langsung ke dalam variabel individual yang terpisah.

---

## 🎯 Tujuan Pembelajaran
1. Memahami sintaks dan kegunaan **Spread Operator** pada array dan objek.
2. Menggunakan **Rest Parameter** untuk menerima argumen dengan jumlah dinamis pada fungsi JavaScript.
3. Menerapkan **Destructuring Assignment** pada array untuk mengekstrak elemen berdasarkan urutan indeks.
4. Menerapkan **Destructuring Assignment** pada objek untuk mengekstrak nilai properti berdasarkan nama kuncinya (*property key*).
5. Mengombinasikan ketiga fitur di atas untuk menyelesaikan alur pemrosesan data antrean secara bertahap.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 5 Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Penggabungan Daftar & Kloning Data (`Spread Operator` Array & Object)
1. Gabungkan array `antreanPopuler` dan `antreanPilihan` menjadi sebuah array tunggal bernama `antreanGabungan` menggunakan **Spread Operator** (`...`).
2. Selesaikan fungsi `cloneAndUpdateAnime(animeObj, ratingBaru)`. Fungsi ini bertujuan untuk membuat salinan objek anime yang baru, memperbarui nilai ratingnya dengan `ratingBaru`, dan menambahkan properti baru `diperbarui: true` menggunakan **Spread Operator** pada objek.

---

### Misi 2: Input Batch Anime Baru (`Rest Parameter`)
Selesaikan fungsi **`tambahBatchAnime(status, ...judulBaru)`**:
1. Fungsi ini menerima parameter pertama `status` dan sisa argumennya sebagai array `judulBaru` menggunakan **Rest Parameter** (`...judulBaru`).
2. Gunakan metode perulangan pada array `judulBaru` untuk mengonversi setiap judul menjadi objek anime baru dengan status sesuai parameter `status` (genre dan episode diberi nilai default).
3. Tambahkan objek-objek baru tersebut ke dalam array utama `watchlist` dan perbarui tampilan halaman.

---

### Misi 3: Pemisahan Prioritas Tontonan (`Destructuring Array`)
Selesaikan fungsi **`pisahkanPrioritas()`**:
1. Gunakan **Destructuring Array** untuk mengambil 2 anime pertama dari array `watchlist`. Variabel pertama diberi nama `utama1`, variabel kedua diberi nama `utama2`, dan sisa anime lainnya ditampung ke dalam satu array bernama `cadangan` menggunakan sintaks rest.
   * *Petunjuk:* `const [utama1, utama2, ...cadangan] = watchlist;`
2. Render anime `utama1` dan `utama2` ke bagian panel visual **"Highlight Hari Ini"** di layar.
3. Render anime yang ada di dalam array `cadangan` ke panel **"Antrean Tunggu"**.

---

### Misi 4: Ekstraksi Informasi Detail Anime (`Destructuring Object`)
Selesaikan fungsi **`tampilkanDetailAnime(animeObj)`**:
1. Lakukan **Destructuring Object** untuk mengambil properti `judul`, `genre`, `episode`, `rating`, dan `status` secara langsung dari parameter `animeObj`.
   * *Petunjuk:* `const { judul, genre, episode, rating, status } = animeObj;`
2. Susun string HTML menggunakan variabel-variabel hasil destructuring tersebut tanpa menuliskan prefiks objek (seperti `animeObj.judul` dsb).
3. Tampilkan kartu detail tersebut ke elemen preview `#detail-preview-container`.

---

### Misi 5: Pemrosesan Cascade Data Watchlist (Integrasi Spread, Rest & Destructuring)
Selesaikan logika tombol **"Jalankan Proses Cascade"** (`#btn-run-cascade`):
1. Kita akan mensimulasikan aliran data bertahap (seperti proyek Cascade, Harvest, dan Extract di slide).
2. Data mengalir dari **Stage 1 (Hulu)** -> **Stage 2 (Proses)** -> **Stage 3 (Hilir/Hasil Akhir)**.
3. Di setiap stage, data array diurai menggunakan kombinasi spread operator, dikirim menggunakan rest parameter, dan diurai kembali menggunakan destructuring untuk mengambil data penting dan menyajikan log prosesnya di elemen `#cascade-log-container`.

---

Selamat belajar dan selamat menguasai kekuatan dari sintaks modern JavaScript ES6+! Gunakan fitur-fitur ini untuk menulis kode yang bersih, elegan, dan profesional! 🚀
