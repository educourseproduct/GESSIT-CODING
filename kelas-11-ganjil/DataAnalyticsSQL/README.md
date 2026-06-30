# Proyek Latihan Mandiri: Data Processing & SQL Queries (Pertemuan 12 & 13)

Proyek ini bertujuan untuk melatih siswa dalam memahami **konsep pengolahan data** dan **menulis kueri SQL dasar** menggunakan database MySQL.

---

## 1. Persiapan Lingkungan & Impor Data

1.  Buka **DBngin** atau **XAMPP** dan pastikan layanan **MySQL** sudah berjalan (Port `3306`).
2.  Buka aplikasi pengelola database Anda (seperti **TablePlus**, **phpMyAdmin**, atau **DBeaver**).
3.  Buat database baru bernama **`sekolah_db`**.
4.  Impor berkas dataset **`nilai_ujian.sql`** ke dalam database `sekolah_db`. Berkas ini berisi tabel `nilai_ujian` dengan 50 data siswa.

---

## 2. Lembar Latihan Siswa (Tugas Praktikum)

Siswa diminta untuk menyelesaikan permasalahan pengolahan data di bawah ini dengan menuliskan kueri SQL yang tepat di SQL Editor:

### Tugas A: Data Cleaning (Pembersihan Data)
Identifikasi data yang kotor (bernilai `NULL` pada skor ujian) dan hapus data-data tersebut agar tidak merusak hasil perhitungan statistik.
*   **Instruksi:** Tulis kueri untuk menghapus baris data yang memiliki nilai `skor` berupa `NULL`.

### Tugas B: Data Filtering (Penyaringan Data)
Saring dan tampilkan data siswa yang memenuhi syarat tertentu.
*   **Instruksi 1 (Kondisi Tunggal):** Tampilkan daftar siswa dari kelas **`XI-RPL-1`** saja.
*   **Instruksi 2 (Kondisi Perbandingan):** Tampilkan daftar siswa yang mendapat skor **di atas atau sama dengan 75** (KKM).
*   **Instruksi 3 (Logika AND):** Tampilkan daftar siswa kelas **`XI-TKJ-1`** yang nilainya di atas KKM (**`>= 75`**).
*   **Instruksi 4 (Pencarian Pola - LIKE):** Tampilkan daftar siswa yang namanya diawali dengan huruf **'A'**.
*   **Instruksi 5 (Rentang Nilai - BETWEEN):** Tampilkan daftar siswa yang memiliki nilai di antara **70 dan 85**.
*   **Instruksi 6 (Pilihan Banyak - IN):** Tampilkan daftar siswa yang berada di kelas **`XI-RPL-1`** atau **`XI-RPL-2`**.

### Tugas C: Data Sorting (Pengurutan Data)
Urutkan data siswa untuk melihat peringkat nilai.
*   **Instruksi 1 (Descending):** Tampilkan semua daftar siswa yang diurutkan berdasarkan `skor` dari yang **tertinggi ke terendah**.
*   **Instruksi 2 (Top N - LIMIT):** Tampilkan **5 siswa** dengan nilai tertinggi untuk program beasiswa.

### Tugas D: Data Aggregation & Grouping (Statistik & Pengelompokan)
Hitung statistik kelas dan kelompokkan data untuk mengambil keputusan akademis tingkat sekolah.
*   **Instruksi 1 (Mean):** Hitung rata-rata (`AVG`) skor seluruh siswa.
*   **Instruksi 2 (Min/Max):** Dapatkan nilai tertinggi (`MAX`) dan nilai terendah (`MIN`) di sekolah.
*   **Instruksi 3 (Frekuensi):** Hitung jumlah total siswa (`COUNT`) yang dinyatakan lulus (`status = 'Lulus'`).
*   **Instruksi 4 (Group By):** Tampilkan jumlah siswa dan rata-rata skor **untuk setiap kelas**.
*   **Instruksi 5 (Having):** Tampilkan daftar kelas yang memiliki **rata-rata skor kelas di atas 80**.

### Tugas E: Advanced SQL (Subqueries & Conditional CASE)
Terapkan logika kueri tingkat lanjut untuk analisis data yang lebih mendalam.
*   **Instruksi 1 (Subquery):** Tampilkan daftar siswa yang mendapat nilai **di atas rata-rata nilai seluruh siswa**.
*   **Instruksi 2 (Conditional CASE WHEN):** Tampilkan kolom baru `grade` dengan ketentuan:
    *   Skor `>= 90` -> 'A'
    *   Skor `>= 80` -> 'B'
    *   Skor `>= 70` -> 'C'
    *   Di bawah `70` -> 'D'

---

## 3. Kunci Jawaban Kueri SQL (Untuk Instruktur / Guru)

Berikut adalah kunci kueri SQL yang benar untuk mencocokkan hasil latihan siswa:

### Kunci Tugas A (Data Cleaning)
```sql
DELETE FROM nilai_ujian 
WHERE skor IS NULL;
```
*(Setelah kueri ini dijalankan, jumlah baris data akan berkurang dari 50 menjadi 44 karena 6 data kotor bermutu NULL telah dihapus).*

### Kunci Tugas B (Data Filtering)
*   **Kueri 1 (Kelas RPL-1):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE kelas = 'XI-RPL-1';
    ```
*   **Kueri 2 (Nilai >= 75):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE skor >= 75;
    ```
*   **Kueri 3 (TKJ-1 & Nilai >= 75):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE kelas = 'XI-TKJ-1' AND skor >= 75;
    ```
*   **Kueri 4 (Pattern matching nama 'A'):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE nama LIKE 'A%';
    ```
*   **Kueri 5 (Rentang nilai BETWEEN):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE skor BETWEEN 70 AND 85;
    ```
*   **Kueri 6 (Pilihan kelas IN):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE kelas IN ('XI-RPL-1', 'XI-RPL-2');
    ```

### Kunci Tugas C (Data Sorting & Top N)
*   **Kueri 1 (Urutan Descending):**
    ```sql
    SELECT * FROM nilai_ujian 
    ORDER BY skor DESC;
    ```
*   **Kueri 2 (Top 5 Siswa - LIMIT):**
    ```sql
    SELECT * FROM nilai_ujian 
    ORDER BY skor DESC 
    LIMIT 5;
    ```

### Kunci Tugas D (Data Aggregation & Grouping)
*   **Kueri 1 (Mean / Rata-rata):**
    ```sql
    SELECT AVG(skor) AS rata_rata_skor 
    FROM nilai_ujian;
    ```
*   **Kueri 2 (Min & Max):**
    ```sql
    SELECT MAX(skor) AS nilai_tertinggi, MIN(skor) AS nilai_terendah 
    FROM nilai_ujian;
    ```
*   **Kueri 3 (Frekuensi Kelulusan):**
    ```sql
    SELECT COUNT(id) AS jumlah_lulus 
    FROM nilai_ujian 
    WHERE status = 'Lulus';
    ```
*   **Kueri 4 (Rata-rata per Kelas - GROUP BY):**
    ```sql
    SELECT kelas, COUNT(id) AS jumlah_siswa, AVG(skor) AS rata_rata_kelas 
    FROM nilai_ujian 
    GROUP BY kelas;
    ```
*   **Kueri 5 (Filter Rata-rata Kelas - HAVING):**
    ```sql
    SELECT kelas, AVG(skor) AS rata_rata_kelas 
    FROM nilai_ujian 
    GROUP BY kelas 
    HAVING rata_rata_kelas > 80;
    ```

### Kunci Tugas E (Advanced SQL)
*   **Kueri 1 (Siswa di Atas Rata-rata - Subquery):**
    ```sql
    SELECT * FROM nilai_ujian 
    WHERE skor > (SELECT AVG(skor) FROM nilai_ujian);
    ```
*   **Kueri 2 (Konversi ke Huruf Grade - CASE WHEN):**
    ```sql
    SELECT nama, kelas, skor,
           CASE 
               WHEN skor >= 90 THEN 'A'
               WHEN skor >= 80 THEN 'B'
               WHEN skor >= 70 THEN 'C'
               ELSE 'D'
           END AS grade
    FROM nilai_ujian;
    ```

