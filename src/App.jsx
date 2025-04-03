import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import AlertWelcome from "./components/Welcome";
import HorrorBooks from "./Horror/horror_updated.json";
import BookList from "./components/BooksList";
import CadoBook from "./components/CadoBook";
import Bestseller from "./components/Bestseller.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <main className="flex-grow-1">
          <AlertWelcome />
          <BookList BooksArray={HorrorBooks} />
          <CadoBook libro={HorrorBooks[0]} />
          <Bestseller libri={HorrorBooks.slice(1, 4)} />
        </main>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
