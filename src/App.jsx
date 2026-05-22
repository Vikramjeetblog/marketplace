import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Smartphone,
  Monitor,
  Car,
  Armchair,
  Shirt,
  Music,
  Home,
  Camera,
  ShieldCheck,
  Tag,
  ThumbsUp,
  CheckCircle,
  Star,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Truck,
  UserCheck,
  Heart,
  Award,
  UploadCloud,
  ClipboardCheck,
  DollarSign,
} from "lucide-react";

// --- MOCK DATA ---

const categories = [
  { name: "Electronics", icon: Monitor },
  { name: "Mobiles", icon: Smartphone },
  { name: "Appliances", icon: Home },
  { name: "Furniture", icon: Armchair },
  { name: "Instruments", icon: Music },
  { name: "Fashion", icon: Shirt },
  { name: "Home Decor", icon: Star },
];

const products = [
  {
    id: 1,
    title: "Apple iPhone 13 (128GB)",
    oldPrice: "₹69,900",
    price: "₹42,000",
    condition: "Excellent",
    location: "Siliguri",
    img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: 'Samsung 55" 4K Smart TV',
    oldPrice: "₹54,000",
    price: "₹28,500",
    condition: "Like New",
    location: "Jalpaiguri",
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Canon EOS 200D II DSLR",
    oldPrice: "₹58,000",
    price: "₹34,000",
    condition: "Good",
    location: "Cooch Behar",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "LG 260L Frost Free Fridge",
    oldPrice: "₹26,500",
    price: "₹14,000",
    condition: "Fair",
    location: "Alipurduar",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Yamaha F310 Acoustic Guitar",
    oldPrice: "₹10,500",
    price: "₹6,000",
    condition: "Excellent",
    location: "Darjeeling",
    img: "https://images.unsplash.com/photo-1550226891-ef816aed4ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Premium L-Shape Sofa Set",
    oldPrice: "₹45,000",
    price: "₹22,000",
    condition: "Like New",
    location: "Siliguri",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
];

const trustFeatures = [
  {
    title: "Fair Price Evaluation",
    desc: "Get the best market value.",
    icon: DollarSign,
  },
  { title: "Doorstep Pickup", desc: "We come to you.", icon: Truck },
  {
    title: "Expert Assistance",
    desc: "Human support at every step.",
    icon: UserCheck,
  },
  {
    title: "Curated Quality Products",
    desc: "Strictly inspected inventory.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Since 2002",
    desc: "23 years of regional legacy.",
    icon: Award,
  },
  {
    title: "Hassle-Free Selling",
    desc: "No bargaining with strangers.",
    icon: ThumbsUp,
  },
];

const advantages = [
  "Human Support & Guidance",
  "Fair & Transparent Pricing",
  "100% Curated Products",
  "Doorstep Convenience",
  "Trusted Local Brand",
  "23 Years Experience",
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30">
              R
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white">
                RUPANTAR
              </h1>
              <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                Buy Smart. Sell Easy.
              </p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Buy
            </a>
            <a
              href="#sell"
              className="hover:text-emerald-400 transition-colors"
            >
              Sell
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Our Legacy
            </a>
            <button className="text-slate-900 bg-white hover:bg-slate-100 px-5 py-2.5 rounded-full font-semibold transition-all">
              Login
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-emerald-400"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <div className="relative bg-slate-900 overflow-hidden text-white pt-16 pb-24 lg:pt-28 lg:pb-36">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-slate-900 to-slate-950"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6 tracking-wide shadow-sm">
          <Award size={16} /> Serving Smart Buyers & Sellers Since 2002
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          North Bengal’s <span className="text-emerald-500">Trusted</span>{" "}
          Recommerce Platform
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-300 mb-6">
          23 Years of Trust & Value.
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Sell your pre-owned products hassle-free and explore curated deals at
          the best value. We evaluate, we buy, and we curate for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a
            href="#sell"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-1 text-center cursor-pointer"
          >
            Sell Your Product
          </a>
          <a
  href="#products"
  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
>
  Explore Products
</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full relative"
      >
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
          alt="Trusted Recommerce"
          className="rounded-3xl shadow-2xl border-4 border-slate-800 object-cover h-[450px] w-full"
        />
        {/* Floating UI Cards */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -top-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 hidden md:flex"
        >
          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold">
              Quality Check
            </p>
            <p className="font-bold text-sm">Curated by RUPANTAR</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 hidden md:flex"
        >
          <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Evaluation</p>
            <p className="font-bold text-sm">Best Value Offered</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

const TrustHighlights = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:shadow-lg"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <feature.icon size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SearchAndCategories = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
      <div className="relative mb-10 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-full py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg transition-all shadow-inner"
        />
        <Search
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={24}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 cursor-pointer group w-20 sm:w-24"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-all shadow-sm">
              <cat.icon
                size={32}
                className="text-slate-500 group-hover:text-emerald-600 transition-colors"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-emerald-700 text-center">
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedProducts = () => (
  <div  id="products"className="bg-slate-50 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Featured Products
          </h2>
          <p className="text-slate-500">
            Premium pre-owned items strictly evaluated and curated for you.
          </p>
        </div>
        <a
          href="#"
          className="flex text-emerald-600 font-semibold hover:text-emerald-700 items-center gap-1"
        >
          Explore All <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all border border-slate-100 group relative"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-700">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase">
                  Curated by RUPANTAR
                </span>
              </div>
              <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                <Heart size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-1 flex-1 pr-2">
                  {product.title}
                </h3>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">
                  {product.condition}
                </span>
              </div>
              <div className="flex items-end gap-3 mb-5">
                <span className="text-2xl font-black text-emerald-600">
                  {product.price}
                </span>
                <span className="text-sm text-slate-400 line-through mb-1">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-sm">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <MapPin size={16} className="text-slate-400" />{" "}
                  {product.location}
                </div>
                <div className="text-emerald-600 font-semibold flex items-center gap-1">
                  Buy Now <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SellProductForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="sell" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Sell Your Product
          </h2>
          <p className="text-slate-500 text-lg">
            Upload your product details and our team will contact you with the
            best possible offer.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Request Received Successfully!
            </h3>
            <p className="text-slate-600 text-lg">
              Our team will contact you shortly after evaluation.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-emerald-600 font-semibold hover:text-emerald-700 underline"
            >
              Submit another product
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200"
          >
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Upload Product Images
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
                <UploadCloud
                  size={40}
                  className="mx-auto text-slate-400 group-hover:text-emerald-500 mb-3 transition-colors"
                />
                <p className="text-slate-600 font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Product Category
                </label>
                <select
                  required
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select Category</option>
                  <option>Electronics</option>
                  <option>Mobile Phones</option>
                  <option>Home Appliances</option>
                  <option>Furniture</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Product Name/Model
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. iPhone 13 128GB"
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Condition
                </label>
                <select
                  required
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select Condition</option>
                  <option>Like New</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair (Requires Repair)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Expected Price (₹)
                </label>
                <input
                  required
                  type="number"
                  placeholder="Enter amount"
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Pickup Location (City/Area)
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Siliguri"
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Contact Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91"
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Mention any scratches, warranty remaining, etc."
                className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              Submit for Evaluation <ArrowRight size={20} />
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

const HowItWorks = () => (
  <div className="py-24 bg-slate-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <p className="text-slate-400 mb-20 max-w-xl mx-auto">
        Experience the smoothest direct-buy process in North Bengal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute top-1/3 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-emerald-600/0 via-emerald-600 to-emerald-600/0 -translate-y-1/2 z-0"></div>

        {[
          {
            step: "1",
            title: "Upload Product Details",
            desc: "Fill out our simple evaluation form.",
            icon: UploadCloud,
          },
          {
            step: "2",
            title: "Get Expert Evaluation",
            desc: "Our team reviews and offers the best price.",
            icon: ClipboardCheck,
          },
          {
            step: "3",
            title: "Sell Easily",
            desc: "We pick it up and you get paid instantly.",
            icon: ThumbsUp,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-black relative group">
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm border-4 border-slate-950">
                {item.step}
              </div>
              <item.icon
                size={32}
                className="group-hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm px-4 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const WhyChooseRupantar = () => (
  <div className="py-24 bg-slate-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Why Choose RUPANTAR?
        </h2>
        <p className="text-slate-500">
          A trusted modern resale startup with a 23-year legacy.
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden p-8 sm:p-12 text-white border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg mb-8">
              R
            </div>
            <h3 className="text-3xl font-bold mb-6">The RUPANTAR Difference</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Unlike peer-to-peer classifieds, we eliminate the hassle of
              dealing with strangers. We buy directly from you, evaluate fairly,
              and curate the best stock for buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50"
              >
                <CheckCircle
                  size={20}
                  className="text-emerald-500 flex-shrink-0"
                />
                <span className="text-sm font-semibold">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppPromo = () => (
  <div className="py-24 bg-emerald-700 overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white to-transparent"></div>
    <div className="absolute right-0 top-0 w-1/2 h-full bg-emerald-600/50 skew-x-12 transform origin-top-right"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
      <div className="text-white lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-6">
          <Smartphone size={16} /> Mobile Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          RUPANTAR App
          <br />
          Coming Soon
        </h2>
        <p className="text-emerald-100 text-xl font-medium mb-4">
          North Bengal’s trusted resale ecosystem — now in your pocket.
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto mt-6">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl">
            App Store{" "}
            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
              Soon
            </span>
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl">
            Google Play{" "}
            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
              Soon
            </span>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col pt-12 p-5 items-center">
          <div className="absolute top-0 w-36 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
          <div className="w-full h-full bg-slate-50 rounded-2xl overflow-hidden relative">
            <div className="bg-emerald-600 h-40 w-full rounded-b-[2rem] absolute top-0 p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold">
                  R
                </div>
                <Menu size={20} />
              </div>
              <h3 className="font-bold text-lg">Hello, User</h3>
              <p className="text-xs opacity-80">Explore curated deals today</p>
            </div>
            <div className="mt-32 px-4 space-y-4 relative z-10">
              <div className="w-full bg-white shadow-sm rounded-xl h-12 mb-2"></div>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">
              R
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                RUPANTAR
              </h2>
              <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                Buy Smart. Sell Easy.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            A trusted modern resale ecosystem. We evaluate, we buy, and we
            curate for you.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-amber-500 text-xs font-bold px-3 py-2 rounded-lg">
            <Award size={14} /> 23 Years of Trusted Service
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Our Legacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#sell"
                className="hover:text-emerald-400 transition-colors"
              >
                Sell Your Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Buy Curated Items
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Evaluation Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms & Privacy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Locations</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Siliguri (HQ)</li>
            <li>Darjeeling</li>
            <li>Jalpaiguri</li>
            <li>Cooch Behar</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} RUPANTAR. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <TrustHighlights />
      <SearchAndCategories />
      <FeaturedProducts />
      <SellProductForm />
      <HowItWorks />
      <WhyChooseRupantar />
      <AppPromo />
      <Footer />
    </div>
  );
}
