
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium text-gray-900 hover:text-accent transition-colors"
          onClick={closeMenu}
        >
          Monty Giovenco
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
            Portfolio
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40 animate-fade-down">
            <div className="flex flex-col items-center justify-start pt-8 space-y-8 text-lg">
              <Link 
                to="/" 
                className="w-full text-center py-3 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/portfolio" 
                className="w-full text-center py-3 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className="w-full text-center py-3 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="w-full text-center py-3 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
