
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Package, Info, Contact } from "lucide-react";

const HomePage = () => {
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: Home,
      title: "Portable Office Cabins",
      description: "High-quality flush doors and aluminum sliding windows with all required safety accessories.",
    },
    {
      icon: Package,
      title: "Electrical Fittings",
      description: "Approved electrical fittings with high standard wiring to handle computers, AC, and other equipment.",
    },
    {
      icon: Info,
      title: "Custom Interiors",
      description: "Professional interior design for portable cabins and office spaces to meet your specific needs.",
    },
    {
      icon: Contact,
      title: "Quick Installation",
      description: "Fast delivery and installation services for immediate use across all locations in India.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Modern construction site"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              Welcome to
              <span className="block text-yellow-300">Chhattisgarh Portable Infratech</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Porta Cabins | Portable Offices | Prefab Cabins Manufacturers
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto">
              We specialize in manufacturing and supplying Portable Cabins, Security Cabins, Portable Buildings 
              and Modular Cabins to many market sectors throughout Chhattisgarh (Central India).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <div className="w-16 h-16 bg-white/10 rounded-full glass-effect"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse-slow">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-lg glass-effect rotate-45"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-6">
                Quality Portable Buildings at Competitive Prices
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We hold a wide range of Modular Buildings and Portable Cabins to meet your business needs. 
                Our portable buildings provide a safe & comfortable working environment suitable for almost any location.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The temporary buildings are high quality and delivered for instant use – our portable cabins 
                are about efficiency as much as comfort and quality. From single-office cabins to linked 
                portable building complexes which include toilets, meeting rooms, kitchens and reception areas.
              </p>
              <Button asChild className="bg-cgpi-blue hover:bg-cgpi-blue-light text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Professional working environment"
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              Our Portable Cabin Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover why our portable cabins are the preferred choice for businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cgpi-blue to-cgpi-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your portable cabin requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cgpi-blue">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
