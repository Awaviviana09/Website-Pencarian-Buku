// App.js
import "./App.css";
import BookSearch from "./components/posts";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="https://i.pinimg.com/564x/e4/cf/c5/e4cfc570a7ccc0e6a8177797c52c1e2c.jpg" alt="Book Cover" className="cover-image" />
        <div className="overlay">
          <h1 className="app-title"> Temukan Buku yang Anda Cari</h1>
          <p className="app-description">
            Created by. Zahwa Genoveva - 3IA12 🚀
          </p>
        </div>
      </div>
      <div className="container">
        <BookSearch />
      </div>
    </div>
  );
}

export default App;
