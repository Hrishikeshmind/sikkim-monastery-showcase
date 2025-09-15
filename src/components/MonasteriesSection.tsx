import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MonasteriesSection = () => {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      description: "The largest monastery in Sikkim, home to the Karmapa and center of the Karma Kagyu lineage with stunning architecture and spiritual significance.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center",
      location: "Gangtok"
    },
    {
      name: "Pemayangtse Monastery",
      description: "One of the oldest monasteries in Sikkim, offering breathtaking views of Kanchenjunga and housing ancient Buddhist sculptures and paintings.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop&crop=center",
      location: "Pelling"
    },
    {
      name: "Enchey Monastery",
      description: "A mystical monastery known for its annual Cham dance and spiritual energy, located amidst peaceful pine forests with panoramic mountain views.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      location: "Gangtok"
    }
  ];

  return (
    <section id="monasteries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-accent text-lg font-medium italic">Sacred Destinations</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Journey Through Sikkim's<br />
              <span className="text-muted-foreground">Most Sacred Monasteries</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover Sikkim's spiritual heart, where ancient Buddhist traditions blend with 
              Himalayan serenity in every prayer wheel and temple bell.
            </p>
            <Button variant="outline">
              Explore All Monasteries
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {monasteries.map((monastery, index) => (
            <Card key={index} className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={monastery.image} 
                  alt={monastery.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{monastery.name}</h3>
                <p className="text-sm text-accent font-medium mb-3">{monastery.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {monastery.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonasteriesSection;