const sellCategories = [
  // =========================================================
  // PHONES
  // =========================================================
  {
    id: "phones",
    slug: "phones",
    title: "Sell Phones",
    shortTitle: "Phones",
    subtitle: "Instant smartphone resale & live valuation",
    description: "Sell old smartphones with secure pickup and instant payouts.",
    type: "structured",
    accent: "#00C896",
    route: "/sell/phones",
    estimatedTime: "2 Min",
    heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
    
    brands: [
      {
        id: "apple",
        name: "Apple",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop",
        models: [
          "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15",
          "iPhone 15 Pro", "iPhone 16 Pro Max"
        ],
      },
      {
        id: "samsung",
        name: "Samsung",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Galaxy S22", "Galaxy S23", "Galaxy S24", "Galaxy S24 Ultra",
          "Galaxy A54", "Galaxy Z Fold5"
        ],
      },
      {
        id: "oneplus",
        name: "OnePlus",
        image: "https://images.unsplash.com/photo-1621330396173-7c8ff2f9c7e9?q=80&w=1200&auto=format&fit=crop",
        models: [
          "OnePlus 11", "OnePlus 12", "OnePlus Nord CE 3", "OnePlus 10 Pro"
        ],
      },
      {
        id: "xiaomi",
        name: "Xiaomi",
        image: "https://images.unsplash.com/photo-1592899677977-7c10d0aede9a?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Redmi Note 12", "Xiaomi 13 Pro", "Redmi K50", "Xiaomi 14"
        ],
      }
    ],

    flowSteps: [
      { id: 1, key: "brand", title: "Select Brand" },
      { id: 2, key: "model", title: "Select Model" },
      { id: 3, key: "condition", title: "Device Condition" },
      { id: 4, key: "quote", title: "Get Quote" },
    ],

    // Condition Questions for Phones
    conditionQuestions: [
      {
        key: "bodyCondition",
        title: "How is the body condition?",
        options: ["Excellent - No scratches", "Good - Minor scratches", "Fair - Visible wear", "Poor - Heavy damage"]
      },
      {
        key: "screenCondition",
        title: "What is the screen condition?",
        options: ["Perfect - No marks", "Minor scratches", "Visible scratches", "Cracked / Damaged"]
      },
      {
        key: "batteryHealth",
        title: "Battery Health?",
        options: ["90% or above", "80-89%", "70-79%", "Below 70%"]
      },
      {
        key: "functionality",
        title: "Does the phone work properly?",
        options: ["Fully Functional", "Minor Issues", "Major Issues"]
      }
    ]
  },

  // =========================================================
  // LAPTOPS
  // =========================================================
  {
    id: "laptops",
    slug: "laptops",
    title: "Sell Laptops",
    shortTitle: "Laptops",
    subtitle: "Professional laptops & workstation resale",
    description: "Sell business laptops with secure verification and pickup.",
    type: "structured",
    accent: "#3B82F6",
    route: "/sell/laptops",
    estimatedTime: "3 Min",
    heroImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop",
    
    brands: [
      {
        id: "apple",
        name: "Apple",
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
        models: [
          "MacBook Air M1", "MacBook Air M2", "MacBook Air M3",
          "MacBook Pro M2", "MacBook Pro M3", "MacBook Pro 16-inch"
        ],
      },
      {
        id: "dell",
        name: "Dell",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        models: [
          "XPS 13", "XPS 15", "Inspiron 14", "Latitude 7430",
          "Alienware m16", "G15 Gaming"
        ],
      },
      {
        id: "hp",
        name: "HP",
        image: "https://images.unsplash.com/photo-1588872654438-2b9f4e9e4f2e?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Pavilion x360", "Envy 15", "Spectre x360", "Omen 16", "Victus Gaming"
        ],
      },
      {
        id: "lenovo",
        name: "Lenovo",
        image: "https://images.unsplash.com/photo-1525547719571-3c4c0b6a3d3c?q=80&w=1200&auto=format&fit=crop",
        models: [
          "ThinkPad X1 Carbon", "IdeaPad Slim 5", "Legion 5 Pro", "Yoga 9i"
        ],
      }
    ],

    flowSteps: [
      { id: 1, key: "brand", title: "Select Brand" },
      { id: 2, key: "model", title: "Select Model" },
      { id: 3, key: "specs", title: "Specifications" },
      { id: 4, key: "condition", title: "Condition" },
      { id: 5, key: "quote", title: "Get Quote" },
    ],

    // Condition Questions for Laptops
    conditionQuestions: [
      {
        key: "bodyCondition",
        title: "What is the body condition?",
        options: ["Excellent", "Good", "Fair", "Poor"]
      },
      {
        key: "screenCondition",
        title: "Screen Condition?",
        options: ["Perfect", "Minor Scratches", "Visible Scratches", "Damaged"]
      },
      {
        key: "keyboardTrackpad",
        title: "Keyboard & Trackpad?",
        options: ["Perfect", "Some keys not working", "Major issues"]
      },
      {
        key: "batteryHealth",
        title: "Battery Backup?",
        options: ["Excellent (>4hrs)", "Good (2-4hrs)", "Poor (<2hrs)"]
      }
    ]
  },

  // =========================================================
  // DESKTOPS
  // =========================================================
  {
    id: "desktops",
    slug: "desktops",
    title: "Sell Desktops",
    shortTitle: "Desktops",
    type: "structured",
    accent: "#8B5CF6",
    route: "/sell/desktops",
    estimatedTime: "3 Min",
    heroImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1600&auto=format&fit=crop",
    
    brands: [
      {
        id: "hp",
        name: "HP",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Pavilion Gaming Desktop", "OMEN 25L", "Envy Desktop", "EliteDesk 800 G6"
        ],
      },
      {
        id: "dell",
        name: "Dell",
        image: "https://images.unsplash.com/photo-1593640495253-23196b6a3d3c?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Inspiron Desktop", "XPS Desktop", "Alienware Aurora R15", "Vostro 3710"
        ],
      }
    ],

    flowSteps: [
      { id: 1, key: "brand", title: "Brand" },
      { id: 2, key: "model", title: "Model" },
      { id: 3, key: "condition", title: "Condition" },
      { id: 4, key: "quote", title: "Quote" },
    ],

    // Condition Questions for Desktops
    conditionQuestions: [
      {
        key: "bodyCondition",
        title: "Cabinet / Body Condition?",
        options: ["Excellent", "Good", "Fair", "Poor"]
      },
      {
        key: "performance",
        title: "Overall Performance?",
        options: ["Excellent", "Good", "Average", "Slow"]
      },
      {
        key: "graphics",
        title: "Graphics Card Status?",
        options: ["Working Perfectly", "Average", "Not Working"]
      }
    ]
  },

  // =========================================================
  // TELEVISIONS
  // =========================================================
  {
    id: "televisions",
    slug: "televisions",
    title: "Sell TVs",
    shortTitle: "TVs",
    type: "structured",
    accent: "#EC4899",
    route: "/sell/televisions",
    estimatedTime: "2 Min",
    heroImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1600&auto=format&fit=crop",
    
    brands: [
      {
        id: "sony",
        name: "Sony",
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Bravia X90L", "Bravia XR OLED", "Bravia 55-inch 4K", "Bravia 65-inch Master Series"
        ],
      },
      {
        id: "samsung",
        name: "Samsung",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
        models: [
          "Crystal UHD", "QLED Q80C", "OLED S95C", "Neo QLED 4K"
        ],
      },
      {
        id: "lg",
        name: "LG",
        image: "https://images.unsplash.com/photo-1593359677879-a3c3f0c3f0c3?q=80&w=1200&auto=format&fit=crop",
        models: [
          "OLED C2", "OLED G3", "UHD 4K Smart TV"
        ],
      }
    ],

    flowSteps: [
      { id: 1, key: "brand", title: "Brand" },
      { id: 2, key: "size", title: "Screen Size" },
      { id: 3, key: "condition", title: "Condition" },
      { id: 4, key: "quote", title: "Quote" },
    ],

    // Condition Questions for TVs
    conditionQuestions: [
      {
        key: "screenCondition",
        title: "Screen Condition?",
        options: ["Perfect", "Minor Scratches", "Visible Lines / Spots", "Damaged"]
      },
      {
        key: "bodyCondition",
        title: "Body & Frame Condition?",
        options: ["Excellent", "Good", "Fair", "Poor"]
      },
      {
        key: "functionality",
        title: "Does it turn on and work properly?",
        options: ["Fully Working", "Minor Issues", "Not Working"]
      }
    ]
  },

  // =========================================================
  // REFRIGERATORS
  // =========================================================
  {
    id: "refrigerators",
    slug: "refrigerators",
    title: "Refrigerators",
    shortTitle: "Fridges",
    type: "guided",
    accent: "#06B6D4",
    route: "/sell/refrigerators",
    estimatedTime: "5 Min",
    heroImage: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=1600&auto=format&fit=crop",
    flowSteps: [
      { id: 1, key: "upload", title: "Upload Images" },
      { id: 2, key: "details", title: "Appliance Details" },
      { id: 3, key: "inspection", title: "Inspection" },
    ],

    // Condition Questions for Refrigerators
    conditionQuestions: [
      {
        key: "bodyCondition",
        title: "External Body Condition?",
        options: ["Excellent", "Good", "Fair", "Poor"]
      },
      {
        key: "cooling",
        title: "Cooling Performance?",
        options: ["Excellent", "Good", "Average", "Not Cooling Properly"]
      },
      {
        key: "functionality",
        title: "Overall Working Condition?",
        options: ["Fully Working", "Minor Issues", "Major Issues"]
      }
    ]
  },

  // =========================================================
  // GUIDED CATEGORIES
  // =========================================================
  {
    id: "office-chairs",
    slug: "office-chairs",
    title: "Office Chairs",
    shortTitle: "Chairs",
    type: "guided",
    accent: "#D97706",
    route: "/sell/office-chairs",
    estimatedTime: "5 Min",
    heroImage: "https://images.unsplash.com/photo-1505797149-43f8d47f1f2a?q=80&w=1600&auto=format&fit=crop",
    flowSteps: [
      { id: 1, key: "upload", title: "Upload Images" },
      { id: 2, key: "details", title: "Chair Details" },
      { id: 3, key: "inspection", title: "Schedule Inspection" },
    ],
  },
  {
    id: "office-desks",
    slug: "office-desks",
    title: "Office Desks",
    shortTitle: "Desks",
    type: "guided",
    accent: "#92400E",
    route: "/sell/office-desks",
    estimatedTime: "5 Min",
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    flowSteps: [
      { id: 1, key: "upload", title: "Upload Images" },
      { id: 2, key: "details", title: "Desk Details" },
      { id: 3, key: "pickup", title: "Pickup Details" },
    ],
  },
  {
    id: "sofas",
    slug: "sofas",
    title: "Sell Sofas",
    shortTitle: "Sofas",
    type: "guided",
    accent: "#EA580C",
    route: "/sell/sofas",
    estimatedTime: "5 Min",
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    flowSteps: [
      { id: 1, key: "upload", title: "Upload Images" },
      { id: 2, key: "details", title: "Sofa Details" },
      { id: 3, key: "inspection", title: "Inspection" },
    ],
  },

  // =========================================================
  // BULK OFFICE ASSETS
  // =========================================================
  {
    id: "bulk-assets",
    slug: "bulk-assets",
    title: "Bulk Assets",
    shortTitle: "Enterprise",
    type: "enterprise",
    accent: "#DC2626",
    route: "/sell/bulk-assets",
    estimatedTime: "Custom",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
    flowSteps: [
      { id: 1, key: "company", title: "Company Details" },
      { id: 2, key: "inventory", title: "Upload Inventory" },
      { id: 3, key: "proposal", title: "Commercial Proposal" },
    ],
  },
];

export default sellCategories;