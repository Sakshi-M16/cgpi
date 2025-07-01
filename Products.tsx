
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductsPage = () => {
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

  const products = [
    {
      title: "Construction Site Office",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Professional site offices for construction projects with all essential amenities",
      features: ["Climate controlled", "Electrical fittings", "Security features", "Quick installation"]
    },
    {
      title: "Accommodation Cabins",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Comfortable accommodation solutions for site workers with modern facilities",
      features: ["Private rooms", "Common areas", "Kitchen facilities", "Bathroom facilities"]
    },
    {
      title: "Security Guard Cabins",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Secure and comfortable guard posts with surveillance capabilities",
      features: ["CCTV ready", "Communication systems", "Weather resistant", "Compact design"]
    },
    {
      title: "Portable Toilets",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
      description: "Hygienic and modern portable toilet solutions for any location",
      features: ["Hygienic design", "Water efficient", "Ventilation system", "Easy maintenance"]
    },
    {
      title: "Portable Bunk House",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Multi-occupancy accommodation with individual privacy and comfort",
      features: ["Multiple beds", "Storage space", "Common facilities", "Modular design"]
    },
    {
      title: "Office Cabins",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Professional office spaces with modern amenities and connectivity",
      features: ["Air conditioning", "Network ready", "Modern interiors", "Meeting spaces"]
    }
  ];

  const services = [
    "Site Visits & Assessment",
    "Site Preparations",
    "Electrical Connections",
    "Flexible & Mobile Solutions",
    "Professional Installation",
    "Maintenance & Repairs",
    "Professional Design Services"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Buy a Cabin
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Quality portable buildings at competitive prices for all your business needs
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Exceptional Quality • Outstanding Attention to Detail
            </Badge>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-6">
                Excellence in Every Detail
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At CGPIPL we understand that second best has no place in a competitive environment, as do our clients. 
                Exceptional quality and outstanding attention to detail is matched by competitive pricing and dedication 
                to meeting deadlines that characterizes a CGPIPL job.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Modular buildings and portable buildings are a great alternative to more permanent structures, and offer 
                a brilliant solution for all sorts of customers, from building site owners to small businesses needing 
                a temporary but durable office space.
              </p>
              <Button asChild className="bg-cgpi-blue hover:bg-cgpi-blue-light text-white">
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Professional construction site"
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive selection of portable buildings suitable for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-cgpi-blue rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Quality construction process"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-3xl font-playfair font-bold gradient-text mb-6">
                Quality Assurance
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Any modular buildings and portable buildings quote we provide includes all costs, ensuring that 
                our customers are not hit by any hidden prices. Those buying our modular buildings and portable 
                buildings can be sure that all are thoroughly renovated and made useable before being sold on.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                All operatives are time-served, experienced carpenters, plumbers, electricians and cabin fitters 
                capable of working under minimum supervision. Modular building systems are based on linkable modules, 
                generally 8ft-10ft wide and in lengths ranging from 20ft-46ft.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Units come ready to use and can be installed on site within days, providing immediate solutions 
                for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Services Offered
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Comprehensive support from design to installation and maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-900 font-bold text-lg">✓</span>
                  </div>
                  <p className="text-white font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hire & Purchase Options */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-8">
              Hire & Purchase Options
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-12">
              Adding an extra room for an office or factory has never been easier or more affordable. 
              Say goodbye to costly room extensions and alterations, and hello to our portable cabin solutions.
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed mb-8">
                Portable, economical and comfortable solutions designed for every project requirement. 
                Our flexible options ensure you get exactly what you need, when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cgpi-blue hover:bg-cgpi-blue-light text-white">
                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-cgpi-blue text-cgpi-blue hover:bg-cgpi-blue hover:text-white">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
