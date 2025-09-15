import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            We specialize in creating spiritual journeys across <span className="text-accent">Sikkim's sacred monasteries</span>,
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            blending must-see ancient temples with hidden spiritual gems to give you a 
            true sense of this mystical Himalayan kingdom.
          </p>
        </div>
        
        {/* Feature Image Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-96 bg-gradient-to-r from-primary to-accent">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/90 to-accent/90">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Sacred Meditation Halls</h3>
              <p className="text-white/90 mb-6 max-w-md">Experience the tranquility of ancient Buddhist practices in monastery halls that have echoed with prayers for centuries.</p>
              <Button variant="hero">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Our team is made up of Sikkim enthusiasts, local monks, and spiritual guides 
              dedicated to crafting unique and meaningful monastery experiences.
            </p>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              From Gangtok's vibrant monasteries to the serene temples of Pelling, and from the sacred 
              landscapes of Yuksom to the mystical heights of North Sikkim, we strive to bring out the 
              spiritual essence of each sacred site.
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">of visitors find spiritual peace and recommend us to friends and family.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">sacred monasteries and temples visited each year to curate authentic experiences.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">average rating from hundreds of spiritual seekers and peaceful travelers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;