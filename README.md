# **Dokumentasi Aplikasi LMS Mejasita**

## **Pendahuluan**
LMS Mejasita adalah sistem manajemen pembelajaran yang memungkinkan berbagai pihak untuk terlibat dalam proses pembelajaran secara online. Platform ini dibangun menggunakan **Laravel** untuk back-end dan **React** untuk front-end. Aplikasi ini memiliki 3 peran utama: **Admin**, **Mentor**, dan **Siswa**. Masing-masing peran memiliki hak akses dan fungsionalitas yang berbeda.

---

## **Fitur Utama**

### 1. **Peran Pengguna**
Aplikasi LMS Mejasita memiliki tiga peran pengguna yang berbeda, yaitu:

- **Admin**: Pengelola utama aplikasi. Admin memiliki akses penuh untuk mengelola kategori dan kelas yang ada.
- **Mentor**: Pengajar yang dapat membuat dan mengelola kelas serta materi pembelajaran (video dan PDF).
- **Siswa**: Pengguna yang dapat mendaftar pada kelas menggunakan kode yang disediakan oleh mentor, dan mengikuti materi yang ada di dalam kelas.

### 2. **Proses Pendaftaran dan Pengelolaan Kelas**
#### **Admin dan Mentor**
- **Admin dan Mentor** memiliki hak yang sama dalam hal **mengelola kategori** dan **kelas**.
- Admin dan Mentor dapat:
    - Menambah, mengedit, dan menghapus kategori kelas.
    - Membuat dan mengelola kelas.
    - Mengelola materi pembelajaran yang terdiri dari file **video** dan **PDF** di dalam setiap kelas.

#### **Siswa**
- **Siswa** hanya dapat mendaftar ke kelas yang telah disediakan oleh mentor menggunakan **kode pendaftaran** yang diberikan oleh mentor.
- Setelah mendaftar, siswa dapat mengakses materi pembelajaran yang ada di dalam kelas, termasuk video dan PDF.

---

## **Fitur Kelas dan Materi**

### **Kategori Kelas**
Kelas dikelompokkan ke dalam kategori untuk memudahkan pencarian dan pengelompokan kelas. Admin dan Mentor dapat membuat kategori baru dan mengorganisir kelas sesuai dengan kategori tersebut.

### **Kelas**
- Setiap kelas memiliki deskripsi, daftar materi pembelajaran, dan instruksi yang dapat diakses oleh siswa setelah mereka mendaftar.
- Kelas dapat memiliki beberapa **materi** dengan dua jenis format: **video** dan **PDF**.
    - **Video**: Materi dalam bentuk video pembelajaran yang dapat diputar oleh siswa.
    - **PDF**: Materi dalam bentuk dokumen PDF yang dapat diunduh atau dibaca oleh siswa.

### **Kode Pendaftaran**
- Mentor dapat memberikan **kode pendaftaran** kepada siswa agar mereka dapat mendaftar di kelas tertentu.
- Siswa hanya perlu memasukkan kode pendaftaran di halaman pendaftaran kelas untuk mendapatkan akses ke materi yang relevan.

---

## **Panduan Penggunaan**

### **1. Admin**
Sebagai Admin, Anda memiliki akses penuh untuk mengelola aplikasi. Berikut adalah tugas yang bisa Anda lakukan:
- **Mengelola Kategori Kelas**: Menambah, mengedit, dan menghapus kategori kelas.
- **Mengelola Kelas**: Membuat, mengedit, dan menghapus kelas. Anda juga dapat menambahkan materi pembelajaran dalam format video dan PDF di setiap kelas.

### **2. Mentor**
Sebagai Mentor, Anda dapat:
- **Mengelola Kelas**: Membuat kelas baru dan menambahkan materi pembelajaran (video dan PDF).
- **Memberikan Kode Pendaftaran**: Setiap kelas yang Anda buat akan memiliki kode pendaftaran yang dapat dibagikan kepada siswa agar mereka dapat mendaftar dan mengakses kelas.

### **3. Siswa**
Sebagai Siswa, Anda hanya dapat:
- **Mendaftar ke Kelas**: Untuk mendaftar ke kelas, Anda memerlukan **kode pendaftaran** dari Mentor.
- **Mengakses Materi**: Setelah mendaftar, Anda dapat mengakses semua materi yang ada di dalam kelas, baik dalam format video maupun PDF.

---

## **Alur Proses**
### **1. Admin**
- Login sebagai Admin.
- Buat kategori kelas baru.
- Buat kelas dan tentukan kategori.
- Tambahkan materi pembelajaran dalam bentuk video dan PDF ke dalam kelas.
- Atur dan kelola kelas yang ada.

### **2. Mentor**
- Login sebagai Mentor.
- Buat kelas dan tentukan kategori.
- Tambahkan materi pembelajaran (video dan PDF) ke kelas yang telah dibuat.
- Dapatkan **kode pendaftaran** untuk dibagikan ke siswa.

### **3. Siswa**
- Login sebagai Siswa.
- Masukkan kode pendaftaran yang diberikan oleh Mentor.
- Dapatkan akses ke kelas dan materi pembelajaran.
- Akses materi dalam format video atau PDF.

---

## **Ringkasan Fitur**

| Fitur                          | Admin      | Mentor     | Siswa      |
|---------------------------------|------------|------------|------------|
| Mengelola Kategori             | ✓          | ✓          | -          |
| Mengelola Kelas                | ✓          | ✓          | -          |
| Menambah Materi Pembelajaran   | ✓          | ✓          | -          |
| Memberikan Kode Pendaftaran    | -          | ✓          | -          |
| Mendaftar ke Kelas dengan Kode | -          | -          | ✓          |
| Mengakses Materi Kelas         | -          | -          | ✓          |

---

## **Teknologi yang Digunakan**
- **Back-End**: Laravel
- **Front-End**: React
- **Database**: MySQL

---

## **Kesimpulan**
LMS Mejasita dirancang untuk memberikan pengalaman pembelajaran yang mudah digunakan bagi semua pihak yang terlibat. Dengan pembagian peran yang jelas antara Admin, Mentor, dan Siswa, platform ini memudahkan pengelolaan kelas dan materi pembelajaran, serta memberikan kemudahan bagi siswa untuk mengikuti kelas secara online.

Dokumentasi ini diharapkan dapat memberikan pemahaman yang jelas mengenai aplikasi dan fungsionalitas yang ada. Jika ada pertanyaan lebih lanjut, Anda dapat menghubungi tim pengembang.
