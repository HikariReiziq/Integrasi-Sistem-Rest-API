const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const students = [
  { id: 1, name: 'Hikari', major: 'Teknologi Informasi', university: 'ITS' },
  { id: 2, name: 'Hanif', major: 'Sistem Informasi', university: 'ITB' },
  { id: 3, name: 'Zaki', major: 'Hukum', university: 'UI' }
];
// 1. Endpoint GET 
app.get('/students', (req, res) => {
  res.status(200).json({
    message: 'Berhasil mengambil semua data mahasiswa',
    data: students
  });
});

app.get('/', (req, res) => {
  res.status(200).send('Semoga Integrasi Sistem A ges yak');
});

// 2. Endpoint GET by Id
app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.status(200).json({
      message: 'Data mahasiswa ditemukan',
      data: student
    });
  } else {
    res.status(404).json({
      message: 'Mahasiswa tidak ditemukan'
    });
  }
});

// 3. Endpoint POST
app.post('/students', (req, res) => {
  const { name, major, university } = req.body;

  if (!name || !major || !university) {
    return res.status(400).json({
      message: 'Nama, jurusan, dan universitas harus diisi!'
    });
  }

  const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

  const newStudent = {
    id: newId,
    name: name,
    major: major,
    university: university
  };

  students.push(newStudent);

  res.status(201).json({
    message: 'Data mahasiswa berhasil ditambahkan',
    data: newStudent
  });
});

// 4. Endpoint PUT (Update)
app.put('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const { name, major, university } = req.body;

  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({
      message: 'Mahasiswa tidak ditemukan'
    });
  }

  if (!name || !major || !university) {
    return res.status(400).json({
      message: 'Nama, jurusan, dan universitas harus diisi!'
    });
  }

  students[studentIndex] = {
    id: studentId,
    name,
    major,
    university
  };

  res.status(200).json({
    message: 'Data mahasiswa berhasil diupdate',
    data: students[studentIndex]
  });
});

// 5. Endpoint DELETE
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);

  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({
      message: 'Mahasiswa tidak ditemukan'
    });
  }

  const deletedStudent = students.splice(studentIndex, 1);

  res.status(200).json({
    message: 'Data mahasiswa berhasil dihapus',
    data: deletedStudent[0]
  });
});

app.listen(port, () => {
  console.log(`Server REST API Integrasi Sistem lagi jalan-jalan di http://localhost:${port}`);
});