import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar bg-white py-4 px-5 nav-style">
        <Link to="/" className="nav-brand">Bookstore CMS</Link>
        <ul className="nav nav-titles">
          <li><Link to="/books" className="nav-link text-uppercase navbar-text">books</Link></li>
          <li><Link to="/categories" className="nav-link text-uppercase navbar-text">categories</Link></li>
        </ul>
        <button type="button" className="btn rounded-pill border"><img src="/user-3-fill.png" alt="Avatar Logo" width={20} /></button>
      </nav>
    </header>
  );
}

export default Header;
