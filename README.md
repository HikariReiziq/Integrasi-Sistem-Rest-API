# Tugas Integrasi Sistem - REST API Mahasiswa
| No | Nama               | NRP      |
|----|----------------    |----------|
| 1  |Hanif Mawla Faizi   |5027241064|
| 2  |M. Hikari Reiziq R. |5027241079|

REST API sederhana menggunakan **Node.js** dan **Express.js** untuk mengelola data mahasiswa.
API ini mendukung operasi dasar **CRUD (Create, Read, Update, Delete)**.

---

## 🚀 Teknologi yang Digunakan

* Node.js
* Express.js
* JSON sebagai format data

---

## 📂 Struktur Project

```
Integrasi-Sistem-Rest-API
│
├── node_modules
├── package.json
├── package-lock.json
├── index.js
└── README.md
```

---

## ⚙️ Instalasi

1. Install dependencies

```
npm install
```

2. Jalankan server

```
node index.js
```

Server akan berjalan di:

```
http://localhost:3000
```

---

## 📌 Endpoint API

### 1. Get All Students

```
GET /students
```

Response:

```json
{
  "message": "Berhasil mengambil semua data mahasiswa",
  "data": [...]
}
```

---

### 2. Get Student by ID

```
GET /students/:id
```

Contoh:

```
GET /students/1
```

---

### 3. Create Student

```
POST /students
```

Body Request:

```json
{
  "name": "Hanif",
  "major": "Teknologi Informasi",
  "university": "ITS"
}
```

---

### 4. Update Student

```
PUT /students/:id
```

Body Request:

```json
{
  "name": "Hanif Faizi",
  "major": "Teknologi Informasi",
  "university": "ITS"
}
```

---

### 5. Delete Student

```
DELETE /students/:id
```

---

## 🧪 Testing API

API dapat diuji menggunakan:

* Postman
* Insomnia
* Thunder Client (VSCode)

Contoh URL:

```
http://localhost:3000/students
```
