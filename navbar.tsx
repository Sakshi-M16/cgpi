
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Info, Package, Contact } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Products", path: "/products", icon: Package },
    { name: "Services", path: "/services", icon: Package },
    { name: "Contact Us", path: "/contact", icon: Contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-playfair font-bold gradient-text">
                CGPI
              </span>
              <p className="text-xs text-gray-600 leading-tight">Portable Infratech</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cgpi-blue/10 ${
                  isActive(item.path)
                    ? "bg-cgpi-blue text-white shadow-md"
                    : isScrolled
                    ? "text-gray-700 hover:text-cgpi-blue"
                    : "text-gray-700 hover:text-cgpi-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-cgpi-blue to-cgpi-blue-light hover:from-cgpi-blue-light hover:to-cgpi-blue text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white rounded-lg shadow-lg mt-2`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 transition-colors ${
                  isActive(item.path)
                    ? "bg-cgpi-blue text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-gradient-to-r from-cgpi-blue to-cgpi-blue-light text-white">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
