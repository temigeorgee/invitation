import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ click, handleToggle }) => {
  return (
    <div
      className={
        click
          ? 'grid grid-rows-4 text-center items-center bg-gray-600'
          : 'hidden'
      }
      onClick={handleToggle}
    >
      <Link className="p-4 hover:text-purple-500" to="/">
        Home
      </Link>
      <Link className="p-4 hover:text-purple-500" to="/reservation">
        Reservation
      </Link>
      <Link className="p-4 hover:text-purple-500" to="/gift">
        Gift
      </Link>
      <Link className="p-4 hover:text-purple-500" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Menu;
