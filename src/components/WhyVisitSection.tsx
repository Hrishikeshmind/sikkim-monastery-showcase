const WhyVisitSection = () => {
  const features = [
    {
      number: "01",
      title: "Authentic Spirituality",
      description: "We're passionate about introducing you to the heart of Buddhist culture, ensuring an enriching journey.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&crop=center"
    },
    {
      number: "02", 
      title: "Expert Guidance",
      description: "Our guides and monks are deeply familiar with Sikkim's monasteries, ensuring enlightening experiences.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=200&fit=crop&crop=center"
    },
    {
      number: "03",
      title: "Personalized Spiritual Journey",
      description: "Each traveler is unique, and we work to customize trips to fit your spiritual preferences and seeking.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center"
    },
    {
      number: "04",
      title: "Sustainable Pilgrimage",
      description: "We support responsible travel that respects local communities and preserves Sikkim's spiritual heritage.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-right mb-12">
          <p className="text-accent font-medium italic mb-2">Why visit our monasteries</p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choosing the right spiritual guide <span className="text-muted-foreground">can make all the difference in your journey.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <span className="text-6xl font-light text-muted-foreground">{feature.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                  
                  {index === 1 && (
                    <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-primary to-accent">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative line for non-image items */}
              {index !== 1 && (
                <div className="mt-8 border-b border-dashed border-muted-foreground/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisitSection;