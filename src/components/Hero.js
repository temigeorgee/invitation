import React from 'react';
import { Link } from 'react-router-dom';
import Couple from '../images/couple.PNG';

const Hero = () => {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(to right, #fff, #ffff0)',
        }}
      >
        <img
          src={Couple}
          alt=""
          style={{ marginTop: '-4rem', width: '34rem' }}
        />
        <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-black flex items-center mb-3 ">
          Joe
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          Doe
        </h1>
        <p className="text-gray-600 lg:text-xl sm:text-sm text-center mb-5">
          Welcome to the website for our big day. Here you can find
          <br /> information about the locations and the game for our wedding.
          Have fun!
        </p>
        <Link
          to="/"
          className="py-2 px-8 text-white bg-purple-800 rounded-md text-xl hover:bg-purple-500 hover:text-black transition duration-300 ease-in-out flex items-center animate-bounce"
        >
          Reservation
          <svg
            className="w-6 h-6 ml-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </main>
    </>
  );
};

export default Hero;
