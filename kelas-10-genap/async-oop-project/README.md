# Praktikum Async, OOP, & Project: Anime Watchlist & Sync Dashboard (Sesi 16)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 16)**. Pada praktikum ini, kamu akan membangun sebuah aplikasi mini-project bernama **"Anime Watchlist Tracker & Server Sync"**. Proyek ini bertujuan untuk menggabungkan dua pilar utama JavaScript tingkat lanjut: **Object-Oriented Programming (OOP)** untuk pemodelan data dan **Asynchronous Programming** untuk interaksi data dengan server simulasi.

Melalui proyek ini, kamu akan mempraktikkan konsep-konsep krusial berikut:
1. **`Strict Mode` (`"use strict";`)**: Mengaktifkan penulisan kode JavaScript yang lebih disiplin dan aman.
2. **`Classes & Constructors`**: Membuat cetak biru objek `AnimeItem` dengan properti dan method ter-enkapsulasi.
3. **`Object Methods & keyword 'this'`**: Menambahkan fungsi aksi di dalam objek yang memodifikasi nilai properti miliknya sendiri.
4. **`Deleting Properties` (`delete`)**: Menghapus pasangan properti opsional/sementara sebelum dikirim ke server.
5. **`Displaying Objects` (`JSON.stringify`)**: Mengubah objek JavaScript menjadi representasi string JSON untuk kebutuhan backup data lokal.
6. **`Callbacks`**: Menggunakan fungsi callback untuk notifikasi penyelesaian persiapan koneksi asinkron.
7. **`Promises` (Resolve & Reject)**: Membuat simulasi proses request server (producing code) yang dapat sukses (resolve) maupun gagal (reject).
8. **`Async/Await`**: Menyusun pemanggilan fungsi asinkron secara sekuensial (consuming code) menggunakan keyword `async` dan `await` untuk mengendalikan loading bar visual secara dinamis.

---

## 🎯 Tujuan Pembelajaran
1. Memahami cara mengaktifkan dan kegunaan `'use strict';` di JavaScript.
2. Mendefinisikan **Class** dan menggunakan **Constructor** serta **Method** dengan keyword **`this`**.
3. Menambahkan dan menghapus properti objek menggunakan keyword **`delete`**.
4. Mengubah objek menjadi string JSON menggunakan **`JSON.stringify()`** untuk keperluan penyimpanan data.
5. Memahami perbedaan alur eksekusi **Synchronous** (blocking) dan **Asynchronous** (non-blocking).
6. Menggunakan **Callback** untuk menangani alur penyelesaian suatu tugas.
7. Memproduksi dan mengonsumsi **Promise** (`resolve`, `reject`, `.then()`, `.catch()`).
8. Menyederhanakan penulisan kode asinkron menggunakan fungsi **`async`** dan keyword **`await`**.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 5 Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Inisialisasi Class AnimeItem & Strict Mode (OOP)
1. Tulis keyword `"use strict";` pada baris pertama di dalam tag `<script>` untuk mengaktifkan strict mode.
2. Selesaikan definisi class **`AnimeItem`** yang memiliki constructor dengan parameter: `id`, `judul`, `genre`, `episode`, dan status default `completed = false`.

---

### Misi 2: Pengolahan Objek & Hapus Properti (`this` & `delete`)
1. Di dalam class `AnimeItem`, buat sebuah method bernama **`toggleCompleted()`** yang berfungsi untuk membalikkan nilai status boolean `this.completed` (menggunakan keyword `this`).
2. Selesaikan logika tombol hapus catatan (`#btn-delete-note`): ketika diklik, gunakan keyword **`delete`** untuk menghapus properti `catatan` dari objek anime terpilih secara permanen.
   * *Petunjuk:* `delete animeObj.catatan;`

---

### Misi 3: Backup Database ke JSON String (`JSON.stringify`)
Selesaikan fungsi **`backupWatchlist()`**:
1. Ambil seluruh data dari array `watchlist`.
2. Ubah array data objek tersebut menjadi format string JSON menggunakan **`JSON.stringify(watchlist)`**.
3. Tampilkan string JSON tersebut ke dalam elemen text area `#backup-output` agar dapat disalin oleh pengguna sebagai cadangan.

---

### Misi 4: Simulasi Koneksi Server (Callback & Promise)
1. Selesaikan fungsi **`hubungkanServer(callback)`**: fungsi ini mensimulasikan jabat tangan (*handshake*) koneksi dengan server selama 2 detik menggunakan `setTimeout()`, kemudian memanggil fungsi `callback` yang diteruskan.
2. Selesaikan fungsi **`simulasiKirimKeServer(animeObj)`**: fungsi ini mengembalikan sebuah **`new Promise((resolve, reject) => { ... })`**.
   - Jika judul anime kosong, panggil `reject("Judul anime tidak valid!")`.
   - Jika ada judul, gunakan `setTimeout()` selama 1.5 detik lalu panggil `resolve("Data '" + animeObj.judul + "' berhasil diunggah!")`.

---

### Misi 5: Sinkronisasi Asinkron Dashboard (`async` / `await`)
Selesaikan event handler klik untuk tombol **"Sinkronisasi Server"** (`#btn-sync-server`):
1. Buat event handler klik tersebut bertindak sebagai fungsi asinkron (**`async function()`**).
2. Di dalamnya, panggil `hubungkanServer()` secara asinkron menggunakan Promise pembungkus, lalu tunggu hingga selesai dengan **`await`**.
3. Lakukan perulangan untuk mengunggah setiap elemen anime di dalam array `watchlist` ke server dengan memanggil `simulasiKirimKeServer(anime)` dan menunggunya selesai menggunakan **`await`**.
4. Selama proses berjalan, kendalikan persentase animasi loading bar `#sync-progress` dan tampilkan log log aktivitas di `#sync-log-container`.
5. Tampilkan status sukses akhir di antarmuka pengguna setelah seluruh proses selesai secara berurutan.

---

Selamat belajar dan selamat mengoding! Manfaatkan praktikum ini untuk memadukan cara berpikir pemrograman berorientasi objek dan asinkron untuk membangun frontend web yang tangguh! 🚀
