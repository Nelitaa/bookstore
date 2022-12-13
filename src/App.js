import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './redux/books/Books';
import ListBooks from './components/ListBooks';
import Categories from './redux/categories/Categories';

function App() {
  return (
    <body>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<ListBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </body>
  );
}

export default App;
