import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">🏔️ Sikkim Monasteries</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#monasteries" className="text-white/90 hover:text-white transition-colors">Monasteries</a>
            <a href="#gallery" className="text-white/90 hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Visit Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;