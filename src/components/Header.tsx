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
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };
  return <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-medium text-gray-900 hover:text-accent transition-colors" onClick={closeMenu}>
            Monty Giovenco
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Experience & Projects
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About & Resume</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 -mr-2 text-gray-900 hover:text-gray-600 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg" style={{
      paddingTop: '5rem'
    }}>
          <nav className="container mx-auto px-8">
            <div className="flex flex-col space-y-8">
              <Link to="/" className="text-[2rem] font-medium text-gray-900 hover:text-accent transition-colors tracking-tight" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/experience" className="text-[2rem] font-medium text-gray-900 hover:text-accent transition-colors tracking-tight" onClick={closeMenu}>
                Experience & Projects
              </Link>
              <Link to="/about" className="text-[2rem] font-medium text-gray-900 hover:text-accent transition-colors tracking-tight" onClick={closeMenu}>
                Resume
              </Link>
              <Link to="/contact" className="text-[2rem] font-medium text-gray-900 hover:text-accent transition-colors tracking-tight" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </nav>
        </div>}
    </>;
};
export default Header;