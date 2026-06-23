# Praktikum AJAX: Anime Watchlist Loader (Sesi 18)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 18)**. Pada praktikum ini, kamu akan membangun dashboard pemuat antrean bernama **"Anime Watchlist Loader"** menggunakan teknik **AJAX (Asynchronous JavaScript and XML)**.

Sesuai dengan praktik web development modern, kode JavaScript pada praktikum ini akan **dipisahkan secara terstruktur** ke dalam berkas eksternal bernama `script.js`.

Praktikum ini dirancang untuk mengajarkan bagaimana memuat data dari API atau server eksternal asinkron menggunakan jQuery AJAX:
1. **`$.getJSON()`**: Memuat dan mengurai file data eksternal berformat JSON secara ringkas.
2. **`$.ajax()`**: Mengambil berkas berformat XML dengan properti `dataType: "xml"`.
3. **`DOM parsing XML`**: Melakukan navigasi tag XML menggunakan `.find("item").each()` untuk menyalin nilainya ke objek JS.
4. **`Error Handling` (`.fail()`)**: Menangani kegagalan loading berkas data dan meminimalisir program terhenti.
5. **`Interactive Filtering`**: Mengikat event `.change()` pada dropdown filter untuk menyaring database gabungan.

---

## 🎯 Tujuan Pembelajaran
1. Memahami konsep dasar AJAX dan perbandingan format data JSON vs XML.
2. Memisahkan struktur kode HTML dan JavaScript ke berkas terpisah (`index.html` dan `script.js`).
3. Mengimpor file JSON eksternal menggunakan `$.getJSON()`.
4. Mengimpor file XML eksternal menggunakan `$.ajax()` dengan tipe data XML.
5. Mengurai data XML menggunakan selector jQuery `.find()` dan perulangan `.each()`.
6. Menerapkan mekanisme penanganan error asinkron menggunakan `.fail()`.
7. Membuat penyaringan data dinamis (filter) berdasarkan perubahan dropdown.

---

## 📂 Struktur Berkas Proyek
* `data.json` - Kumpulan data anime modern (berformat JSON).
* `data.xml` - Kumpulan data anime klasik/retro (berformat XML).
* `index.html` - Halaman layout antarmuka (menghubungkan ke `script.js`).
* `script.js` - Lembar kerja JavaScript siswa (tempat kamu menuliskan logika koding).

---

## ⚠️ CATATAN PENTING: CORS Policy & Local Server
Karena browser modern menerapkan aturan keamanan yang ketat (**CORS Policy**), permintaan AJAX untuk mengambil file lokal (`data.json` dan `data.xml`) **tidak dapat dijalankan** jika file HTML dibuka langsung secara klik ganda (`file:///...` pada address bar browser).

Untuk menjalankannya:
1. Buka folder proyek ini menggunakan editor **Visual Studio Code**.
2. Pasang ekstensi **"Live Server"** dari VS Code Extension Marketplace.
3. Klik tombol **"Go Live"** di pojok kanan bawah VS Code untuk menjalankan server lokal.
4. Browser akan terbuka otomatis dengan URL `http://127.0.0.1:5500/...` dan skrip AJAX kamu akan berjalan dengan sukses!

---

## 🚀 Petunjuk Pengerjaan

Buka file `script.js` menggunakan Visual Studio Code. Selesaikan 4 Misi utama berikut:

### Misi 1: Rendering Hasil Data (`displayResult`)
Selesaikan fungsi **`displayResult(animeList)`**:
1. Target rendering data diletakkan pada div `#anime-list`.
2. Periksa apakah parameter `animeList` kosong. Jika kosong, tampilkan teks: *"Tidak ada anime ditemukan!"*.
3. Jika terisi, gunakan metode **`.map()`** untuk menyusun string HTML kartu kolom Bootstrap untuk setiap anime yang berisi:
   - Judul Anime
   - Genre Anime
   - Badge Rating
4. Gabungkan hasil array string HTML menggunakan **`.join("")`** dan masukkan ke dalam `innerHTML` `#anime-list`.

---

### Misi 2: Event Dropdown Kategori (`change`)
Selesaikan fungsi **`displayData(kategori)`**:
1. Buat event handler change pada dropdown filter genre (`#filter`):
   - Tangkap nilai genre yang dipilih pengguna menggunakan **`$(this).val()`** dan masukkan ke variabel `kategori`.
   - Panggil fungsi `displayData(kategori)` untuk memproses pemuatan ulang.

---

### Misi 3: AJAX Loading & Parsing XML (`$.getJSON` & `$.ajax`)
Di dalam fungsi **`displayData(kategori)`**:
1. Bersihkan kontainer `#anime-list` dan tampilkan indikator teks *"Sedang memuat data..."*.
2. Buat array kosong bernama `allAnime` untuk menampung data gabungan.
3. Panggil **`$.getJSON("data.json")`** untuk memuat data JSON:
   - Jika sukses, gabungkan data array JSON tersebut ke dalam `allAnime` (bisa menggunakan spread operator atau loop).
4. Di dalam callback sukses JSON, panggil **`$.ajax()`** untuk memuat data XML:
   - Tentukan `url: "data.xml"` dan `dataType: "xml"`.
   - Jika sukses, lakukan perulangan pada setiap tag `<item>` menggunakan **`$(xml).find("item").each(function() { ... })`**.
   - Di dalam loop, ambil judul, genre, dan rating menggunakan **`$(this).find("judul").text()`**, dsb.
   - Bungkus nilai-nilai tersebut ke dalam objek, lalu masukkan (`.push()`) ke array `allAnime`.
5. Setelah penggabungan selesai, lakukan pemfilteran berdasarkan parameter `kategori`:
   - Jika `kategori` bernilai `"all"`, panggil `displayResult(allAnime)`.
   - Jika bernilai tertentu, lakukan `.filter()` pada `allAnime` dan panggil `displayResult(filteredAnime)`.

---

### Misi 4: Penanganan Eror AJAX (`.fail`)
Tambahkan blok penanganan eror pada request AJAX:
1. Tempelkan method **`.fail()`** di bagian akhir panggilan `$.getJSON` dan `$.ajax`.
2. Jika gagal, cetak pesan kesalahan di `console.log()` dan tampilkan pesan kegagalan memuat berkas ke dalam elemen `#anime-list`.

---

Selamat belajar dan mencoba integrasi AJAX! Gunakan pemisahan berkas ini sebagai langkah awal menuju standar koding industri web development profesional! 🚀
