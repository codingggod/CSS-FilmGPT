import React from 'react';
import { Film } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-black/95 text-white fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:text-purple-400 transition">
            <Film className="h-8 w-8" />
            <span className="text-xl font-bold">FilmGPT</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-purple-400 transition ${
                location.pathname === '/' ? 'text-purple-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-purple-400 transition ${
                location.pathname === '/about' ? 'text-purple-400' : ''
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}