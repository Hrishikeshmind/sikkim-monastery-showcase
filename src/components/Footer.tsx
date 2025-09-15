import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div 
        className="relative bg-gradient-to-r from-primary/90 to-primary bg-cover bg-center py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Mail className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest monastery tours, spiritual events, and Sikkim travel insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
            />
            <Button variant="secondary" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-background border-t">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explore Sikkim with Us
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Step into the heart of the Himalayas with curated monastery experiences that showcase Sikkim's timeless Buddhist traditions, sacred temples, and breathtaking landscapes guided by local experts.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">© 2025 Sikkim Monasteries. All rights reserved.</p>
                <p className="font-medium text-foreground">
                  In partnership with <span className="text-accent">Sikkim Tourism Department, Government of Sikkim</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#monasteries" className="text-muted-foreground hover:text-accent transition-colors">
                    Monasteries
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Travel Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    Special Offers
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Connect With Us</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 3592 123456</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@sikkimmonasteries.com</span>
                </div>
                <div className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">Gangtok, Sikkim 737101</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Supported by</span>
                <span className="font-semibold text-foreground">Government of Sikkim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;