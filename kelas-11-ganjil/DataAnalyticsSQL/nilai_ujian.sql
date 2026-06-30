-- Database: sekolah_db (Buat database ini terlebih dahulu di phpMyAdmin/TablePlus)
-- Contoh: CREATE DATABASE sekolah_db;
-- Gunakan database: USE sekolah_db;

DROP TABLE IF EXISTS nilai_ujian;

CREATE TABLE nilai_ujian (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    kelas VARCHAR(10) NOT NULL,
    skor INT, -- Diizinkan NULL untuk bahan latihan Data Cleaning
    status VARCHAR(20) DEFAULT 'Belum Lulus'
);

INSERT INTO nilai_ujian (nama, kelas, skor, status) VALUES
('Ahmad Fauzi', 'XI-RPL-1', 85, 'Lulus'),
('Budi Santoso', 'XI-RPL-1', 72, 'Belum Lulus'),
('Citra Dewi', 'XI-RPL-1', 90, 'Lulus'),
('Dedi Kurniawan', 'XI-RPL-1', NULL, 'Belum Lulus'), -- Data kotor (NULL)
('Eka Putri', 'XI-RPL-1', 78, 'Lulus'),
('Fajar Pratama', 'XI-RPL-1', 65, 'Belum Lulus'),
('Gita Lestari', 'XI-RPL-1', 88, 'Lulus'),
('Hendra Wijaya', 'XI-RPL-1', 74, 'Belum Lulus'),
('Indah Cahyani', 'XI-RPL-1', NULL, 'Belum Lulus'), -- Data kotor (NULL)
('Joko Susilo', 'XI-RPL-1', 80, 'Lulus'),
('Kartika Sari', 'XI-RPL-2', 92, 'Lulus'),
('Lukman Hakim', 'XI-RPL-2', 60, 'Belum Lulus'),
('Mega Utami', 'XI-RPL-2', 85, 'Lulus'),
('Novianto', 'XI-RPL-2', 76, 'Lulus'),
('Oki Setiawan', 'XI-RPL-2', NULL, 'Belum Lulus'), -- Data kotor (NULL)
('Putri Rahayu', 'XI-RPL-2', 82, 'Lulus'),
('Qori Ananda', 'XI-RPL-2', 70, 'Belum Lulus'),
('Rian Hidayat', 'XI-RPL-2', 89, 'Lulus'),
('Siti Aminah', 'XI-RPL-2', 63, 'Belum Lulus'),
('Taufik Hidayat', 'XI-RPL-2', 95, 'Lulus'),
('Umar Faruq', 'XI-TKJ-1', 87, 'Lulus'),
('Vina Amelia', 'XI-TKJ-1', 73, 'Belum Lulus'),
('Wahyu Wibowo', 'XI-TKJ-1', NULL, 'Belum Lulus'), -- Data kotor (NULL)
('Xena Putri', 'XI-TKJ-1', 81, 'Lulus'),
('Yanto Basna', 'XI-TKJ-1', 68, 'Belum Lulus'),
('Zahra Aulia', 'XI-TKJ-1', 94, 'Lulus'),
('Adi Nugroho', 'XI-TKJ-1', 75, 'Lulus'),
('Bella Vista', 'XI-TKJ-1', 79, 'Lulus'),
('Candra Kirana', 'XI-TKJ-1', 62, 'Belum Lulus'),
('Doni Salmanan', 'XI-TKJ-1', 86, 'Lulus'),
('Elsa Frozen', 'XI-TKJ-2', 91, 'Lulus'),
('Farhan Alfarizi', 'XI-TKJ-2', 58, 'Belum Lulus'),
('Gani Ramadhan', 'XI-TKJ-2', 83, 'Lulus'),
('Hana Sofia', 'XI-TKJ-2', 77, 'Lulus'),
('Irfan Bachdim', 'XI-TKJ-2', NULL, 'Belum Lulus'), -- Data kotor (NULL)
('Julia Perez', 'XI-TKJ-2', 80, 'Lulus'),
('Kevin Sanjaya', 'XI-TKJ-2', 69, 'Belum Lulus'),
('Lilis Suganda', 'XI-TKJ-2', 84, 'Lulus'),
('Maman Abdurrahman', 'XI-TKJ-2', NULL, 'Belum Lulus'), -- Data kotor (NULL)
('Nadia Vega', 'XI-TKJ-2', 88, 'Lulus'),
('Rendy Pangalila', 'XI-RPL-1', 93, 'Lulus'),
('Sonia Natalia', 'XI-RPL-1', 71, 'Belum Lulus'),
('Tio Nugroho', 'XI-RPL-2', 67, 'Belum Lulus'),
('Ulfa Dwiyanti', 'XI-RPL-2', 80, 'Lulus'),
('Vino Bastian', 'XI-TKJ-1', 86, 'Lulus'),
('Wulan Guritno', 'XI-TKJ-1', 74, 'Belum Lulus'),
('Yura Yunita', 'XI-TKJ-2', 89, 'Lulus'),
('Zacky Zimah', 'XI-TKJ-2', 65, 'Belum Lulus'),
('Adipati Dolken', 'XI-RPL-1', 80, 'Lulus'),
('Bunga Citra', 'XI-RPL-2', 85, 'Lulus');

-- =========================================================================
-- CONTOH KUERI SQL UNTUK GURU / INSTRUKTUR (Copy & Run di phpMyAdmin / TablePlus)
-- =========================================================================

-- 1. DATA CLEANING: Menghapus data bernilai NULL pada skor ujian
-- Run ini sebelum melakukan kueri statistik agar perhitungan rata-rata akurat.
-- DELETE FROM nilai_ujian WHERE skor IS NULL;


-- 2. DATA FILTERING (Penyaringan):
-- a. Mencari daftar siswa kelas XI-RPL-1
-- SELECT * FROM nilai_ujian WHERE kelas = 'XI-RPL-1';

-- b. Mencari daftar siswa yang nilainya di atas atau sama dengan KKM (75)
-- SELECT * FROM nilai_ujian WHERE skor >= 75;

-- c. Mencari siswa kelas XI-TKJ-1 yang nilainya di atas KKM (Logika AND)
-- SELECT * FROM nilai_ujian WHERE kelas = 'XI-TKJ-1' AND skor >= 75;

-- d. Mencari siswa yang namanya diawali huruf 'A' (Pattern matching LIKE)
-- SELECT * FROM nilai_ujian WHERE nama LIKE 'A%';

-- e. Mencari siswa yang memiliki nilai di antara 70 dan 85 (BETWEEN)
-- SELECT * FROM nilai_ujian WHERE skor BETWEEN 70 AND 85;

-- f. Mencari siswa di beberapa kelas spesifik (IN)
-- SELECT * FROM nilai_ujian WHERE kelas IN ('XI-RPL-1', 'XI-RPL-2');


-- 3. DATA SORTING (Pengurutan & Ranking):
-- a. Mengurutkan siswa dari nilai tertinggi ke terendah (Peringkat Kelas)
-- SELECT * FROM nilai_ujian ORDER BY skor DESC;

-- b. Mengambil 5 siswa dengan nilai tertinggi (LIMIT)
-- SELECT * FROM nilai_ujian ORDER BY skor DESC LIMIT 5;


-- 4. DATA AGGREGATION & GROUPING (Statistik Sekolah):
-- a. Menghitung rata-rata skor seluruh siswa (Mean)
-- SELECT AVG(skor) AS rata_rata_sekolah FROM nilai_ujian;

-- b. Mendapatkan nilai tertinggi dan terendah di sekolah (Min/Max)
-- SELECT MAX(skor) AS nilai_tertinggi, MIN(skor) AS nilai_terendah FROM nilai_ujian;

-- c. Menghitung jumlah total siswa yang Lulus (Frekuensi)
-- SELECT COUNT(id) AS jumlah_siswa_lulus FROM nilai_ujian WHERE status = 'Lulus';

-- d. Menghitung jumlah siswa dan rata-rata skor PER KELAS (GROUP BY)
-- SELECT kelas, COUNT(id) AS jumlah_siswa, AVG(skor) AS rata_rata_kelas FROM nilai_ujian GROUP BY kelas;

-- e. Menampilkan kelas yang rata-rata nilainya di atas 80 (HAVING)
-- SELECT kelas, AVG(skor) AS rata_rata_kelas FROM nilai_ujian GROUP BY kelas HAVING rata_rata_kelas > 80;


-- 5. ADVANCED SQL:
-- a. Menampilkan siswa yang nilainya di atas rata-rata sekolah (Subquery)
-- SELECT * FROM nilai_ujian WHERE skor > (SELECT AVG(skor) FROM nilai_ujian);

-- b. Mengonversi skor angka menjadi Grade huruf A, B, C, D (CASE WHEN)
-- SELECT nama, kelas, skor,
--        CASE 
--            WHEN skor >= 90 THEN 'A'
--            WHEN skor >= 80 THEN 'B'
--            WHEN skor >= 70 THEN 'C'
--            ELSE 'D'
--        END AS grade
-- FROM nilai_ujian;

