import {
  Smartphone,
  Monitor,
  Armchair,
  Shirt,
  Music,
  Home,
  Star,
  DollarSign,
  Truck,
  UserCheck,
  ShieldCheck,
  Award,
  ThumbsUp,
} from "lucide-react";

export const categories = [
  { name: "Electronics", icon: Monitor },
  { name: "Mobiles", icon: Smartphone },
  { name: "Appliances", icon: Home },
  { name: "Furniture", icon: Armchair },
  { name: "Instruments", icon: Music },
  { name: "Fashion", icon: Shirt },
  { name: "Home Decor", icon: Star },
];

export const products = [
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

export const trustFeatures = [
  {
    title: "Fair Price Evaluation",
    desc: "Get the best market value.",
    icon: DollarSign,
  },
  {
    title: "Doorstep Pickup",
    desc: "We come to you.",
    icon: Truck,
  },
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

export const advantages = [
  "Human Support & Guidance",
  "Fair & Transparent Pricing",
  "100% Curated Products",
  "Doorstep Convenience",
  "Trusted Local Brand",
  "23 Years Experience",
];