import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustHighlights from "../components/home/TrustHighlights";
import DiscoverySection from "../components/home/DiscoverySection"
import SearchAndCategories from "../components/home/Categories";
import FeaturedProductsSection from "../components/home/FeaturedProducts";
import SellAssetsSection from "../components/home/SellAssetsSection";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseRupantar from "../components/home/WhyChoose";
import FAQSection from "../components/home/FAQSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AppPromo from "../components/home/AppPromo";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="font-sans bg-slate-50">
      <Navbar />
      <Hero />
      
      <DiscoverySection/>
      <SearchAndCategories />
      <FeaturedProductsSection />
      <SellAssetsSection/>

      <HowItWorks />
      <WhyChooseRupantar />
      <TrustHighlights />
        <TestimonialsSection/>
      <FAQSection/>
      <AppPromo />
    
      <Footer />
    </div>
  );
};

export default HomePage;