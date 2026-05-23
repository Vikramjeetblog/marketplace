import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustHighlights from "../components/home/TrustHighlights";
import SearchAndCategories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";

import HowItWorks from "../components/home/HowItWorks";
import WhyChooseRupantar from "../components/home/WhyChoose";
import AppPromo from "../components/home/AppPromo";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="font-sans bg-slate-50">
      <Navbar />
      <Hero />
      <TrustHighlights />
      <SearchAndCategories />
      <FeaturedProducts />
      
      <HowItWorks />
      <WhyChooseRupantar />
      <AppPromo />
      <Footer />
    </div>
  );
};

export default HomePage;