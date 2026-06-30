# 📚 CAPSTONE PROJECT: TASKIFY BACKEND
##  Panduan Guru & Kunci Jawaban (Teacher's Guide)

Dokumen ini berfungsi sebagai panduan komprehensif bagi pendidik untuk mengevaluasi, menguji, dan memberikan umpan balik terhadap proyek Capstone Semester 1 siswa. Proyek ini menguji pemahaman komprehensif pengembangan backend menggunakan **Node.js, Express.js, MongoDB (Mongoose), JWT Authentication, dan Owner Validation**.

---

##  Objektif Proyek

**Skenario:** Perusahaan startup "Taskify" membutuhkan sistem manajemen tugas. Tim Frontend sudah membuatkan antarmuka (UI) menggunakan HTML/CSS/JS Vanilla. Tugas siswa adalah membangun "otak" (Backend REST API) agar frontend tersebut bisa berjalan sepenuhnya!

**Kompetensi yang Diuji:**
- ✅ Pemodelan Data dengan Mongoose (Multi-Model: User & Task)
- ✅ Keamanan dengan JWT & bcryptjs (Register, Login, Protected Routes)
- ✅ CRUD Operations dengan Owner Validation
- ✅ API Contract Compliance (Format JSON sesuai spesifikasi frontend)
- ✅ Environment Variables & Security Best Practices
- ✅ Version Control dengan Git & GitHub

---

## ️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas / Localhost)
- **ODM:** Mongoose
- **Authentication:** JWT + bcryptjs
- **Libraries:** dotenv, cors, nodemon
- **Tools:** Postman / Thunder Client, Git & GitHub

---

## 📁 Struktur Folder Lengkap

```text
Capstone_Taskify/
├── frontend/             <-- (DIBERIKAN KE SISWA, TIDAK DIUBAH)
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
│
└── backend/              <-- (HASIL KERJA SISWA / KUNCI JAWABAN)
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── authController.js
    │   └── taskController.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── models/
    │   ├── User.js
    │   └── Task.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── server.js