import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  UploadCloud,
  SearchCheck,
  BadgeIndianRupee,
  Truck,
  ShieldCheck,
  Building2,
  PackageCheck,
  CircleDollarSign,
} from "lucide-react";

const sellCategories = [
  {
    title: "Office Chairs",
    image:
      "https://images.unsplash.com/photo-1505797149-43f89335d7b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Business Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Workstations",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Office Tables",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Desktops",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bulk Assets",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
];

const steps = [
  {
    icon: UploadCloud,
    title: "Submit Details",
    desc: "Share product details and photos.",
  },
  {
    icon: SearchCheck,
    title: "Team Evaluation",
    desc: "Experts evaluate market value.",
  },
  {
    icon: Truck,
    title: "Pickup Scheduled",
    desc: "Pickup arranged at your location.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Instant Payment",
    desc: "Secure commercial payment process.",
  },
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Verified Pricing",
  },
  {
    icon: PackageCheck,
    title: "Bulk Asset Handling",
  },
  {
    icon: Truck,
    title: "Doorstep Pickup",
  },
  {
    icon: Building2,
    title: "GST Billing Support",
  },
];

const SellAssetsPage = () => {
  return (
    <div className="bg-[#F8FBFD] min-h-screen">
      <Navbar />

      {/* HEADER */}
      <section className="pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#43C6B8] font-semibold mb-4">
                SELL WITH RUPANTAR
              </p>

              <h1 className="text-5xl font-bold text-[#020B2D] leading-tight mb-5">
                Sell Commercial Assets
              </h1>

              <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl">
                Office furniture, laptops, workstations and bulk inventory evaluation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                "23 Years Legacy",
                "Instant Evaluation",
                "Free Pickup",
                "Commercial Support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[24px] border border-[#E5EEF8] p-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#43C6B8]/10 flex items-center justify-center text-[#43C6B8] mb-4">
                    <CircleDollarSign size={24} />
                  </div>

                  <h3 className="text-[#020B2D] font-semibold">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#020B2D]">
              What do you want to sell?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

            {sellCategories.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#E5EEF8] rounded-[28px] overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-[1.2/1] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#020B2D]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white border-y border-[#E5EEF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#020B2D]">
              How Selling Works
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FBFD] border border-[#E5EEF8] rounded-[28px] p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#43C6B8]/10 text-[#43C6B8] flex items-center justify-center mb-6">
                  <item.icon size={26} />
                </div>

                <h3 className="text-lg font-semibold text-[#020B2D] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#64748B]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8 lg:p-10">

            <h2 className="text-3xl font-bold text-[#020B2D] mb-8">
              Request Evaluation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Product Category"
                className="h-14 rounded-2xl border border-[#D8E4F0] px-5 outline-none"
              />

              <input
                type="text"
                placeholder="Product Name"
                className="h-14 rounded-2xl border border-[#D8E4F0] px-5 outline-none"
              />

              <input
                type="text"
                placeholder="Quantity"
                className="h-14 rounded-2xl border border-[#D8E4F0] px-5 outline-none"
              />

              <input
                type="text"
                placeholder="Location"
                className="h-14 rounded-2xl border border-[#D8E4F0] px-5 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="h-14 rounded-2xl border border-[#D8E4F0] px-5 outline-none md:col-span-2"
              />

              <textarea
                rows="5"
                placeholder="Product Details"
                className="rounded-2xl border border-[#D8E4F0] p-5 outline-none md:col-span-2"
              />

              <button className="h-14 rounded-2xl bg-[#020B2D] text-white font-semibold md:col-span-2">
                Request Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {trust.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5EEF8] rounded-[28px] p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#43C6B8]/10 text-[#43C6B8] flex items-center justify-center mb-5">
                  <item.icon size={26} />
                </div>

                <h3 className="text-lg font-semibold text-[#020B2D]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellAssetsPage;