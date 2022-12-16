import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container bg-white px-5">
      <nav className="navbar">
        <div className="navbar">
          <Link to="/" className="navbar-brand text-primary">Bookstore CMS</Link>
          <ul className="nav">
            <li className="nav-item small"><Link to="/books" className="nav-link text-uppercase navbar-text">books</Link></li>
            <li className="nav-item small"><Link to="/categories" className="nav-link text-uppercase navbar-text">categories</Link></li>
          </ul>
        </div>
        <button type="button" className="btn rounded-pill border"><img src="/user-3-fill.png" alt="Avatar Logo" width={20} /></button>
      </nav>
    </header>
  );
}

export default Header;
