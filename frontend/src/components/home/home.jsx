import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyGames app</h1>
      <p className="text-lg mb-8">Please choose an option below:</p>
      <nav>
        <ul className="flex">
          <li className="mr-4">
            <Link to="/game1">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                R-P-S-L-P
              </button>
            </Link>
          </li>
          <li>
            <Link to="/game2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Tamagotchi
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2 className='mt-5'>Records:</h2>
      </div>
    </div>
  );
};

export default Home;
