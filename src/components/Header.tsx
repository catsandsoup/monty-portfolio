
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-medium text-gray-900 hover:text-[#00a5ee] transition-colors"
            onClick={closeMenu}
          >
            Monty Giovenco
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Experience & Projects
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About & Resume
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-gray-900 hover:text-gray-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl">
          <nav className="container mx-auto px-8 pt-32">
            <div className="flex flex-col space-y-8">
              <Link 
                to="/" 
                className="text-4xl font-medium text-gray-900 hover:text-[#00a5ee] transition-colors tracking-tight"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/experience" 
                className="text-4xl font-medium text-gray-900 hover:text-[#00a5ee] transition-colors tracking-tight"
                onClick={closeMenu}
              >
                Experience & Projects
              </Link>
              <Link 
                to="/about" 
                className="text-4xl font-medium text-gray-900 hover:text-[#00a5ee] transition-colors tracking-tight"
                onClick={closeMenu}
              >
                About & Resume
              </Link>
              <Link 
                to="/contact" 
                className="text-4xl font-medium text-gray-900 hover:text-[#00a5ee] transition-colors tracking-tight"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
