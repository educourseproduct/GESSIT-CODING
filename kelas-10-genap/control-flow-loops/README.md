# Praktikum Percabangan, Penanganan Eror, & Perulangan (Sesi 11)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 11)**. Pada praktikum ini, kamu akan membangun sebuah aplikasi dashboard interaktif bernama **"Smart Logic & Pattern Dashboard"** menggunakan JavaScript.

Dashboard ini dirancang untuk mempermudah kamu memahami tiga konsep penting dalam pemrograman JavaScript:
1. **Control Flow (Percabangan):** Mengklasifikasikan nilai menggunakan struktur `switch-case` (Grade Calculator).
2. **Exception Handling (Penanganan Eror):** Mengamankan perhitungan matematika menggunakan blok `try-catch-finally` dan melempar eror buatan (`throw new Error()`) jika input tidak valid.
3. **Looping (Perulangan Bertingkat):** Membuat algoritma perulangan menggunakan nested loop untuk mencetak pola geometris bintang di konsol dan halaman web.

---

## 🎯 Tujuan Pembelajaran
1. Memahami alur logika bersyarat dengan menggunakan struktur kontrol `switch-case` di JavaScript.
2. Memahami cara melakukan pencocokan kondisi dinamis menggunakan `switch (true)`.
3. Memahami pentingnya sabuk pengaman program menggunakan penanganan kesalahan `try`, `catch`, dan `finally`.
4. Menggunakan perintah `throw new Error()` dan fungsi `isNaN()` untuk validasi data input numerik.
5. Memahami perbedaan jenis-jenis perulangan (`while`, `do-while`, `for`, `for-in`, `for-of`).
6. Membuat algoritma perulangan bertingkat (*nested loop*) untuk mencetak pola segitiga siku-siku bintang.
7. Menerapkan umpan balik visual langsung (*Immediate Visual Feedback*) pada halaman HTML.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 3 Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Kalkulator Grade Nilai (Switch-Case)

Siswa diminta menyelesaikan fungsi `cekGrade()` yang dipicu saat tombol **"Cek Grade"** diklik.
1. Ambil nilai input angka dari elemen `#score-input`.
2. Ubah nilai input menjadi integer menggunakan `parseInt()`.
3. Gunakan struktur `switch (true)` untuk mengevaluasi rentang nilai:
   - Nilai 90 s.d 100: **Grade A** (Lulus Sangat Baik)
   - Nilai 80 s.d 89: **Grade B** (Lulus Baik)
   - Nilai 70 s.d 79: **Grade C** (Lulus Cukup)
   - Nilai 60 s.d 69: **Grade D** (Lulus Kurang)
   - Nilai 0 s.d 59: **Grade E** (Tidak Lulus, Perlu Remidi)
   - Jika nilai kurang dari 0 atau lebih dari 100, tampilkan pesan eror: *"Nilai harus di antara 0 - 100!"*.
   - Jika input bukan angka (NaN), tampilkan pesan eror: *"Masukkan angka yang valid!"*.
4. Tampilkan hasil Grade dan Predikatnya di elemen output `#grade-result`.

---

### Misi 2: Kalkulator Jumlah Aman (Try-Catch-Finally)

Siswa diminta menyelesaikan fungsi `hitungJumlah()` yang dipicu saat tombol **"Hitung Jumlah"** diklik.
1. Ambil nilai input dari elemen `#num1` dan `#num2`.
2. Setiap kali fungsi diaktifkan, kosongkan terlebih dahulu teks log kesalahan di elemen `#error-log`.
3. Di dalam blok `try`:
   - Ubah kedua input menjadi tipe float menggunakan `parseFloat()`.
   - Periksa apakah salah satu atau kedua input menghasilkan `NaN` menggunakan fungsi `isNaN()`.
   - Jika ya, lempar eror kustom: `throw new Error("Kedua input harus berupa angka yang valid!")`.
   - Jika input valid, lakukan penjumlahan dan tampilkan hasilnya di elemen `#calc-result`.
4. Di dalam blok `catch (error)`:
   - Ambil properti pesan kesalahan (`error.message`) dan tampilkan secara visual di dalam elemen `#error-log` (misalnya menggunakan alert merah Bootstrap).
   - Setel elemen hasil `#calc-result` menjadi `Rp 0` atau `0`.
5. Di dalam blok `finally`:
   - Tampilkan pesan di console browser (`console.log("Kalkulasi penjumlahan selesai dijalankan.")`) atau setel status pemrosesan selesai di halaman.

---

### Misi 3: Generator Pola Segitiga Bintang (Nested Looping)

Siswa diminta menyelesaikan fungsi `generatePattern()` yang dipicu saat tombol **"Generate Pola"** diklik.
1. Ambil nilai kuantitas baris dari input `#row-count`. Jika kosong, setel default ke `5` baris.
2. Buat algoritma nested loop (perulangan di dalam perulangan) menggunakan `for` untuk menyusun string bintang.
   - Loop pertama (luar): Mengontrol baris dari `1` s.d `N` (jumlah baris).
   - Loop kedua (dalam): Mengontrol jumlah bintang yang dicetak pada baris tersebut (baris ke-1 mencetak 1 bintang, baris ke-2 mencetak 2 bintang, dst.).
3. Cetak pola segitiga siku-siku bintang tersebut ke **Console Browser** menggunakan `console.log()`.
4. Render juga pola bintang tersebut secara visual ke dalam elemen halaman `#pattern-output` (menggunakan tag `<pre>` untuk menjaga kerapian spasi dan baris baru `\n`).

---

Selamat mengoding! Pastikan untuk selalu membuka **Developer Console (Ctrl+Shift+J)** di browsermu untuk melihat pesan kesalahan dan keluaran pola bintang! 🚀
