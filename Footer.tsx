
import { Link } from "react-router-dom";
import { Home, Info, Package, Contact } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Products", path: "/products", icon: Package },
    { name: "Services", path: "/services", icon: Package },
    { name: "Contact Us", path: "/contact", icon: Contact },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <span className="text-2xl font-playfair font-bold text-white">
                  Chhattisgarh Portable Infratech
                </span>
                <p className="text-gray-300 text-sm">Quality Portable Buildings Since 2011</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading manufacturer of portable cabins, prefab offices, and modular buildings in Chhattisgarh. 
              We specialize in providing quality portable buildings at competitive prices for hire or sale.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Office:</strong> H.No. 6, St. 1, Maitri Kunj, Risali Bhilai (C.G) 490 006</p>
              <p><strong>Works:</strong> Chawani Chowk, Light Industrial Area, Bhilai CG</p>
              <p><strong>Phone:</strong> +91 9165271111</p>
              <p><strong>Email:</strong> info@cgpipl.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Portable Office Cabins</li>
              <li>Security Guard Cabins</li>
              <li>Site Accommodation</li>
              <li>Modular Buildings</li>
              <li>Container Conversions</li>
              <li>Installation & Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Chhattisgarh Portable Infratech. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Designed with excellence for portable infrastructure solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};
