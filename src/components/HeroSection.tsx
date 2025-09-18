import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rongtok-monastery-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Himalayan mountains and monastery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Concentric rings overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vmin] h-[160vmin] rounded-full border border-white/15" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] rounded-full border border-white/15" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vmin] h-[85vmin] rounded-full border border-white/15" />
      </div>

      {/* Left Tag (carousel location) */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-3 text-white/85">
          <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10">◀</button>
          <span className="text-xl md:text-2xl">Kashmir</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center max-w-[1200px] mx-auto px-6">
        <h1 className="text-white font-heading font-extrabold tracking-wide leading-none mb-6" style={{fontFamily: 'Playfair Display'}}>
          <span className="block text-4xl md:text-6xl lg:text-[80px]">EXPERIENCE PEACE</span>
        </h1>
        <h2 className="text-white/95 font-heading leading-none mb-8" style={{fontFamily: 'Playfair Display'}}>
          <span className="block text-3xl md:text-5xl lg:text-[56px]">EXPLORE HERITAGE</span>
        </h2>

        {/* Dots pagination */}
        <div className="flex items-center justify-center gap-6 text-white/80 mb-8">
          {['01','02','03','04','05'].map((n, i) => (
            <span key={n} className={i===0 ? 'font-semibold text-white' : ''}>{n}</span>
          ))}
        </div>

        {/* Search bar */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 bg-white/10 backdrop-blur-md rounded-full p-2 md:p-3 border border-white/20">
            <button className="text-left text-white/90 px-4 py-3 rounded-full hover:bg-white/10">
              <span className="text-sm block opacity-80">Destination</span>
              <span className="text-base">Choose a place</span>
            </button>
            <button className="text-left text-white/90 px-4 py-3 rounded-full hover:bg-white/10">
              <span className="text-sm block opacity-80">Activities & Themes</span>
              <span className="text-base">All activities</span>
            </button>
            <button className="text-left text-white/90 px-4 py-3 rounded-full hover:bg-white/10">
              <span className="text-sm block opacity-80">Average Price</span>
              <span className="text-base">$500 - $1500</span>
            </button>
            <Button className="rounded-full px-6 md:px-8 bg-white text-gray-900 hover:bg-white/90">Search</Button>
          </div>
        </div>
      </div>

      {/* decorative star bottom-right */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="w-6 h-6 rotate-45 bg-white/80 rounded-sm"></div>
      </div>
    </section>
  );
};

export default HeroSection;