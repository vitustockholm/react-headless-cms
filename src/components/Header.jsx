import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <div>HYPEFORMAT</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/all-products'>All Products</Link>
            </li>
            <li>
              <Link to='/canvases'>Canvases</Link>
            </li>
            <li>
              <Link to='/posters'>Posters</Link>
            </li>
            <li>
              <Link to='/stickers'>Stickers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
