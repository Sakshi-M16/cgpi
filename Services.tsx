
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServicesPage = () => {
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

  const services = [
    {
      title: "Designing Services",
      icon: "🎨",
      description: "Our architects will work with you to design a building that meets all your requirements and your budget.",
      details: "We will provide all the drawings, plans and specification details you need to support your decision making and to meet the requirements of the planning and Building Control authorities."
    },
    {
      title: "Free Site Inspection",
      icon: "🔍",
      description: "Comprehensive site assessment and evaluation services included in our pricing.",
      details: "The surveys we need to carry out to assess your site, the electrical testing and certification of your building and the completion of health and safety plans for your project are all included in our price."
    },
    {
      title: "Post Sales Support",
      icon: "🛠️",
      description: "Ongoing support and maintenance services for optimal performance.",
      details: "We offer a range of maintenance, reconfiguration, refurbishment, relocation and repair services to ensure your building continues to provide optimum performance for life."
    },
    {
      title: "Visit CGP Infratech",
      icon: "🏢",
      description: "Experience our quality firsthand with facility visits and project tours.",
      details: "We are happy to arrange a visit to a recently completed project, to one of our Hire Centres or to our head office and factory in Bhilai, where you can see for yourself the quality manufacturing processes."
    }
  ];

  const faqs = [
    {
      question: "What is the difference between a 'modular' and a 'portable' building?",
      answer: "A portable building is a stand-alone, self-contained building that is delivered in one piece by road and installed on site ready for immediate use. A modular building is constructed from two or more individual building modules. The modules are delivered to site by road, craned into position and connected together to create buildings of any size, with multiple storeys, to meet individual requirements."
    },
    {
      question: "What are your buildings made from?",
      answer: "CGP Infratech buildings are constructed with a steel outer wall, steel roof and galvanised steel floor frame. The walls are injected with foam insulation to give them a high thermal efficiency. This method of construction provides you with a building that requires very little maintenance and offers a high degree of comfort, all year round."
    },
    {
      question: "What preparations do I need to make before delivery?",
      answer: "You will need to keep access to the site completely clear of obstructions, allowing enough space for the vehicle delivering the building. Suitable foundations or a level hard-standing area must be available to accommodate the building. CGP Infratech will advise you on these matters during a site inspection."
    },
    {
      question: "What type of foundations will my CGP Infratech building require?",
      answer: "This depends on the surface the building will be standing on, and the type of building. Portable buildings that will be located on hard standing will only require shims. For other surfaces, or for modular buildings, only pad foundations are necessary. The foundations required will depend on the site conditions, the building weight and floor loads, so we will always advise you on your individual requirements."
    },
    {
      question: "How are CGP Infratech buildings delivered?",
      answer: "We will make all arrangements for the delivery of your building. Modular and portable buildings are transported by road on a flat-bed lorry or trailer platform and positioned using a lorry-mounted or standard crane. Modular buildings are then mechanically moved into position using lifting eyes."
    },
    {
      question: "What can you do to enhance the security of my modular or portable building?",
      answer: "A range of optional extras is available to enhance the security of your building and prevent break-ins. These range from steel shutters and window guards to intruder alarm systems."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Portable Cabin & Infrastructure Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive services from design to installation and ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* About Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-6">
                About Our Services
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Safety underpins all operations at CGPIPL and in these difficult environments our in-depth 
                understanding of requirements of the Health and Safety Executive together with our own safety 
                policies and procedures recognises the specialised nature of this work.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Exceptional quality and outstanding attention to detail, matched by competitive pricing and 
                dedication to meeting deadlines characterise a CGPIPL job. Our portable and modular buildings 
                services are designed to meet the highest industry standards.
              </p>
              <Button asChild className="bg-cgpi-blue hover:bg-cgpi-blue-light text-white">
                <Link to="/contact">Request Service Quote</Link>
              </Button>
            </div>
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
                alt="Professional construction services"
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive portable and modular building services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              Our Service Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Streamlined approach ensuring quality delivery from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial assessment and requirement gathering" },
              { step: "02", title: "Design", desc: "Custom design and planning phase" },
              { step: "03", title: "Manufacturing", desc: "Quality construction in our facility" },
              { step: "04", title: "Installation", desc: "Professional on-site installation and support" }
            ].map((item, index) => (
              <div key={index} className="animate-on-scroll text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-cgpi-blue to-cgpi-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about our services and products
            </p>
          </div>

          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-md border-0 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-cgpi-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cgpi-blue to-cgpi-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our expert team for a free consultation and personalized service proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cgpi-blue">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
