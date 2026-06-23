# Praktikum jQuery Fundamental: Interactive Anime Hub (Sesi 17)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 17)**. Pada praktikum ini, kamu akan membangun sebuah modul dashboard interaktif bernama **"Interactive Anime Watchlist Hub"** menggunakan **jQuery**.

jQuery adalah salah satu library JavaScript paling populer yang menyederhanakan penulisan skrip DOM manipulation, event handling, CSS manipulation, dan efek transisi. Dengan jQuery, tugas-tugas JavaScript yang biasanya membutuhkan baris kode panjang dapat ditulis dengan sangat ringkas:
1. **`jQuery Selectors` (`$()`, `this`)**: Menyeleksi elemen HTML secara efisien menggunakan selector CSS.
2. **`Event Handlers`**: Menangani interaksi pengguna seperti `.ready()`, `.click()`, `.dblclick()`, `.mouseenter()`, `.mouseleave()`, `.keydown()`, dan `.on()`.
3. **`CSS Manipulation` (`.css()`)**: Mengubah properti style CSS secara dinamis langsung dari kode skrip.
4. **`Class Manipulation`**: Menambah, menghapus, atau men-toggle class CSS menggunakan `.addClass()`, `.removeClass()`, dan `.toggleClass()`.
5. **`DOM Manipulation`**: Menyisipkan elemen baru dengan `.append()` dan mengelola nilai input form dengan `.val()`.
6. **`Looping` (`.each()`)**: Mengiterasi kumpulan elemen untuk memproses data secara berurutan.

---

## 🎯 Tujuan Pembelajaran
1. Menghubungkan library jQuery menggunakan Content Delivery Network (CDN).
2. Memahami penggunaan selector dasar jQuery (`$()`) dan selector kontekstual (`this`).
3. Mengimplementasikan event listener mouse (`mouseenter`, `mouseleave`, `click`, `dblclick`) dan keyboard (`keydown`).
4. Memanipulasi properti CSS elemen secara tunggal maupun jamak menggunakan `.css()`.
5. Mengelola class CSS menggunakan `.addClass()`, `.removeClass()`, dan `.toggleClass()`.
6. Menyisipkan elemen HTML dinamis ke halaman menggunakan `.append()`.
7. Menggunakan event delegation `.on()` untuk mengikat event pada elemen yang baru ditambahkan secara dinamis.
8. Melakukan perulangan elemen menggunakan `.each()` untuk fitur live search filter.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 4 Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Efek Interaktif Kartu Anime (`mouseenter`, `mouseleave`, `dblclick`, `ready`)
1. Pastikan seluruh kode jQuery berada di dalam blok `$(document).ready(function() { ... })`.
2. Tangani event hover pada setiap kartu anime (`.anime-card`):
   - Saat mouse masuk (`mouseenter`), tambahkan shadow tebal dan ubah warna border kartu menggunakan jQuery.
   - Saat mouse keluar (`mouseleave`), kembalikan border dan shadow kartu ke kondisi semula.
3. Tangani event double-click (`dblclick`) pada kartu anime: saat diklik dua kali, toggle ukuran kartu menjadi sedikit lebih besar atau kembalikan ke ukuran semula (*zoom effect*).

---

### Misi 2: Kustomisasi & Tema Kartu (`.css()`, `.toggleClass()`)
Selesaikan logika kustomisasi pada panel kartu pilihan:
1. Hubungkan tombol **"Ubah Warna Acak"** (`#btn-random-bg`): saat diklik, ubah warna background kartu terpilih menggunakan `.css('background-color', getRandomColor())`.
2. Hubungkan tombol **"Toggle Dark Mode Kartu"** (`#btn-toggle-dark`): saat diklik, lakukan toggle class `.dark-mode-card` pada kartu pilihan menggunakan `.toggleClass()`.
   * *Catatan:* CSS untuk `.dark-mode-card` sudah disediakan di tag `<style>`.

---

### Misi 3: Kelola Antrean Dinamis (`.append()`, `.val()`, `.on()`)
Selesaikan fungsionalitas penambahan dan penghapusan item antrean anime:
1. Hubungkan tombol **"Tambah Anime"** (`#btn-add-anime`):
   - Ambil nilai dari input judul (`#input-judul`) dan genre (`#input-genre`) menggunakan `.val()`.
   - Jika judul kosong, tampilkan peringatan.
   - Jika terisi, susun baris HTML baru (`li`) yang berisi judul, genre, dan tombol hapus (`.btn-delete-item`).
   - Sisipkan elemen baru tersebut ke dalam list antrean (`#watchlist-list`) menggunakan `.append()`.
   - Kosongkan kembali input text menggunakan `.val("")`.
2. Gunakan event delegation **`.on()`** pada elemen induk `#watchlist-list` untuk mendeteksi klik tombol hapus (`.btn-delete-item`):
   - Hapus baris antrean terkait dari halaman menggunakan `.parent().remove()`.
   - *Petunjuk:* `$("#watchlist-list").on("click", ".btn-delete-item", function() { $(this).parent().remove(); });`

---

### Misi 4: Live Search Filter & Looping (`.each()`)
Selesaikan fungsi pencarian anime secara real-time:
1. Tangani input pada kolom pencarian `#search-anime` menggunakan event `.on('input', ...)` atau `.keyup()`.
2. Di dalamnya, ambil kata kunci pencarian (jadikan huruf kecil dengan `.toLowerCase()`).
3. Gunakan metode **`.each()`** pada semua elemen kartu anime (`.anime-card`):
   - Di dalam callback `.each()`, dapatkan teks judul anime (misal dari elemen `.card-title` di dalam kartu).
   - Periksa apakah judul anime mengandung kata kunci pencarian.
   - Jika cocok, tampilkan kartu tersebut menggunakan `.show()`.
   - Jika tidak cocok, sembunyikan kartu tersebut menggunakan `.hide()`.

---

### Misi Tambahan: Click Counter & Keydown Shortcut
1. Buat variabel counter interaksi klik awal bernilai 0.
2. Gunakan jQuery untuk mendeteksi klik pada seluruh area kartu anime (`.anime-card`): setiap kali diklik, naikkan counter dan tampilkan di elemen `#click-count-badge`.
3. Gunakan event `.keydown()` pada document: jika pengguna menekan tombol *Enter* di input judul, picu klik pada tombol tambah anime secara otomatis.

---

Selamat belajar dan selamat mengoding menggunakan jQuery! Rasakan betapa ringkas dan mudahnya memanipulasi halaman web menggunakan library legendaris ini! 🚀
