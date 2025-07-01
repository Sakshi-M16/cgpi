
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const observerRef = useRef<IntersectionObserver>();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      title: "Office Address",
      details: "H.No. 6, St. 1, Maitri Kunj, Risali Bhilai (C.G) 490 006",
      icon: "🏢"
    },
    {
      title: "Works Address",
      details: "Chawani Chowk, Light Industrial Area, Bhilai CG",
      icon: "🏭"
    },
    {
      title: "Phone",
      details: "Siddharth Mukherjee: +91 9165271111",
      icon: "📞"
    },
    {
      title: "Email",
      details: "info@cgpipl.com",
      icon: "✉️"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get in touch for quality portable building solutions and expert consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ready to discuss your portable building requirements? We're here to help with expert advice and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold gradient-text mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-cgpi-blue focus:ring-cgpi-blue"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-cgpi-blue focus:ring-cgpi-blue"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-cgpi-blue focus:ring-cgpi-blue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-cgpi-blue focus:ring-cgpi-blue"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-cgpi-blue focus:ring-cgpi-blue"
                        placeholder="Please describe your requirements in detail..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-cgpi-blue to-cgpi-blue-light hover:from-cgpi-blue-light hover:to-cgpi-blue text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="animate-on-scroll space-y-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold gradient-text mb-6">
                    Visit Our Facility
                  </h3>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">📍</div>
                      <p className="font-medium">Bhilai, Chhattisgarh</p>
                      <p className="text-sm">Industrial Hub Location</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cgpi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">🕒</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cgpi-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">⚡</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Quick Response</p>
                        <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-4">
                    Why Choose CGPI?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-yellow-300">✓</span>
                      <span>12+ Years of Industry Experience</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-yellow-300">✓</span>
                      <span>Quality Buildings at Competitive Prices</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-yellow-300">✓</span>
                      <span>Professional Installation Services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-yellow-300">✓</span>
                      <span>Comprehensive After-Sales Support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-yellow-300">✓</span>
                      <span>Trusted by Leading Companies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              For urgent requirements or emergency installations, call us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919165271111" 
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
              >
                <span className="text-2xl">📞</span>
                <span className="font-semibold">+91 9165271111</span>
              </a>
              <a 
                href="mailto:info@cgpipl.com" 
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
              >
                <span className="text-2xl">✉️</span>
                <span className="font-semibold">info@cgpipl.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
