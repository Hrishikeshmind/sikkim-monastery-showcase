import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you offer customizable monastery visit itineraries?",
      answer: "Yes! We specialize in creating personalized itineraries tailored to your spiritual interests. Whether you're interested in meditation retreats, cultural landmarks, or unique monastery experiences, our team will help craft the perfect sacred journey."
    },
    {
      question: "What is the best time to visit Sikkim's monasteries?",
      answer: "The best time to visit is from March to May and September to November when the weather is clear and you can enjoy stunning views of the Himalayas. These months also coincide with many monastery festivals and ceremonies."
    },
    {
      question: "Are your monastery tours guided by local monks?",
      answer: "Many of our tours include guidance from local monks and spiritual teachers who can provide authentic insights into Buddhist practices, monastery history, and spiritual teachings."
    },
    {
      question: "Do you provide assistance with permits and accommodation?",
      answer: "Absolutely! We handle all necessary permits for monastery visits and restricted areas, and can arrange accommodations ranging from monastery guesthouses to comfortable hotels near sacred sites."
    },
    {
      question: "What is included in the monastery tour packages?",
      answer: "Our packages typically include guided monastery visits, cultural experiences, meditation sessions, traditional meals, accommodation, transportation, and all necessary permits. Specific inclusions vary by package."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-right mb-4">
          <p className="text-accent font-medium italic">FAQs</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Explore our FAQ section for <span className="text-muted-foreground">answers on spiritual journey planning.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We're here to help! Browse our FAQ section to get all the information you need to plan your perfect monastery pilgrimage.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=400&fit=crop&crop=center" 
                  alt="Aerial view of monastery complex"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40"></div>
              </div>
              
              <Card className="p-8 text-center bg-card shadow-2xl">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Need more help planning your perfect monastery journey? Our team is here to assist you with any questions or special requests.
                </p>
                <Button variant="monastery" size="lg" className="w-full">
                  Contact Us
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;