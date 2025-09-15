import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
      alt: "Monastery prayer wheels spinning in morning light"
    },
    {
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center", 
      alt: "Monks in meditation inside ancient monastery hall"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      alt: "Golden Buddha statue with mountain backdrop"
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
      alt: "Colorful prayer flags against blue Himalayan sky"
    },
    {
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
      alt: "Traditional monastery architecture with ornate details"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      alt: "Misty mountains surrounding peaceful monastery"
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
      alt: "Monks performing traditional ceremonial dance"
    },
    {
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop&crop=center",
      alt: "Ancient Buddhist manuscripts and artifacts"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-accent font-medium italic">Gallery</p>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Discover Sikkim's Sacred Landscapes, <span className="text-muted-foreground">Culture, and Spiritual Moments in Photos</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {/* Explore Gallery button overlay on center image */}
              {index === 3 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm">
                    Explore Gallery
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step into Sikkim through our curated gallery, capturing the beauty, culture, and unforgettable moments from our journeys across the sacred monasteries. From iconic landmarks to hidden spiritual gems, experience Sikkim in every image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;