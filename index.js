const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const students = [
  { id: 1, name: 'Hikari', major: 'Teknologi Informasi', university: 'ITS' },
  { id: 2, name: 'Hanif', major: 'Sistem Informasi', university: 'ITB' },
  { id: 3, name: 'Zaki', major: 'Hukum', university: 'UI' }
];

app.get('/students', (req, res) => {
  res.status(200).json({
    message: 'Berhasil mengambil semua data mahasiswa',
    data: students
  });
});

app.get('/', (req, res) => {
  res.status(200).send('Semoga Integrasi Sistem A ges yak');
});

app.listen(port, () => {
  console.log(`Server REST API Integrasi Sistem lagi jalan-jalan di http://localhost:${port}`);
});