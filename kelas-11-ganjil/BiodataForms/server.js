const http = require('http');
const fs = require('fs');
const mysql = require('mysql2');
const path = require('path');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'belajar'
});

db.connect(err => {
  if (err) {
    console.error('Koneksi database gagal:', err.message);
  } else {
    console.log('Database terhubung');
  }
});

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("index.html tidak ditemukan");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File CSS tidak ditemukan");
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (req.url === '/script.js') {
    fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('script.js tidak ditemukan');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && req.url === '/simpan-data') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const sql = `INSERT INTO pelajar (name, nama_sekolah, email, tanggal_lahir, jumlah_saudara, jenis_kelamin, kota_tempat_tinggal, no_telp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        db.query(sql, [
          data.nama,
          data.namaSekolah,
          data.email,
          data.tglLahir,
          data.saudara,
          data.gender,
          data.kota,
          data.telepon
        ], (err, result) => {
          if (err) {
            console.error('Database Error:', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
              status: 'error',
              message: 'Gagal menyimpan data'
            }));
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            status: 'success',
            message: 'Data berhasil disimpan ke database'
          }));
        });
      } catch (err) {
        console.error('JSON Parse Error:', err.message);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          status: 'error',
          message: 'Format data salah'
        }));
      }
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
