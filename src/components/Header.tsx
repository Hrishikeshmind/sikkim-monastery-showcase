import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-5">
        <nav className="grid grid-cols-3 items-center">
          {/* Left: Logo in script font */}
          <div className="flex items-center">
            <a href="#home" className="text-white/95" style={{fontFamily: 'Parisienne'}}>
              <span className="text-3xl">Travalgo</span>
            </a>
          </div>

          {/* Center: Navigation */}
          <ul className="hidden md:flex justify-center items-center gap-8">
            <li><a href="#destination" className="text-white/80 hover:text-white transition-colors">Destination</a></li>
            <li><a href="#activity" className="text-white/80 hover:text-white transition-colors">Our Activity</a></li>
            <li><a href="#accompanied" className="text-white/80 hover:text-white transition-colors">Accompanied</a></li>
            <li><a href="#cruises" className="text-white/80 hover:text-white transition-colors">Cruises</a></li>
            <li><a href="#who" className="text-white/80 hover:text-white transition-colors">Who</a></li>
          </ul>

          {/* Right: Contact pill */}
          <div className="flex justify-end">
            <Button className="bg-white/10 hover:bg-white/20 text-white rounded-full px-5 py-2 backdrop-blur">
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;