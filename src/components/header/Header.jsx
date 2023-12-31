import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to='/' className="logo">EstatesZen</Link>

      <nav>
        <ul className='flex'>
          <Link>Services</Link>
          <Link>About Us</Link>
          <Link to='/properties'>All Properties</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
