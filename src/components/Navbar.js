import React from 'react';
import { Link } from 'react-router-dom';
import Ring from '../images/Ring.PNG';

const Navbar = ({ handleToggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm">
      <Link to="/" className="pl-8 flex justify-start items-center">
        <img src={Ring} alt="" style={{ width: '3rem' }} />
        <h3 className="pl-2 text-xl">Bells</h3>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={handleToggle}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden ">
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
    </nav>
  );
};

export default Navbar;
