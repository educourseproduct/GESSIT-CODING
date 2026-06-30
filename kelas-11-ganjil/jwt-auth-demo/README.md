# Proyek Praktis: Secure Auth System dengan JWT (Pertemuan 10 & 11)

Proyek ini membangun sistem **pendaftaran (Register)**, **login**, dan **proteksi halaman profil** menggunakan **JSON Web Token (JWT)**. Sistem ini mencakup backend REST API dan antarmuka frontend sederhana yang terintegrasi.

---

## 1. Persiapan & Instalasi

1.  Pastikan **Node.js** sudah terinstal di komputer Anda.
2.  Pastikan Anda sudah memiliki akun **MongoDB Atlas** dengan cluster aktif.
3.  Buka terminal di folder `jwt-auth-demo/`, lalu jalankan:
    ```bash
    npm install
    ```
4.  Buat file **`.env`** di root folder proyek dengan isi berikut:
    ```
    PORT=5050
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database_name>
    JWT_SECRET=kunci_rahasia_jwt_anda_di_sini
    JWT_EXPIRES_IN=1h
    ```

    > **Penjelasan variabel `.env`:**
    > - `PORT` — Port server Express (default: 5050).
    > - `MONGO_URI` — Connection string MongoDB Atlas Anda.
    > - `JWT_SECRET` — Kunci rahasia untuk menandatangani (sign) token JWT. Gunakan string acak yang panjang dan sulit ditebak.
    > - `JWT_EXPIRES_IN` — Masa berlaku token (contoh: `1h` = 1 jam, `7d` = 7 hari).

---

## 2. Menjalankan Proyek

Jalankan server menggunakan **nodemon** (mode pengembangan):
```bash
npm run dev
```

Atau menggunakan **node** biasa:
```bash
npm start
```

**Output yang diharapkan di terminal:**
```
MongoDB connected
Server running on port 5050
```

Buka browser dan akses: **http://localhost:5050**

---

## 3. Struktur Folder Proyek

```text
jwt-auth-demo/
├── config/
│   └── db.js               # Logika koneksi mongoose.connect()
├── middleware/
│   └── authMiddleware.js    # Memeriksa token di header Authorization: Bearer <token>
├── models/
│   └── User.js              # Schema User dengan enkripsi bcrypt sebelum menyimpan
├── public/
│   ├── index.html           # Halaman Register & Login (inline CSS dark theme)
│   ├── profile.html         # Halaman profil terproteksi JWT (inline CSS & JS)
│   └── script.js            # Frontend JS (menangani localStorage & fetch requests)
├── routes/
│   └── auth.js              # Route /register, /login, /profile, /logout
├── .env                     # Kredensial sensitif (PORT, MONGO_URI, JWT_SECRET)
├── index.js                 # Express app server (entry point)
└── package.json
```

---

## 4. Alur Kerja Aplikasi

Berikut adalah alur lengkap sistem autentikasi JWT dalam proyek ini:

### A. Proses Register (Pendaftaran)
1. User mengisi form register di `index.html` (username & password).
2. Frontend (`script.js`) mengirim `POST /api/register` dengan body JSON.
3. Server menerima data → Mongoose Model `User.create()` dipanggil.
4. **Sebelum disimpan**, middleware `pre("save")` di Schema User otomatis meng-hash password menggunakan `bcryptjs` (salt rounds: 10).
5. Data user tersimpan di MongoDB dengan password yang sudah terenkripsi.

### B. Proses Login
1. User mengisi form login di `index.html` (username & password).
2. Frontend mengirim `POST /api/login` dengan body JSON.
3. Server mencari user berdasarkan username → membandingkan password dengan `bcrypt.compare()`.
4. Jika cocok, server membuat **token JWT** menggunakan `jwt.sign()` dengan payload `{ id, username }` dan masa berlaku 1 jam.
5. Token dikirim sebagai **JSON response** dan juga disimpan sebagai **httpOnly cookie**.
6. **Frontend menyimpan token ke `localStorage`** → redirect ke `profile.html`.

### C. Akses Halaman Profil (Protected Route)
1. Saat `profile.html` dimuat, JavaScript membaca token dari `localStorage`.
2. Jika token tidak ada → redirect kembali ke halaman login.
3. Jika token ada → kirim `GET /api/profile` dengan header `Authorization: Bearer <token>`.
4. Server middleware (`authMiddleware.js`) memverifikasi token menggunakan `jwt.verify()`.
5. Jika token valid → server mengembalikan data username → ditampilkan di halaman profil.
6. Jika token tidak valid/kadaluwarsa → response `401 Unauthorized` → hapus token → redirect ke login.

### D. Proses Logout
1. User klik tombol **Logout** di halaman profil.
2. Frontend mengirim `POST /api/logout` → server menghapus cookie.
3. Frontend menghapus token dari `localStorage` → redirect ke halaman login.

---

## 5. Dokumentasi API Endpoints

Base URL: `http://localhost:5050`

| Method | Path | Deskripsi | Auth Required |
|:---|:---|:---|:---|
| `POST` | `/api/register` | Mendaftarkan akun baru | ❌ Tidak |
| `POST` | `/api/login` | Login dan mendapatkan token JWT | ❌ Tidak |
| `GET` | `/api/profile` | Mengambil data profil user | ✅ Ya (Bearer Token) |
| `POST` | `/api/logout` | Menghapus cookie token | ❌ Tidak |

### Contoh Request & Response

#### 1. REGISTER — `POST /api/register`

**Request Body:**
```json
{
  "username": "johndoe",
  "password": "rahasia123"
}
```

**Response Sukses (200):**
```json
{
  "message": "Register berhasil"
}
```

**Response Error — Username Sudah Ada (400):**
```json
{
  "message": "Username sudah digunakan"
}
```

#### 2. LOGIN — `POST /api/login`

**Request Body:**
```json
{
  "username": "johndoe",
  "password": "rahasia123"
}
```

**Response Sukses (200):**
```json
{
  "message": "Login berhasil",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWExYjJj..."
}
```

**Response Error — Gagal Login (401):**
```json
{
  "message": "Login gagal"
}
```

#### 3. PROFILE — `GET /api/profile`

**Request Header:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response Sukses (200):**
```json
{
  "username": "johndoe"
}
```

**Response Error — Token Tidak Ada (401):**
```json
{
  "message": "Akses ditolak. Token tidak ada."
}
```

**Response Error — Token Tidak Valid (400):**
```json
{
  "message": "Token tidak valid."
}
```

#### 4. LOGOUT — `POST /api/logout`

**Response (200):**
```json
{
  "message": "Logout berhasil"
}
```

---

## 6. Perbaikan Bug Token JWT

> [!IMPORTANT]
> **Bug pada Materi Slide Asli:**
> Pada kode di slide PDF asli, token JWT disimpan ke variabel global JavaScript (`let token = ""`). Ketika halaman dialihkan dari `index.html` ke `profile.html` menggunakan `window.location.href`, variabel global tersebut **otomatis di-reset menjadi kosong** karena browser memuat ulang halaman baru dari awal.
>
> **Akibatnya:** Token selalu hilang saat user berpindah halaman → user tidak pernah bisa mengakses profil yang terproteksi.
>
> **Solusi yang Diterapkan di Proyek Ini:**
> 1. Saat login berhasil, token disimpan ke **`localStorage`** (bukan variabel global).
> 2. Saat mengakses halaman profil, token dibaca dari **`localStorage`** dan dikirimkan di header `Authorization: Bearer <token>`.
> 3. Saat logout, token **dihapus** dari `localStorage`.
>
> Dengan cara ini, token bertahan meskipun halaman berpindah atau browser di-refresh.

---

## 7. Panduan Langkah Praktik Siswa

### Tahap 1: Persiapan Proyek
1. Buat folder baru `jwt-auth-demo/` dan inisialisasi proyek:
   ```bash
   npm init -y
   npm install express mongoose dotenv jsonwebtoken bcryptjs cookie-parser
   npm install --save-dev nodemon
   ```
2. Buat struktur folder: `config/`, `middleware/`, `models/`, `routes/`, `public/`.
3. Buat file `.env` dengan konfigurasi database dan JWT secret.

### Tahap 2: Koneksi Database
1. Buat file `config/db.js` dengan fungsi `connectDB` menggunakan `mongoose.connect()` di dalam blok `async/await` + `try-catch`.

### Tahap 3: Buat Model User
1. Buat file `models/User.js` dengan Schema yang memiliki field `username` (required, unique) dan `password` (required).
2. Tambahkan middleware `pre("save")` untuk meng-hash password otomatis menggunakan `bcryptjs` sebelum data disimpan.

### Tahap 4: Buat Auth Middleware
1. Buat file `middleware/authMiddleware.js`.
2. Ambil header `Authorization` dari request.
3. Pisahkan token dari format `Bearer <token>` menggunakan `.split(" ")[1]`.
4. Verifikasi token menggunakan `jwt.verify()` dengan `JWT_SECRET`.
5. Jika valid, simpan payload ke `req.user` dan panggil `next()`.

### Tahap 5: Buat Routes Autentikasi
1. Buat file `routes/auth.js` dengan 4 route:
   - `POST /register` — Cek username duplikat → `User.create()`.
   - `POST /login` — Cari user → `bcrypt.compare()` → `jwt.sign()` → kirim token.
   - `GET /profile` — Gunakan `authMiddleware` → kirim `req.user.username`.
   - `POST /logout` — `res.clearCookie("token")`.

### Tahap 6: Setup Server
1. Buat file `index.js` — import semua dependency, hubungkan database, gunakan middleware, mount routes, serve static files.

### Tahap 7: Buat Frontend
1. Buat `public/index.html` — form Register & Login.
2. Buat `public/script.js` — fungsi `register()` dan `login()` menggunakan `fetch()`. Saat login berhasil, simpan token ke `localStorage`.
3. Buat `public/profile.html` — baca token dari `localStorage`, kirim request `GET /api/profile` dengan header `Authorization`.

### Tahap 8: Pengujian
1. Jalankan server: `npm run dev`.
2. Buka browser → akses `http://localhost:5050`.
3. Daftar akun baru → login → pastikan redirect ke halaman profil → lihat username tampil → logout.
4. Coba akses `http://localhost:5050/profile.html` tanpa login → pastikan ter-redirect ke halaman login.

---

## 8. Konsep Kunci yang Dipelajari

- **JSON Web Token (JWT):** Token terenkripsi yang terdiri dari 3 bagian: `Header.Payload.Signature`. Header berisi algoritma (HS256), Payload berisi data user (id, username), Signature adalah tanda tangan digital menggunakan secret key.
- **Bcrypt Password Hashing:** Password tidak pernah disimpan sebagai teks biasa (*plain text*). Library `bcryptjs` menghasilkan hash satu arah (one-way) dengan salt acak sehingga password yang sama menghasilkan hash berbeda setiap kali.
- **Pre-Save Hook (Middleware Mongoose):** Fungsi `UserSchema.pre("save")` berjalan otomatis sebelum data disimpan ke database. Cocok untuk proses enkripsi, validasi, atau transformasi data.
- **Middleware Pattern (Express):** Fungsi perantara yang berjalan antara request masuk dan response keluar. `authMiddleware` memfilter request yang tidak memiliki token valid sebelum mencapai controller.
- **localStorage vs Cookies:**
  - `localStorage` — penyimpanan di sisi client, dapat dibaca oleh JavaScript, bertahan saat refresh halaman, ideal untuk menyimpan token JWT di aplikasi web.
  - `httpOnly Cookie` — penyimpanan di sisi server yang dikirim otomatis setiap request, tidak bisa diakses JavaScript (lebih aman dari XSS), ideal untuk session-based auth.
- **Authorization Header (Bearer Token):** Standar industri untuk mengirim token JWT di setiap request: `Authorization: Bearer <token>`. Server mengekstrak token dari header ini untuk memverifikasi identitas pengguna.
