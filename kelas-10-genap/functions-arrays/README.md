# Praktikum Fungsi, Metode, & Array (Sesi 12)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 12)**. Pada praktikum ini, kamu akan membangun sebuah aplikasi dashboard praktikum bernama **"Functions, Methods, & Array Toolkit"** menggunakan JavaScript.

Dashboard ini dirancang untuk mempraktikkan materi penting pemrograman JavaScript yang diajarkan pada Sesi 12:
1. **Fungsi (Functions & Arrow Functions):** Membuat deklarasi fungsi dan pemanggilan arrow function untuk melakukan kalkulasi rata-rata (Challenge 1).
2. **Metode & Context Binding (this & .call()):** Membuat objek, memahami properti metode, dan memanggil fungsi introduksi karakter menggunakan keyword `this` dan memanipulasi konteksnya menggunakan metode `.call()` (Challenge 2).
3. **Pembandingan Logika (Conditional Compare):** Membuat fungsi pembanding angka terbesar dan menampilkannya dengan dialog pop-up browser `window.alert()` (Challenge 3).
4. **Manipulasi Array (Array Methods):** Memanipulasi data array secara interaktif menggunakan method dasar array (`push()`, `pop()`, `shift()`, `unshift()`, dan properti `.length`) sebagai persiapan menghadapi UTS (Kasir Pintar).

---

## 🎯 Tujuan Pembelajaran
1. Memahami perbedaan cara penulisan fungsi deklarasi (*function declaration*), ekspresi fungsi (*function expression*), dan fungsi panah (*arrow function*).
2. Menggunakan arrow function untuk mereduksi kelebihan penulisan kode.
3. Memahami penggunaan kata kunci `this` dalam objek untuk mengakses data internal objek tersebut.
4. Memahami fungsi metode `.call()` untuk mengubah penunjuk konteks `this` ke objek lain secara dinamis.
5. Mendeklarasikan struktur data array untuk menyimpan sekumpulan informasi.
6. Mengoperasikan metode mutator array dasar (`push`, `pop`, `shift`, `unshift`) untuk mengolah data daftar.
7. Menggunakan properti `.length` untuk menghitung kuantitas data di dalam array.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 4 Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Kalkulator Rata-Rata (Challenge 1)
Siswa diminta membuat arrow function untuk menghitung rata-rata dari 3 input angka.
1. Hubungkan tombol **"Hitung Rata-Rata"** untuk memicu kalkulasi.
2. Ambil nilai angka dari input `#num-a`, `#num-b`, dan `#num-c`.
3. Buat arrow function bernama `hitungRataRata` yang menerima tiga parameter dan mengembalikan hasil pembagian jumlah ketiganya dengan 3:
   * Rumus: `const hitungRataRata = (a, b, c) => (a + b + c) / 3`
4. Panggil arrow function tersebut dengan argumen angka yang diinput siswa, lalu tampilkan hasilnya di elemen `#avg-result`.

---

### Misi 2: Bikini Bottom Role Changer (Challenge 2)
Siswa diminta mempraktikkan konsep objek, kata kunci `this`, dan metode `.call()` untuk menukar peran tiga karakter Bikini Bottom:
- Objek awal karakter memiliki nama dan peran awal:
  - **Spongebob**: peran awal = *Koki*
  - **Squidward**: peran awal = *Kasir*
  - **Mr. Krab**: peran awal = *Boss*
- Misi kamu adalah mengubah peran mereka menjadi peran baru:
  - **Spongebob** menjadi *Boss*
  - **Squidward** menjadi *Koki*
  - **Mr. Krab** menjadi *Kasir*
- Langkah pengerjaan:
  1. Buat satu fungsi eksternal bernama `kenalkanPeran()` yang menggunakan `this` untuk mengembalikan string: `this.name + " sekarang bertugas sebagai " + this.role`.
  2. Buat tiga objek baru dengan peran yang sudah ditukar (misalnya `const char1 = { name: "Spongebob", role: "Boss" }`, dst.).
  3. Ketika tombol **"Tukar Peran"** diklik, gunakan metode `.call()` untuk memanggil fungsi `kenalkanPeran` dengan parameter masing-masing objek karakter baru:
     * Contoh: `kenalkanPeran.call(char1)`
  4. Tampilkan hasil introduksi peran baru tersebut di elemen `#role-result` dan cetak juga di console browser (`console.log`).

---

### Misi 3: Cari Angka Terbesar (Challenge 3)
Siswa diminta membuat fungsi pembanding untuk menemukan angka terbesar dari 3 input angka.
1. Ambil nilai dari input `#compare-a`, `#compare-b`, dan `#compare-c`.
2. Buat fungsi pembanding menggunakan pengkondisian bersyarat `if-else` untuk menemukan angka mana yang nilainya paling besar di antara ketiganya.
3. Ketika tombol **"Bandingkan Angka"** diklik, panggil fungsi tersebut dan tampilkan jawabannya di dalam pop-up dialog **`window.alert()`** (contoh: *"Angka terbesar adalah: 25"*).

---

### Misi 4: Playground Metode Array
Siswa diminta menghubungkan tombol-tombol interaktif untuk memanipulasi daftar belanja buku yang disimpan di dalam array `daftarBuku`:
1. Inisialisasikan variabel array bernama `daftarBuku` dengan nilai awal `["HTML & CSS", "JavaScript Intro"]`.
2. Selesaikan fungsi `renderArray()` untuk menampilkan seluruh isi array ke elemen daftar `#array-list` dan menampilkan properti panjang array (`daftarBuku.length`) ke elemen `#array-length`.
3. Selesaikan fungsi-fungsi berikut untuk menanggapi klik tombol:
   - **Push (btn-push):** Ambil nilai teks dari input `#array-input`. Jika tidak kosong, tambahkan ke bagian akhir array menggunakan `.push(item)`, bersihkan input teks, lalu panggil `renderArray()`.
   - **Unshift (btn-unshift):** Ambil nilai teks dari input `#array-input`. Jika tidak kosong, tambahkan ke bagian awal array menggunakan `.unshift(item)`, bersihkan input, lalu panggil `renderArray()`.
   - **Pop (btn-pop):** Hapus item terakhir di array menggunakan `.pop()`, lalu panggil `renderArray()`.
   - **Shift (btn-shift):** Hapus item pertama di array menggunakan `.shift()`, lalu panggil `renderArray()`.

---

Selamat belajar dan selamat mengoding! Manfaatkan tools ini untuk memperdalam pemahamanmu tentang fungsi dan array sebelum ujian tengah semester! 🚀
