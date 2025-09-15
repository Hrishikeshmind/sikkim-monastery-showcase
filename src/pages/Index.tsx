import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MonasteriesSection from "@/components/MonasteriesSection";
import WhyVisitSection from "@/components/WhyVisitSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MonasteriesSection />
        <WhyVisitSection />
        <GallerySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
