
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium text-gray-900 hover:text-accent transition-colors">
          Monty Giovenco
        </Link>
        <div className="flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
