# Praktikum JavaScript Dasar: My Bookstore Dashboard

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 10)**. Pada praktikum ini, kamu akan membangun halaman interaktif sederhana bernama **"My Bookstore Dashboard"**. Melalui proyek ini, kamu akan mempraktikkan dasar-dasar JavaScript, manipulasi DOM, dan memahami perilaku variabel (`var`, `let`, `const`).

---

## 🎯 Tujuan Pembelajaran
1. Menghubungkan skrip JavaScript ke halaman HTML (Internal & External).
2. Memilih elemen HTML berdasarkan ID (`document.getElementById`).
3. Memodifikasi konten HTML secara dinamis (`.innerHTML`).
4. Memodifikasi atribut elemen HTML (`.src`).
5. Memodifikasi gaya visual elemen HTML (`.style.color`).
6. Mengatur visibilitas elemen HTML (`.style.display`: `none` / `block`).
7. Menerapkan operasi perhitungan matematika sederhana lewat fungsi.
8. Memahami perbedaan karakteristik deklarasi variabel `var`, `let`, dan `const`.
9. Menggunakan media keluaran JS (`console.log()`, `window.alert()`).

---

## 📁 Struktur Proyek
Proyek ini terdiri dari berkas-berkas berikut:
- `index.html` : Halaman web utama toko buku yang berisi layout UI (menggunakan Bootstrap 5) dan instruksi tugas di dalamnya. Kamu akan menuliskan kode JavaScript-mu di sini.
- `index-solution.html` : *(Referensi Mentor)* Berisi solusi lengkap dari seluruh misi untuk membantu pencarian kesalahan jika terdapat kendala.
- `README.md` : Panduan praktikum ini.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 5 Misi Manipulasi DOM dan 4 Eksperimen Variabel berikut:

### Bagian 1: Manipulasi DOM (Interaksi Halaman)

*   **[MISI 1] Mengubah Konten HTML (Change HTML Content):**
    Siswa diminta membuat fungsi atau menuliskan perintah inline untuk mengubah judul toko buku (`#store-title`) dari teks awal *"EduCourse Bookstore"* menjadi judul buatanmu sendiri secara instan saat tombol **"Ubah Nama Toko"** diklik.
    *   *Kunci:* Gunakan `.innerHTML`.

*   **[MISI 2] Mengubah Atribut HTML (Change HTML Attribute):**
    Siswa diminta mengontrol gambar sampul buku terpopuler (`#book-cover`). Terdapat dua tombol: **"Berwarna (Color)"** dan **"Hitam Putih (Black & White)"**. Jika tombol "Berwarna" diklik, ubah gambar ke gambar berwarna (tautan warna). Jika "Hitam Putih" diklik, ubah kembali ke tautan gambar hitam-putih.
    *   *Kunci:* Mengubah properti `.src` elemen gambar.

*   **[MISI 3] Mengubah Style HTML (Change HTML Style):**
    Siswa diminta memanipulasi gaya visual pengumuman kupon (`#promo-text`). Terdapat dua tombol pengontrol warna. Siswa harus membuat teks berubah menjadi warna merah saat tombol **"Teks Merah"** diklik, dan berubah menjadi warna biru saat tombol **"Teks Biru"** diklik.
    *   *Kunci:* Mengubah properti `.style.color`.

*   **[MISI 4] Menyembunyikan dan Menampilkan Elemen (Showing & Hiding Element):**
    Siswa diminta mengelola kupon diskon tambahan (`#promo-coupon`). Tombol **"Sembunyikan Kupon"** harus membuat kupon tersebut menghilang dari layar, dan tombol **"Tampilkan Kupon"** harus membuatnya muncul kembali.
    *   *Kunci:* Mengubah properti `.style.display` menjadi `'none'` atau `'block'`.

*   **[MISI 5] Logika Perhitungan Matematika (Applying Computation):**
    Siswa diminta membuat kalkulator kasir buku sederhana. Selesaikan fungsi `calculate()` di dalam tag `<script>`. Fungsi ini harus:
    1. Mengambil nilai kuantitas beli dari input angka (`#quantity`).
    2. Mendeklarasikan konstanta harga buku senilai `50000` (Rp 50.000).
    3. Mengalikan kuantitas dengan harga buku untuk mendapatkan total harga.
    4. Memasukkan hasil perhitungan tersebut ke dalam input total harga (`#total-price`).
    *   *Kunci:* Fungsi harus dipicu secara otomatis saat kuantitas diketik (`oninput="calculate()"`).

---

### Bagian 2: Eksperimen Variabel & Console (Logika Pemrograman)

Buka Developer Console di browsermu dengan menekan tombol **Ctrl + Shift + J** (Chrome/Edge/Opera) atau **Cmd + Option + C** (Safari). Masukkan kode berikut ke dalam tag `<script>` internal atau langsung di console browser untuk memahami konsep variabel:

*   **[EKSPERIMEN 1] Variabel `var` (Re-declaration & Re-assignment):**
    Deklarasikan variabel `var nama = "Rendra"`, lalu deklarasikan ulang di bawahnya dengan `var nama = "Anwar"`. Amati apakah terjadi eror atau nilai variabel berhasil ditimpa. Tampilkan di konsol menggunakan `console.log(nama)`.
*   **[EKSPERIMEN 2] Variabel `let` (No Re-declaration):**
    Deklarasikan variabel `let buah = "Durian"`, lalu coba deklarasikan ulang dengan `let buah = "Apel"`. Amati pesan eror merah (`SyntaxError`) yang muncul di console browser. Catat mengapa hal itu terjadi!
*   **[EKSPERIMEN 3] Variabel `const` (Immutability):**
    Deklarasikan konstanta `const tanggalLahir = "07-07-2008"`. Coba ubah nilainya secara langsung dengan menulis `tanggalLahir = "10-10-2010"`. Amati pesan eror merah (`TypeError: Assignment to constant variable.`) yang muncul di console.
*   **[EKSPERIMEN 4] Penggunaan display `window.alert()` & `console.log()`:**
    Lakukan logging nilai variabel ke konsol browser untuk keperluan pelacakan bug (*debugging*), dan pemicuan pop-up peringatan kepada user menggunakan dialog bawaan browser.

---

Selamat belajar dan selamat mengoding! Ingat, melacak eror di console browser adalah bagian dari petualangan seru seorang programmer! 🚀
