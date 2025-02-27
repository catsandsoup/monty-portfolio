
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <div className="py-section">
        <FeaturedWork />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
