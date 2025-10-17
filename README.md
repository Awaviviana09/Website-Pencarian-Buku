
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

---

---

---




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
