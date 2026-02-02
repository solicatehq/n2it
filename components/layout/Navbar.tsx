import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-900 text-white p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
              <Monitor size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900 leading-none tracking-tight">N2IT</span>
              <span className="text-xs font-semibold text-slate-500 tracking-widest">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-medium transition-colors text-sm uppercase tracking-wide ${
                  isActive(link.path) ? 'text-orange-500 font-bold' : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 flex flex-col animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`px-6 py-3 font-medium border-l-4 transition-all ${
                isActive(link.path) 
                  ? 'bg-slate-50 text-orange-500 border-orange-500' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900 border-transparent hover:border-orange-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 pt-4 mt-2 border-t border-slate-100">
             <Link to="/contact">
              <Button variant="primary" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;