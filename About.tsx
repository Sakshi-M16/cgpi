
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
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

  const clientList = [
    "ABB Limited, Bangalore",
    "Vishwa Vishal Engg. Limited, Bhilai",
    "Bhilai Engg. Corporation Limited, Bhilai",
    "Hi Air Korea (India) Pvt. Limited, South Korea",
    "Sungdo Engg. & Constructions (India) Pvt. Ltd",
    "L&T ECC Division, Hyderabad",
    "GMR Power Project, Raipur",
    "Eureka Forbes Limited, Pune"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              About CGPI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Redefining infrastructure with smart, sustainable and mobile solutions since 2011
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="CGPI facility"
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-6">
                Our Journey Since 2011
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2011, <strong>Chhattisgarh Portable Infratech</strong> began its journey with a clear vision - 
                to redefine infrastructure with smart, sustainable and mobile solutions. Starting from Bhilai, 
                which is an industrial hub of Chhattisgarh, CGPI steadily expanded its operations by combining 
                engineering expertise, customer-centric innovation and a commitment to quality craftsmanship.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                If you're looking for a leading supplier that can supply quality portable buildings at competitive 
                prices, from our extensive range of Portable Cabins, Portable buildings, or Container Conversions 
                or manufacture to your specification then look no further. Our portable Cabins and Portable Buildings 
                have the answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our commitment to excellence and customer satisfaction makes us the preferred choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold text-cgpi-blue mb-6">
                Reliable Partnership
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At CGP Infratech we pride ourselves on being a reliable company that listens to our customers 
                and specializes in quality portable buildings at competitive prices for hire or sale and meeting 
                the customer's requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This enables a good working relationship to develop from day one and continue into the future. 
                We believe in building long-term partnerships with our clients based on trust and quality delivery.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team collaboration"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Quality construction"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold text-cgpi-blue mb-6">
                We Believe in Quality
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Portable Structures are a great alternative to more permanent structures, and offer a brilliant 
                solution for all sorts of customers, from building site owners to small businesses needing a 
                temporary but durable office space, security cabins, site offices, accommodation cabins, etc.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our range of modular buildings and portable buildings is second to none, and includes a comprehensive 
                selection of cabin options which are suitable for use in all sorts of settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any modular buildings and portable buildings quote we provide includes all costs, ensuring that 
                our customers are not hit by any hidden prices. All our buildings are thoroughly renovated and 
                made useable before being sold on, maintaining the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Our Prestigious Clientele
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Trusted by leading companies across India for quality portable infrastructure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientList.map((client, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <p className="text-white font-medium">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">Uncompromising commitment to superior craftsmanship and materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Continuous improvement and adoption of latest technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">Dependable service and timely delivery for all projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
