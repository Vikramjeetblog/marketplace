

import { create } from "zustand";

// DEFAULT PRODUCTS
const defaultProducts = [

  // 1
  {
    id: 1,

    title: "Dell OptiPlex Desktop Set",

    category: "Refurbished Desktop",

    rating: 4.7,

    reviews: 324,

    discount: 42,

    save: "₹12,500 OFF",

    price: 17999,

    originalPrice: 30499,

    badge: "Refurbished",

    brand: "Dell",

    stock: 12,

    featured: true,

    description:
      "High-performance refurbished Dell desktop setup ideal for offices, startups and workstations. Fully tested and professionally refurbished.",

    specifications: {
      processor: "Intel i5 10th Gen",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      monitor: "22 Inch LED",
      warranty: "6 Months",
      condition: "Refurbished",
      graphics: "Intel UHD Graphics",
    },

    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 2
  {
    id: 2,

    title: "HP EliteBook Office Laptop",

    category: "Business Laptop",

    rating: 4.9,

    reviews: 198,

    discount: 35,

    save: "₹18,000 OFF",

    price: 33999,

    originalPrice: 51999,

    badge: "Premium",

    brand: "HP",

    stock: 8,

    featured: true,

    description:
      "Premium refurbished business laptop designed for office professionals and multitasking workflows.",

    specifications: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6 Inch FHD",
      warranty: "6 Months",
      condition: "Refurbished",
      battery: "8 Hours",
    },

    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 3
  {
    id: 3,

    title: "Ergonomic Office Chair",

    category: "Office Furniture",

    rating: 4.8,

    reviews: 421,

    discount: 27,

    save: "₹2,996 OFF",

    price: 7999,

    originalPrice: 10995,

    badge: "Best Seller",

    brand: "Rupantar",

    stock: 15,

    featured: false,

    description:
      "Comfortable ergonomic office chair with premium lumbar support for long office hours.",

    specifications: {
      material: "Premium Mesh",
      support: "Lumbar Support",
      adjustable: "Yes",
      wheels: "360 Degree",
      warranty: "6 Months",
      condition: "Refurbished",
      color: "Black",
    },

    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 4
  {
    id: 4,

    title: "Premium Workspace Table",

    category: "Office Desk",

    rating: 4.6,

    reviews: 122,

    discount: 31,

    save: "₹5,100 OFF",

    price: 10499,

    originalPrice: 15599,

    badge: "Top Rated",

    brand: "Rupantar",

    stock: 6,

    featured: false,

    description:
      "Modern workspace desk setup for startups, offices and productivity focused environments.",

    specifications: {
      material: "Engineered Wood",
      width: "5 Feet",
      storage: "2 Drawers",
      finish: "Matte Finish",
      warranty: "6 Months",
      condition: "Refurbished",
      color: "Walnut Brown",
    },

    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 5
  {
    id: 5,

    title: "Executive Visitor Chair",

    category: "Reception Furniture",

    rating: 4.5,

    reviews: 82,

    discount: 22,

    save: "₹1,850 OFF",

    price: 6499,

    originalPrice: 8349,

    badge: "Refurbished",

    brand: "Rupantar",

    stock: 9,

    featured: false,

    description:
      "Elegant visitor chair for reception areas, meeting rooms and premium office spaces.",

    specifications: {
      material: "Leather Finish",
      support: "Foam Cushion",
      adjustable: "No",
      wheels: "No",
      warranty: "6 Months",
      condition: "Refurbished",
      color: "Beige",
    },

    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 6
  {
    id: 6,

    title: "Lenovo ThinkCentre Setup",

    category: "Office Computer",

    rating: 4.8,

    reviews: 276,

    discount: 39,

    save: "₹9,200 OFF",

    price: 13999,

    originalPrice: 23199,

    badge: "Hot Deal",

    brand: "Lenovo",

    stock: 5,

    featured: true,

    description:
      "Professional Lenovo office desktop setup designed for multitasking and productivity.",

    specifications: {
      processor: "Intel i5",
      ram: "8GB",
      storage: "512GB SSD",
      monitor: "24 Inch",
      warranty: "6 Months",
      condition: "Refurbished",
      graphics: "Intel UHD",
    },

    images: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 7
  {
    id: 7,

    title: "Apple MacBook Air M1",

    category: "Refurbished Laptop",

    rating: 4.9,

    reviews: 510,

    discount: 25,

    save: "₹21,000 OFF",

    price: 59999,

    originalPrice: 80999,

    badge: "Premium",

    brand: "Apple",

    stock: 4,

    featured: true,

    description:
      "Apple MacBook Air M1 with blazing-fast performance and premium battery life for professionals.",

    specifications: {
      processor: "Apple M1 Chip",
      ram: "8GB",
      storage: "256GB SSD",
      display: "13.3 Retina",
      warranty: "6 Months",
      condition: "Refurbished",
      battery: "15 Hours",
    },

    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // 8
  {
    id: 8,

    title: "Premium Gaming Chair",

    category: "Office Chair",

    rating: 4.7,

    reviews: 219,

    discount: 29,

    save: "₹4,200 OFF",

    price: 9499,

    originalPrice: 13699,

    badge: "Trending",

    brand: "Rupantar",

    stock: 7,

    featured: false,

    description:
      "Premium ergonomic gaming and office chair with comfortable support and stylish design.",

    specifications: {
      material: "Premium Fabric",
      support: "Neck & Lumbar",
      adjustable: "Yes",
      wheels: "360 Degree",
      warranty: "6 Months",
      condition: "Refurbished",
      color: "Grey",
    },

    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

// LOAD PRODUCTS
const savedProducts =
  JSON.parse(
    localStorage.getItem(
      "savedProducts"
    )
  ) || defaultProducts;

// LOAD USER
const savedUser =
  JSON.parse(
    localStorage.getItem(
      "rupantarUser"
    )
  ) || null;

// LOAD CART
const savedCart =
  savedUser
    ? JSON.parse(
        localStorage.getItem(
          "rupantarCart"
        )
      ) || []
    : [];

// STORE
const useProductStore = create(
  (set) => ({

    // PRODUCTS
    products: savedProducts,

    // CART
    cart: savedCart,

    // UPDATE CART
    setCart: (cart) => {

  const user = JSON.parse(
    localStorage.getItem(
      "rupantarUser"
    )
  );

  // BLOCK GUEST USERS
  if (!user) {
    return;
  }

  localStorage.setItem(
    "rupantarCart",
    JSON.stringify(cart)
  );

  set({ cart });
},
    // CLEAR CART
    clearCart: () => {

      localStorage.removeItem(
        "rupantarCart"
      );

      set({
        cart: [],
      });
    },

    // UPDATE PRODUCTS
    setProducts: (
      products
    ) => {

      localStorage.setItem(
        "savedProducts",
        JSON.stringify(
          products
        )
      );

      set({
        products,
      });
    },
  })
);

export default useProductStore;