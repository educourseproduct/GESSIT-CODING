# Praktikum Iterasi Array: Riwayat Transaksi Interaktif (Sesi 13)

Selamat datang di praktikum **Dasar Frontend Web Development (Sesi 13)**. Pada praktikum ini, kamu akan membangun sebuah modul pembantu kasir interaktif bernama **"Riwayat Transaksi Interaktif"** menggunakan JavaScript.

Modul ini dirancang untuk mempraktikkan materi pengolahan data array menggunakan metode iterasi modern yang diajarkan pada Sesi 13:
1. **`forEach()` (Render Transaksi):** Menelusuri seluruh data transaksi barang belanjaan di dalam array dan merendernya secara dinamis ke dalam baris tabel HTML.
2. **`find()` (Pencarian Detail):** Mencari elemen pertama yang cocok dengan keyword pencarian nama barang dan menampilkan detail harga beserta kuantitasnya.
3. **`includes()` (Verifikasi Voucher):** Memeriksa apakah sebuah kode voucher diskon yang dimasukkan ada di dalam daftar voucher aktif toko.
4. **`some()` (Deteksi Barang Premium):** Memeriksa apakah keranjang belanja memiliki minimal satu barang premium (harga di atas Rp 100.000) untuk memicu bonus hadiah gratis.
5. **`every()` (Validasi Jumlah):** Memastikan seluruh barang belanjaan di keranjang memiliki kuantitas minimal 1 (tidak ada barang kosong) sebelum checkout disetujui.

---

## 🎯 Tujuan Pembelajaran
1. Memahami konsep iterasi array sebagai tindakan menelusuri elemen satu per satu.
2. Menggunakan `.forEach()` untuk merender data dari array of objects secara dinamis ke dokumen HTML.
3. Menggunakan `.find()` untuk melakukan pencarian data objek spesifik di dalam array berdasarkan kondisi pencarian.
4. Menggunakan `.includes()` untuk melakukan verifikasi keberadaan nilai string/number sederhana di dalam array.
5. Menggunakan `.some()` untuk memeriksa kondisi kelayakan parsial (minimal ada 1 elemen yang cocok) dalam array.
6. Menggunakan `.every()` untuk melakukan pemeriksaan kondisi mutlak (seluruh elemen wajib cocok) dalam array.

---

## 🚀 Petunjuk Pengerjaan

Buka file `index.html` menggunakan Visual Studio Code dan jalankan di browser perambanmu. Selesaikan 5 Misi utama berikut pada tag `<script>` yang tersedia di bawah halaman:

### Misi 1: Merender Tabel Belanjaan (`forEach`)
Selesaikan fungsi `renderTransaksi()`. Fungsi ini bertujuan untuk menuliskan baris tabel secara dinamis ke elemen `#transaction-rows`:
1. Kosongkan isi elemen `#transaction-rows` terlebih dahulu.
2. Gunakan metode `.forEach()` pada array data belanjaan bernama `keranjangBelanja`.
3. Di dalam callback `forEach`, susun string baris HTML (`<tr>`) yang berisi:
   - Nama barang (`item.nama`)
   - Harga barang (`item.harga`) formatted atau langsung angka
   - Kuantitas barang (`item.kuantitas`)
4. Tambahkan baris HTML tersebut ke dalam elemen `#transaction-rows`.

---

### Misi 2: Pencarian Detail Barang (`find`)
Selesaikan logika pencarian barang di dalam fungsi yang terhubung ke tombol **"Cari Barang"** (`#btn-search`):
1. Ambil nilai kata kunci dari input pencarian `#search-input` (bersihkan spasi dengan `.trim()`).
2. Gunakan metode `.find()` pada array `keranjangBelanja` untuk mencari barang yang properti namanya cocok dengan kata kunci secara case-insensitive.
   * *Kunci:* `item.nama.toLowerCase() === keyword.toLowerCase()`
3. Jika barang ditemukan, tampilkan detail harga dan kuantitasnya di elemen `#search-result`.
4. Jika tidak ditemukan, tampilkan pesan: *"Barang tidak ditemukan!"*.

---

### Misi 3: Cek Masa Aktif Voucher (`includes`)
Selesaikan logika cek kupon diskon di dalam fungsi yang terhubung ke tombol **"Verifikasi Kupon"** (`#btn-verify-coupon`):
1. Ambil input teks dari elemen `#coupon-input`.
2. Toko memiliki daftar kupon aktif berupa array: `const voucherAktif = ["PROMO10", "HEMAT20", "BUKUKREATIF10", "MERDEKA50"];`
3. Gunakan metode `.includes()` pada array `voucherAktif` untuk memeriksa apakah kupon yang diketik pengguna terdaftar.
4. Jika terdaftar (mengembalikan `true`), tampilkan pesan sukses berwarna hijau: *"Kupon aktif! Diskon berhasil diterapkan."*.
5. Jika tidak terdaftar (mengembalikan `false`), tampilkan pesan gagal berwarna merah: *"Kupon tidak valid atau sudah kedaluwarsa!"*.

---

### Misi 4: Pemicu Bonus Hadiah Gratis (`some`)
Selesaikan logika deteksi promo di dalam fungsi `cekBonusHadiah()` yang dipanggil setiap kali tabel dirender:
1. Gunakan metode `.some()` pada array `keranjangBelanja` untuk mendeteksi apakah ada barang yang harganya di atas `100000` (Rp 100.000).
2. Jika ada (mengembalikan `true`), munculkan notifikasi visual di elemen `#bonus-notification` yang mengabarkan bahwa pembeli berhak mendapatkan **"Bonus Buku Catatan Gratis!"**.
3. Jika tidak ada, sembunyikan notifikasi tersebut atau tampilkan pesan bahwa pembeli belum memenuhi syarat bonus.

---

### Misi 5: Validasi Kelayakan Checkout (`every`)
Selesaikan logika tombol **"Checkout Belanjaan"** (`#btn-checkout`):
1. Gunakan metode `.every()` pada array `keranjangBelanja` untuk memverifikasi apakah semua barang di keranjang belanja memiliki kuantitas lebih besar dari 0 (`item.kuantitas > 0`).
2. Jika seluruhnya valid (mengembalikan `true`), tampilkan pop-up dialog `window.alert("Transaksi Sukses! Belanjaan siap diproses.")`.
3. Jika ada satu atau lebih barang yang kuantitasnya 0 atau negatif (mengembalikan `false`), tampilkan peringatan: `window.alert("Transaksi Gagal! Pastikan semua kuantitas barang belanjaan minimal 1.")`.

---

Selamat belajar dan selamat mengoding! Manfaatkan tools ini untuk memperdalam pemahamanmu tentang metode iterasi array sebelum ujian tengah semester! 🚀
