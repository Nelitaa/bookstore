import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './pages/Books';
import ListBooks from './components/ListBooks';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<ListBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
