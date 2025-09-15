import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rumtek-monastery-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Rumtek Monastery with majestic Himalayan mountains and terraced fields in Sikkim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>
      
      {/* Gradient Overlay for extra beauty */}
      <div 
        className="absolute inset-0 z-10 opacity-60"
        style={{ background: 'var(--hero-gradient)' }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <p className="text-white/90 text-lg md:text-xl mb-4 italic">Discover Sikkim</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          A Journey of <span className="text-yellow-300">Spirituality</span>,<br />
          <span className="text-blue-200">Serenity</span>, and Natural Beauty
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Step into the heart of the Himalayas with curated monastery experiences that showcase timeless traditions, sacred temples, and breathtaking landscapes.
        </p>
        <Button variant="hero" size="xl" className="font-semibold">
          Explore Sacred Monasteries
        </Button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;