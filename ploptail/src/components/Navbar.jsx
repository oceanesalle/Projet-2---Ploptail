import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Cocktails</Link>
        </li>
        <li>
          <Link to="/favoris">Favorites</Link>
        </li>
        <li>
          <img src="https://i.imgur.com/ivFXOin.png" alt="logo" />
        </li>
        <li>
          <Link to="/recherche">Search</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
