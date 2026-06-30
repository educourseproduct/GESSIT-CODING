# Proyek Praktis: Koneksi MongoDB Atlas & Mongoose (Pertemuan 5 & 6)

Proyek ini bertujuan untuk mempersiapkan lingkungan proyek backend berbasis **Express.js** yang terhubung dengan aman ke **MongoDB Atlas** (cloud database) menggunakan **Mongoose ODM** dan file konfigurasi `.env`.

Setelah menyelesaikan proyek ini, siswa diharapkan mampu:

- Membuat akun dan cluster di MongoDB Atlas
- Menghubungkan aplikasi Node.js ke database cloud
- Menggunakan Mongoose sebagai ODM (Object Data Modeling)
- Mengelola variabel sensitif menggunakan file `.env`

**Tech Stack:** Node.js, Express.js, Mongoose, Dotenv, Nodemon

---

## 1. Persiapan Lingkungan

Sebelum memulai coding, kita perlu menyiapkan database cloud di **MongoDB Atlas**.

### Langkah 1 — Daftar Akun MongoDB Atlas

1. Buka situs [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Klik **"Try Free"** atau **"Start Free"**
3. Daftar menggunakan akun Google atau email
4. Setelah berhasil masuk, kamu akan diarahkan ke **Dashboard Atlas**

### Langkah 2 — Buat Cluster Baru

1. Di dashboard, klik **"Build a Database"** atau **"Create a Deployment"**
2. Pilih paket **M0 FREE (Shared)** — gratis dan cukup untuk belajar
3. Pilih **Cloud Provider**: AWS, Google Cloud, atau Azure (pilih yang terdekat, misal: `Singapore`)
4. Beri nama cluster (contoh: `Cluster0`), lalu klik **"Create Deployment"**
5. Tunggu beberapa menit hingga cluster selesai dibuat ✅

### Langkah 3 — Buat Database User

1. Di bagian **"Database Access"** pada sidebar, klik **"Add New Database User"**
2. Pilih metode autentikasi: **Password**
3. Masukkan:
   - **Username**: (contoh: `siswa_kelas11`)
   - **Password**: (contoh: `passwordKuat123`)
4. Pada bagian **Database User Privileges**, pilih **"Read and write to any database"**
5. Klik **"Add User"**

> [!IMPORTANT]
> Catat username dan password ini baik-baik! Kamu akan membutuhkannya untuk connection string.

### Langkah 4 — Atur Network Access (IP Whitelist)

1. Di sidebar, klik **"Network Access"**
2. Klik **"Add IP Address"**
3. Untuk keperluan belajar, klik **"Allow Access from Anywhere"** (`0.0.0.0/0`)
4. Klik **"Confirm"**

> [!WARNING]
> Pengaturan `0.0.0.0/0` hanya untuk keperluan **belajar**. Di lingkungan produksi, selalu batasi akses IP!

### Langkah 5 — Dapatkan Connection String

1. Kembali ke halaman **"Database"** (Deployments)
2. Klik tombol **"Connect"** pada cluster kamu
3. Pilih **"Drivers"** (Connect your application)
4. Pilih Driver: **Node.js**, Version: terbaru
5. Salin **connection string** yang muncul, contohnya:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database_name>?retryWrites=true&w=majority
```

6. Ganti `<username>`, `<password>`, dan `<database_name>` dengan data milikmu

---

## 2. Instalasi & Konfigurasi

### Langkah 1 — Inisialisasi Proyek

Buka terminal di folder proyek, lalu jalankan:

```bash
npm init -y
```

### Langkah 2 — Install Dependencies

```bash
npm install express mongoose mongodb dotenv
```

Install **Nodemon** sebagai dev dependency (untuk auto-restart server saat ada perubahan kode):

```bash
npm install --save-dev nodemon
```

### Langkah 3 — Konfigurasi `package.json`

Pastikan bagian `scripts` pada `package.json` terlihat seperti ini:

```json
{
  "name": "connectmongodb",
  "version": "1.0.0",
  "description": "Proyek koneksi MongoDB Atlas dengan Mongoose",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "dotenv": "^16.x.x",
    "express": "^4.x.x",
    "mongodb": "^6.x.x",
    "mongoose": "^8.x.x"
  },
  "devDependencies": {
    "nodemon": "^3.x.x"
  }
}
```

### Langkah 4 — Buat File `.env`

Buat file bernama `.env` di **root folder** proyek:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database_name>?retryWrites=true&w=majority
```

> [!CAUTION]
> Jangan pernah mengunggah file `.env` ke GitHub atau platform publik lainnya! Tambahkan `.env` ke file `.gitignore` agar tidak ikut ter-push.

**Apa itu Dotenv?**

`dotenv` adalah package yang memuat variabel dari file `.env` ke dalam `process.env`. Dengan cara ini, data sensitif seperti password database **tidak ditulis langsung** di dalam kode, melainkan disimpan terpisah di file `.env`.

```javascript
// Cara memuat dotenv (taruh di baris paling atas file utama)
require('dotenv').config();

// Sekarang kamu bisa akses variabel .env seperti ini:
console.log(process.env.PORT);      // Output: 3000
console.log(process.env.MONGO_URI); // Output: connection string kamu
```

---

## 3. Menjalankan Proyek

### Mode Development (dengan Nodemon)

```bash
npm run dev
```

Nodemon akan otomatis me-restart server setiap kali kamu menyimpan perubahan pada file.

### Mode Production

```bash
npm start
```

### Output yang Diharapkan di Terminal

Jika semua konfigurasi benar, terminal akan menampilkan:

```
✅ Berhasil terhubung ke MongoDB Atlas!
🚀 Server berjalan di http://localhost:3000
```

### Pengujian di Browser

Buka browser dan akses:

```
http://localhost:3000
```

Kamu akan melihat pesan sambutan (welcome message) dari server Express.js.

---

## 4. Struktur Folder Proyek

```
ConnectMongoDB/
│
├── config/
│   └── db.js              # Fungsi koneksi ke MongoDB Atlas
│
├── node_modules/           # Dependencies (otomatis dari npm install)
│
├── .env                    # Variabel lingkungan (PORT, MONGO_URI)
├── .gitignore              # Daftar file yang diabaikan Git
├── app.js                  # Entry point aplikasi Express
├── package.json            # Metadata & dependencies proyek
└── package-lock.json       # Lock file dependencies
```

| File/Folder       | Fungsi                                                  |
| ----------------- | ------------------------------------------------------- |
| `app.js`          | Inisialisasi Express, memanggil `connectDB`, route `GET /` |
| `config/db.js`    | Fungsi async untuk koneksi Mongoose ke MongoDB Atlas    |
| `.env`            | Menyimpan `PORT` dan `MONGO_URI` secara aman            |
| `package.json`    | Daftar dependencies dan scripts proyek                  |
| `.gitignore`      | Mencegah `.env` dan `node_modules/` ikut di-push ke Git |

---

## 5. Panduan Langkah Praktik Siswa

Ikuti langkah-langkah berikut secara berurutan untuk menyelesaikan proyek ini.

### 📋 Tugas A — Inisialisasi Proyek

1. Buat folder baru bernama `ConnectMongoDB`
2. Buka folder tersebut di **VS Code**
3. Buka terminal dan jalankan:

```bash
npm init -y
```

4. Install semua dependencies yang dibutuhkan:

```bash
npm install express mongoose mongodb dotenv
npm install --save-dev nodemon
```

5. Tambahkan script `dev` pada `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

---

### 📋 Tugas B — Daftar & Setup MongoDB Atlas

1. Daftar akun di [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Buat cluster **M0 Free**
3. Buat **Database User** dengan username dan password
4. Atur **Network Access** → Allow Access from Anywhere
5. Salin **Connection String** dari menu Connect → Drivers

> [!TIP]
> Screenshot setiap langkah sebagai dokumentasi untuk laporan praktikum!

---

### 📋 Tugas C — Konfigurasi File `.env`

1. Buat file `.env` di root folder proyek
2. Isi dengan format berikut (ganti placeholder dengan data milikmu):

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database_name>?retryWrites=true&w=majority
```

3. Buat file `.gitignore` dan tambahkan:

```
node_modules/
.env
```

---

### 📋 Tugas D — Tulis File `config/db.js`

1. Buat folder `config` di dalam root proyek
2. Buat file `db.js` di dalam folder `config`
3. Tulis kode berikut:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Berhasil terhubung ke MongoDB Atlas!`);
    console.log(`   Host: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Gagal terhubung ke MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

**Penjelasan kode:**

- `mongoose.connect()` — menghubungkan aplikasi ke MongoDB menggunakan URI dari `.env`
- `async/await` — menangani operasi asinkron (koneksi database butuh waktu)
- `try/catch` — menangkap error jika koneksi gagal
- `process.exit(1)` — menghentikan aplikasi jika koneksi gagal (kode `1` = error)

---

### 📋 Tugas E — Tulis File `app.js`

1. Buat file `app.js` di root folder proyek
2. Tulis kode berikut:

```javascript
// Muat variabel dari file .env
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Hubungkan ke MongoDB Atlas
connectDB();

// Middleware untuk parsing JSON
app.use(express.json());

// Route utama
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Selamat datang di API MongoDB Atlas! 🚀',
    info: 'Server berjalan dan terhubung ke database.'
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
```

**Penjelasan kode:**

- `require('dotenv').config()` — **wajib di baris pertama**, memuat semua variabel dari `.env`
- `connectDB()` — memanggil fungsi koneksi database dari `config/db.js`
- `app.get('/')` — membuat route GET yang mengembalikan pesan sambutan dalam format JSON
- `app.listen(PORT)` — memulai server di port yang ditentukan di `.env`

---

### 📋 Tugas F — Jalankan & Uji Proyek

1. Jalankan server dengan Nodemon:

```bash
npm run dev
```

2. Periksa terminal — pastikan muncul pesan:

```
✅ Berhasil terhubung ke MongoDB Atlas!
   Host: cluster0-shard-00-xx.xxxxx.mongodb.net
🚀 Server berjalan di http://localhost:3000
```

3. Buka browser dan akses `http://localhost:3000`
4. Pastikan muncul response JSON:

```json
{
  "status": "success",
  "message": "Selamat datang di API MongoDB Atlas! 🚀",
  "info": "Server berjalan dan terhubung ke database."
}
```

5. Coba matikan server (`Ctrl + C`), ubah pesan di `app.js`, simpan, dan lihat Nodemon otomatis restart! 🔄

> [!NOTE]
> Jika muncul error koneksi, periksa kembali: (1) Connection string di `.env` sudah benar, (2) Username & password database sudah sesuai, (3) IP Address sudah di-whitelist di Network Access.

---

## 6. Konsep Kunci yang Dipelajari

### 🌐 MongoDB Atlas

MongoDB Atlas adalah layanan **Database-as-a-Service (DBaaS)** dari MongoDB. Dengan Atlas, kita tidak perlu menginstall MongoDB di komputer lokal — database berjalan di **cloud** dan bisa diakses dari mana saja melalui internet.

**Keuntungan:**
- Gratis untuk tier M0 (cocok untuk belajar)
- Tidak perlu setup server database sendiri
- Tersedia fitur monitoring dan backup otomatis

---

### 🗃️ Mongoose ODM

**Mongoose** adalah library **Object Data Modeling (ODM)** untuk MongoDB dan Node.js. Mongoose menyediakan cara terstruktur untuk berinteraksi dengan MongoDB:

- **Schema** — mendefinisikan struktur dokumen (seperti "cetak biru" data)
- **Model** — kelas yang digunakan untuk membuat dan membaca dokumen
- **Validasi** — memastikan data sesuai aturan sebelum disimpan
- **Query** — menyediakan method seperti `.find()`, `.create()`, `.updateOne()`, dll.

```javascript
// Contoh sederhana Mongoose Schema & Model (akan dipelajari lebih lanjut)
const userSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  email: { type: String, required: true },
  umur: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);
```

---

### 🔐 Dotenv (Environment Variables)

`dotenv` memisahkan **konfigurasi sensitif** dari kode sumber:

| Tanpa `.env` ❌ | Dengan `.env` ✅ |
|---|---|
| Password ditulis langsung di kode | Password disimpan di file `.env` terpisah |
| Jika kode di-push ke GitHub, password ikut terekspos | File `.env` di-ignore oleh Git |
| Sulit mengganti konfigurasi antar lingkungan | Tinggal ganti isi file `.env` |

---

### ⏳ Async/Await & Try-Catch

Koneksi ke database adalah operasi **asinkron** — membutuhkan waktu dan tidak instan. JavaScript menggunakan `async/await` untuk menangani ini:

```javascript
// ✅ Cara modern (async/await + try-catch)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Terhubung!');
  } catch (error) {
    console.error('Gagal:', error.message);
  }
};
```

- `async` — menandai fungsi sebagai asinkron
- `await` — "tunggu" sampai operasi selesai baru lanjut ke baris berikutnya
- `try` — jalankan kode yang mungkin gagal
- `catch` — tangkap dan tangani error jika terjadi

---

### 📁 Modularisasi (Folder `config`)

Memisahkan logika koneksi database ke file `config/db.js` adalah praktik **modularisasi**:

```
❌ Semua kode di satu file (app.js) → sulit dibaca & di-maintain
✅ Kode dipisah per fungsi (config/, routes/, models/) → rapi & terstruktur
```

**Manfaat modularisasi:**
- Kode lebih **bersih** dan mudah dibaca
- Setiap file punya **satu tanggung jawab** (Single Responsibility)
- Mudah **di-debug** karena error bisa dilacak per file
- Siap untuk **dikembangkan** (scalable) ke proyek yang lebih besar

---

> [!TIP]
> Proyek ini adalah fondasi untuk pertemuan selanjutnya! Pastikan koneksi database berhasil sebelum melanjutkan ke materi CRUD (Create, Read, Update, Delete). 💪

---

*📅 Pertemuan 5 & 6 — Kelas XI Ganjil*
