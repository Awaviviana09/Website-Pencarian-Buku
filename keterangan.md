
<div align="center">

# 📚 **ReactJS Book Search App**
### _A Simple Interactive Book Finder using Props, State, and Hooks_

![React Banner](https://i.pinimg.com/736x/27/0e/86/270e86b75f61af0fd564ae5d07ace6a1.jpg)

</div>

---

## 🧩 **Deskripsi Proyek**

Proyek ini merupakan implementasi sederhana dari aplikasi pencarian buku menggunakan **ReactJS**.  
Aplikasi ini memungkinkan pengguna memasukkan judul buku dan mendapatkan daftar hasil yang berisi **judul serta penulis** buku terkait secara **real-time**.

Struktur file utama:
```

📁 src/
┣ 📜 App.js         # Komponen utama aplikasi
┣ 📜 posts.js       # Berisi logika data dan pemanggilan fungsi
┣ 📜 App.css        # Mengatur tampilan dan gaya antarmuka

````

---

## ⚙️ **Cara Menjalankan Program**

1️⃣ **Clone Repository**
```bash
git clone https://github.com/your-username/react-book-search.git
cd react-book-search
````

2️⃣ **Install Dependencies**

```bash
npm install
```

3️⃣ **Jalankan Aplikasi**

```bash
npm start
```

Buka **[http://localhost:3000](http://localhost:3000)** di browser untuk melihat aplikasi berjalan.

---

## 🌐 **Tampilan Antarmuka Aplikasi**

### 🏠 **Tampilan Awal Program**

![Tampilan Awal](https://github.com/user-attachments/assets/a0417761-5add-446b-9764-3bddb379360b)

> Halaman awal menampilkan **form input pencarian buku**, tombol cari, dan area kosong untuk hasil pencarian.
> Desain sederhana memudahkan pengguna langsung berinteraksi dengan aplikasi.


---

### ✏️ **Tampilan Setelah Input Data**

![Setelah Input](https://github.com/user-attachments/assets/769b031e-9d03-4a8c-880b-a8ff3ed7f8ad)

> Setelah pengguna memasukkan judul buku dan menekan tombol **Search**, aplikasi menampilkan daftar hasil dari **judul buku dan nama penulis** yang relevan.
> Tampilan diperbarui secara **dinamis** sesuai data yang diterima dari API atau fungsi pencarian lokal.


---

## 🧠 **Analisis dan Pemanfaatan React Concepts**

Aplikasi ini dibangun dengan penerapan prinsip utama **ReactJS**, yaitu **Props**, **State**, dan **Hooks** untuk pengelolaan data dan interaksi pengguna.

### 🔹 **a. State dan Hooks**

* `useState` digunakan untuk **menyimpan dan memperbarui keadaan lokal** komponen, seperti data hasil pencarian, input pengguna, dan status pencarian.
* `useEffect` digunakan untuk **menangani efek samping**, misalnya melakukan **pemanggilan API** untuk mengambil data buku setelah komponen dirender.

### 🔹 **b. Props**

* Props digunakan untuk **mengirim data antar komponen**, misalnya dari komponen induk `App` ke komponen anak `BookSearch`.
* Contoh: nilai `bookTitle` dikirim sebagai prop agar komponen anak dapat menggunakannya untuk menampilkan hasil pencarian yang sesuai.

### 🔹 **c. Interaksi dan Perubahan State**

* State diperbarui melalui interaksi pengguna seperti:

  * Mengisi judul buku pada kolom input.
  * Menekan tombol **Search**.
  * Menghapus hasil pencarian.
* Setiap perubahan state secara otomatis **memicu pembaruan tampilan (re-render)** agar hasil terbaru langsung muncul pada layar.

### 🔹 **d. Dynamic Rendering**

* React merender hasil pencarian secara **dinamis berdasarkan perubahan state**.
* Efek visual tambahan dari `App.css` digunakan untuk **meningkatkan tampilan hasil pencarian** dan membuat pengalaman pengguna lebih menarik.

---

## 💡 **Kesimpulan**

Aplikasi ini menunjukkan bagaimana **Props**, **State**, dan **Hooks** dapat dimanfaatkan secara efektif dalam pengembangan aplikasi interaktif berbasis ReactJS.
Melalui konsep **dynamic rendering** dan **state management**, aplikasi dapat menampilkan data secara **real-time**, responsif, dan mudah dikembangkan lebih lanjut.

---

<div align="center">

✨ **Dibuat oleh:**
👩‍💻 Zahwa Genoveva
🎓 *Universitas Gunadarma — Praktikum ILAB, Pemrograman WEB*

</div>

---
