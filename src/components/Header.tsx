
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium hover:text-accent transition-colors">
          MG
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
