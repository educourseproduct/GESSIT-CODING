#  ASTS Backend Development: Digital Library API
## Panduan Guru (Teacher's Guide)

Dokumen ini berfungsi sebagai panduan komprehensif bagi pendidik untuk mengevaluasi, menguji, dan memberikan umpan balik terhadap proyek Asesmen Sumatif Tengah Semester (ASTS) siswa. Proyek ini menguji pemahaman dasar pengembangan backend menggunakan **Node.js, Express.js, dan MongoDB (Mongoose)**.

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas / Localhost)
- **ODM:** Mongoose
- **Tools:** Postman / Thunder Client, Git & GitHub

---

## 📁 Struktur Folder Standar
Siswa wajib menerapkan struktur folder modular. Berikut adalah struktur yang diharapkan:

```text
ASTS_NamaSiswa_Kelas/
├── config/
│   └── db.js              # Konfigurasi koneksi MongoDB
├── controllers/
│   └── bookController.js  # Logika bisnis (Create, Read, Filter)
├── models/
│   ── Book.js            # Mongoose Schema & Model
├── routes/
│   └── bookRoutes.js      # Definisi endpoint API
├── .env                   # Environment variables (MONGO_URI, PORT)
├── .gitignore             # Wajib mengabaikan node_modules dan .env
├── package.json           # Dependencies
└── server.js              # Entry point aplikasi

🌐 API Documentation & Testing Guide
Berikut adalah 4 endpoint wajib yang harus diuji menggunakan Postman/Thunder Client.
1. Create Book (POST)
- Endpoint: POST /api/books
- Headers: Content-Type: application/json
- Body (JSON):
{
  "title": "Laskar Pelangi",
  "author": "Andrea Hirata",
  "genre": "Fiction",
  "year": 2005
}
- Expected Response: Status 201 Created. Mengembalikan object buku yang baru dibuat.

2. Get All Books (GET)
- Endpoint: GET /api/books
- Expected Response: Status 200 OK. Mengembalikan array berisi semua buku.
3. Filter Books by Genre (GET with Query String)
- Endpoint: GET /api/books?genre=Fiction
- Expected Response: Status 200 OK. Mengembalikan array buku yang hanya memiliki genre "Fiction".
4. Get Book by ID (GET with Parameter)
- Endpoint: GET /api/books/:id (Contoh: /api/books/64f5a1b2c3d4e5f6g7h8i9j0)
- Expected Response:
    - Jika ada: Status 200 OK dengan object buku.
    - Jika tidak ada: Status 404 Not Found dengan pesan error.

🔧 Troubleshooting (Masalah Umum Siswa)
1. Error: Cannot find module 'express'
Penyebab: Siswa lupa menjalankan npm install atau tidak meng-commit package.json.
Solusi: Minta siswa membuka terminal di folder proyek dan jalankan npm install.
2. Error: MongoDB Connection Failed / ECONNREFUSED
Penyebab: MongoDB service belum dinyalakan (jika pakai localhost) atau URI di .env salah.
Solusi: Pastikan MongoDB Compass bisa terkoneksi, atau minta siswa mengecek ulang MONGO_URI di file .env.
3. Error: Route.get() requires a callback function but got a [object Undefined]
Penyebab: Typo saat import controller di routes/bookRoutes.js, atau nama fungsi yang di-export di controller tidak sama dengan yang di-import di routes.
Solusi: Cek kesamaan penamaan fungsi antara module.exports di controller dan require di routes.
4. Data tidak tersimpan / Response kosong
Penyebab: Lupa menggunakan await pada operasi database, atau lupa menggunakan middleware app.use(express.json()) di server.js.
Solusi: Pastikan express.json() ada di server.js dan semua fungsi database menggunakan async/await.