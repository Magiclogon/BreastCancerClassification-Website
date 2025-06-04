
import { useState } from 'react';
import { Ribbon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Ribbon className="h-6 w-6 text-pink-500" />
          <Link to="/" className="font-bold text-xl text-pink-500">
            Classification BI-RADS
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            className="h-6 w-6 text-pink-500"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/analyze" className="text-gray-700 hover:text-pink-500 font-medium">Analyser</Link>
          <Link to="/about" className="text-gray-700 hover:text-pink-500 font-medium">A propos</Link>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute left-0 right-0 shadow-md z-50 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/analyser" 
              className="text-gray-700 hover:text-pink-500 font-medium p-2 hover:bg-pink-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Analyser
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-pink-500 font-medium p-2 hover:bg-pink-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              A propos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
