# Proyek Praktis: REST API CRUD User Management (Pertemuan 7 & 9)

Proyek ini mengimplementasikan **REST API lengkap** untuk pengelolaan data pengguna (User) menggunakan Express.js dan Mongoose ODM. Proyek dibagi menjadi dua tahap:

- **Pertemuan 7:** Implementasi **Create** & **Read** (menambah dan membaca data user).
- **Pertemuan 9:** Implementasi **Update** & **Delete** (mengubah dan menghapus data user).

---

## 1. Persiapan & Instalasi

1.  Pastikan **Node.js** sudah terinstal di komputer Anda.
2.  Pastikan Anda sudah memiliki akun **MongoDB Atlas** dengan cluster aktif (lihat proyek ConnectMongoDB untuk panduan setup Atlas).
3.  Buka terminal di folder `CRUDMongo/`, lalu jalankan:
    ```bash
    npm install
    ```
4.  Buat file **`.env`** di root folder proyek dengan isi berikut:
    ```
    PORT=5050
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database_name>
    ```
    > Ganti `<username>`, `<password>`, dan `<database_name>` dengan kredensial MongoDB Atlas Anda.

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
MongoDB Connected..
Server running on http://localhost:5050
```

---

## 3. Struktur Folder Proyek

```text
CRUDMongo/
├── config/
│   └── db.js               # Logika koneksi mongoose.connect()
├── controller/
│   └── userController.js    # Fungsi CRUD (createUser, getUsers, getUserById, updateUser, deleteUser)
├── models/
│   └── User.js              # Schema Mongoose untuk User (name, email, password, date)
├── routes/
│   └── userRoutes.js        # Definisi endpoints HTTP (GET, POST, PUT, DELETE)
├── .env                     # Kredensial sensitif (PORT, MONGO_URI)
├── server.js                # Server entry point (Express + MongoDB init)
└── package.json
```

---

## 4. Dokumentasi API Endpoints

Base URL: `http://localhost:5050`

| Method | Path | Deskripsi | Request Body | Status Code |
|:---|:---|:---|:---|:---|
| `POST` | `/api/users` | Membuat user baru | `{ name, email, password }` | `201 Created` |
| `GET` | `/api/users` | Mengambil semua user | — | `200 OK` |
| `GET` | `/api/users/:id` | Mengambil user berdasarkan ID | — | `200 OK` / `404 Not Found` |
| `PUT` | `/api/users/:id` | Mengubah data user | `{ field: value }` | `200 OK` / `404 Not Found` |
| `DELETE` | `/api/users/:id` | Menghapus user berdasarkan ID | — | `200 OK` / `404 Not Found` |

### Contoh Request & Response

#### 1. CREATE — `POST /api/users`

**Request Body:**
```json
{
  "name": "Ahmad Rizky",
  "email": "ahmad@example.com",
  "password": "rahasia123"
}
```

**Response (201 Created):**
```json
{
  "_id": "665a1b2c3d4e5f6a7b8c9d0e",
  "name": "Ahmad Rizky",
  "email": "ahmad@example.com",
  "password": "rahasia123",
  "date": "2026-06-26T06:30:00.000Z",
  "__v": 0
}
```

#### 2. READ ALL — `GET /api/users`

**Response (200 OK):**
```json
[
  {
    "_id": "665a1b2c3d4e5f6a7b8c9d0e",
    "name": "Ahmad Rizky",
    "email": "ahmad@example.com",
    "password": "rahasia123",
    "date": "2026-06-26T06:30:00.000Z"
  },
  {
    "_id": "665a1b2c3d4e5f6a7b8c9d1f",
    "name": "Siti Nurhaliza",
    "email": "siti@example.com",
    "password": "password456",
    "date": "2026-06-26T06:35:00.000Z"
  }
]
```

#### 3. READ BY ID — `GET /api/users/:id`

**Response (200 OK):**
```json
{
  "_id": "665a1b2c3d4e5f6a7b8c9d0e",
  "name": "Ahmad Rizky",
  "email": "ahmad@example.com",
  "password": "rahasia123",
  "date": "2026-06-26T06:30:00.000Z"
}
```

**Response (404 Not Found):**
```json
{
  "error": "User not found"
}
```

#### 4. UPDATE — `PUT /api/users/:id`

**Request Body (mengubah nama saja):**
```json
{
  "name": "Ahmad Rizky Pratama"
}
```

**Response (200 OK):**
```json
{
  "_id": "665a1b2c3d4e5f6a7b8c9d0e",
  "name": "Ahmad Rizky Pratama",
  "email": "ahmad@example.com",
  "password": "rahasia123",
  "date": "2026-06-26T06:30:00.000Z"
}
```

#### 5. DELETE — `DELETE /api/users/:id`

**Response (200 OK):**
```json
{
  "message": "User deleted successfully"
}
```

---

## 5. Panduan Pengujian API (Thunder Client / Postman)

Gunakan **Thunder Client** (ekstensi VS Code) atau **Postman** untuk menguji setiap endpoint.

### Skenario Pengujian Lengkap

#### Langkah 1: Buat 3 User Baru (POST)
1.  Buka Thunder Client, pilih method **POST**.
2.  URL: `http://localhost:5050/api/users`
3.  Klik tab **Body** → pilih **JSON**.
4.  Masukkan data user pertama:
    ```json
    { "name": "Budi Santoso", "email": "budi@mail.com", "password": "budi123" }
    ```
5.  Klik **Send**. Pastikan status **201 Created**.
6.  Ulangi untuk 2 user lagi dengan data berbeda.
7.  **Catat** salah satu `_id` dari response untuk digunakan di langkah berikutnya.

#### Langkah 2: Lihat Semua User (GET)
1.  Method: **GET** → URL: `http://localhost:5050/api/users`
2.  Klik **Send**. Pastikan muncul array berisi 3 user yang baru dibuat.

#### Langkah 3: Lihat User by ID (GET)
1.  Method: **GET** → URL: `http://localhost:5050/api/users/<paste_id_di_sini>`
2.  Klik **Send**. Pastikan hanya 1 user yang tampil.
3.  Coba dengan ID yang **tidak ada** → pastikan response `404`.

#### Langkah 4: Update Nama User (PUT)
1.  Method: **PUT** → URL: `http://localhost:5050/api/users/<paste_id_di_sini>`
2.  Body JSON:
    ```json
    { "name": "Budi Santoso Wijaya" }
    ```
3.  Klik **Send**. Pastikan nama di response sudah berubah (berkat opsi `{ new: true }`).

#### Langkah 5: Hapus User (DELETE)
1.  Method: **DELETE** → URL: `http://localhost:5050/api/users/<paste_id_di_sini>`
2.  Klik **Send**. Pastikan response: `"User deleted successfully"`.

#### Langkah 6: Verifikasi Penghapusan
1.  Ulangi **GET** ke ID yang baru dihapus → pastikan response `404 Not Found`.
2.  Ulangi **GET ALL** → pastikan jumlah user berkurang 1.

---

## 6. Konsep Kunci yang Dipelajari

- **Mongoose Schema & Model:** Mendefinisikan struktur data (blueprint) menggunakan `mongoose.Schema` dengan validasi `required` dan `unique`, lalu mengekspornya sebagai Model untuk digunakan di controller.
- **Async/Await & Try-Catch:** Setiap fungsi controller menggunakan pola `async/await` di dalam blok `try-catch` agar error database tidak menghentikan server (crash-proof).
- **HTTP Status Codes:** Penggunaan kode status yang tepat: `201` untuk data baru berhasil dibuat, `200` untuk sukses, `404` untuk data tidak ditemukan, dan `500` untuk error server.
- **`findByIdAndUpdate` dengan `{ new: true }`:** Opsi `{ new: true }` memastikan response mengembalikan data **setelah** diubah, bukan data lama.
- **`findByIdAndDelete` dengan penanganan `404`:** Selalu periksa apakah data yang akan dihapus benar-benar ada. Jika `null`, kirimkan response `404 Not Found` agar tidak memberikan respon sukses palsu.
- **Arsitektur MVC (Model-View-Controller):** Pemisahan tanggung jawab berkas:
  - `models/` → Definisi data (Schema)
  - `controller/` → Logika bisnis (CRUD functions)
  - `routes/` → Pemetaan URL ke fungsi controller
  - `server.js` → Entry point & konfigurasi middleware
