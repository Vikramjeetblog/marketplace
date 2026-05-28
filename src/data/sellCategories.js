
const sellCategories = [

  // =========================================================
  // PHONES
  // =========================================================
  {
    id: "phones",

    slug: "phones",

    title: "Sell Phones",

    shortTitle: "Phones",

    subtitle:
      "Instant smartphone resale & live valuation",

    description:
      "Sell old smartphones with secure pickup and instant payouts.",

    type: "structured",

    accent: "#00C896",

    route: "/sell/phones",

    estimatedTime: "2 Min",

    heroImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",

    brands: [
      {
        id: "apple",

        name: "Apple",

        image:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop",

        models: [
          "iPhone 13",
          "iPhone 14",
          "iPhone 15 Pro",
        ],
      },

      {
        id: "samsung",

        name: "Samsung",

        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",

        models: [
          "Galaxy S23",
          "Galaxy S24 Ultra",
        ],
      },
    ],

    flowSteps: [
      {
        id: 1,
        key: "brand",
        title: "Select Brand",
      },

      {
        id: 2,
        key: "model",
        title: "Select Model",
      },

      {
        id: 3,
        key: "condition",
        title: "Device Condition",
      },

      {
        id: 4,
        key: "quote",
        title: "Get Quote",
      },
    ],
  },

  // =========================================================
  // LAPTOPS
  // =========================================================
  {
    id: "laptops",

    slug: "laptops",

    title: "Sell Laptops",

    shortTitle: "Laptops",

    subtitle:
      "Professional laptops & workstation resale",

    description:
      "Sell business laptops with secure verification and pickup.",

    type: "structured",

    accent: "#3B82F6",

    route: "/sell/laptops",

    estimatedTime: "3 Min",

    heroImage:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop",

    brands: [
      {
        id: "apple",

        name: "Apple",

        image:
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",

        models: [
          "MacBook Air M2",
          "MacBook Pro M3",
        ],
      },

      {
        id: "dell",

        name: "Dell",

        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

        models: [
          "XPS 13",
          "Alienware M16",
        ],
      },
    ],

    flowSteps: [
      {
        id: 1,
        key: "brand",
        title: "Select Brand",
      },

      {
        id: 2,
        key: "model",
        title: "Select Model",
      },

      {
        id: 3,
        key: "specs",
        title: "Specifications",
      },

      {
        id: 4,
        key: "condition",
        title: "Condition",
      },

      {
        id: 5,
        key: "quote",
        title: "Get Quote",
      },
    ],
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

    heroImage:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1600&auto=format&fit=crop",

    brands: [
      {
        id: "hp",

        name: "HP",

        image:
          "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop",

        models: [
          "OMEN",
          "Pavilion Gaming",
        ],
      },
    ],

    flowSteps: [
      {
        id: 1,
        key: "brand",
        title: "Brand",
      },

      {
        id: 2,
        key: "model",
        title: "Model",
      },

      {
        id: 3,
        key: "condition",
        title: "Condition",
      },

      {
        id: 4,
        key: "quote",
        title: "Quote",
      },
    ],
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

    heroImage:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1600&auto=format&fit=crop",

    brands: [
      {
        id: "sony",

        name: "Sony",

        image:
          "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1200&auto=format&fit=crop",

        models: [
          "Bravia X90",
          "Bravia OLED",
        ],
      },
    ],

    flowSteps: [
      {
        id: 1,
        key: "brand",
        title: "Brand",
      },

      {
        id: 2,
        key: "size",
        title: "Screen Size",
      },

      {
        id: 3,
        key: "condition",
        title: "Condition",
      },

      {
        id: 4,
        key: "quote",
        title: "Quote",
      },
    ],
  },

  // =========================================================
  // OFFICE CHAIRS
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

    heroImage:
      "https://images.unsplash.com/photo-1505797149-43f8d47f1f2a?q=80&w=1600&auto=format&fit=crop",

    flowSteps: [
      {
        id: 1,
        key: "upload",
        title: "Upload Images",
      },

      {
        id: 2,
        key: "details",
        title: "Chair Details",
      },

      {
        id: 3,
        key: "inspection",
        title: "Schedule Inspection",
      },
    ],
  },

  // =========================================================
  // OFFICE DESKS
  // =========================================================
  {
    id: "office-desks",

    slug: "office-desks",

    title: "Office Desks",

    shortTitle: "Desks",

    type: "guided",

    accent: "#92400E",

    route: "/sell/office-desks",

    estimatedTime: "5 Min",

    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",

    flowSteps: [
      {
        id: 1,
        key: "upload",
        title: "Upload Images",
      },

      {
        id: 2,
        key: "details",
        title: "Desk Details",
      },

      {
        id: 3,
        key: "pickup",
        title: "Pickup Details",
      },
    ],
  },

  // =========================================================
  // SOFAS
  // =========================================================
  {
    id: "sofas",

    slug: "sofas",

    title: "Sell Sofas",

    shortTitle: "Sofas",

    type: "guided",

    accent: "#EA580C",

    route: "/sell/sofas",

    estimatedTime: "5 Min",

    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",

    flowSteps: [
      {
        id: 1,
        key: "upload",
        title: "Upload Images",
      },

      {
        id: 2,
        key: "details",
        title: "Sofa Details",
      },

      {
        id: 3,
        key: "inspection",
        title: "Inspection",
      },
    ],
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

    heroImage:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=1600&auto=format&fit=crop",

    flowSteps: [
      {
        id: 1,
        key: "upload",
        title: "Upload Images",
      },

      {
        id: 2,
        key: "details",
        title: "Appliance Details",
      },

      {
        id: 3,
        key: "inspection",
        title: "Inspection",
      },
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

    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",

    flowSteps: [
      {
        id: 1,
        key: "company",
        title: "Company Details",
      },

      {
        id: 2,
        key: "inventory",
        title: "Upload Inventory",
      },

      {
        id: 3,
        key: "proposal",
        title: "Commercial Proposal",
      },
    ],
  },

];

export default sellCategories;
