import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="home-header">
      <h2 className="logo">Devmountain Eatery</h2>
      <nav className="nav-wrapper">
        <Link to=''>
          <button className="nav-btn">Home</button>
        </Link>
        <Link to='/newRecipe'>
          <button className="nav-btn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
