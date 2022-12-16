import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Books';
import ListBooks from './components/ListBooks';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <div className="container pt-5 bg-light">
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<ListBooks />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
