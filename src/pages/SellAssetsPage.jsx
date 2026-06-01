
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgeIndianRupee,
} from "lucide-react";

import CategoryGrid from "../components/sell/CategoryGrid";

const features = [
  {
    icon: Truck,

    title: "Free Doorstep Pickup",

    desc:
      "Pickup scheduled securely at your preferred location.",
  },

  {
    icon: BadgeIndianRupee,

    title: "Instant Secure Payments",

    desc:
      "Fast UPI & bank payments after verification.",
  },

  {
    icon: ShieldCheck,

    title: "Trusted Asset Evaluation",

    desc:
      "Transparent resale pricing powered by experts.",
  },
];

const SellAssetsPage = () => {

  return (

    <div className="bg-[#F5F7FA] min-h-screen overflow-hidden">

      {/* HERO */}
  
<section className="relative overflow-hidden border-b border-black/5">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop"
      alt=""
      className="w-full h-full object-cover"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/70" />

  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">

    <div className="max-w-5xl">

      {/* TOP BADGES */}
      <div className="flex flex-wrap items-center gap-4 mb-10">

        {/* AI BADGE */}
       

        {/* TRUST BADGE */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B942]/20 bg-[#F4B942]/10 backdrop-blur-xl px-5 py-3 text-sm text-[#111827] shadow-sm">

          <div className="w-2 h-2 rounded-full bg-[#F4B942]" />

          24 Years Of Trusted Service

        </div>

      </div>

      {/* TITLE */}
      <h1 className="text-5xl md:text-7xl font-light leading-[0.92] tracking-[-0.06em] text-[#111827] max-w-5xl">

        Sell Your Old Assets

        <span className="block text-[#00C896]">

          Seamlessly & Securely.

        </span>

      </h1>

      {/* DESCRIPTION */}
      <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl">

        Phones, laptops, TVs, appliances,
        office furniture and enterprise inventory —
        professionally evaluated with instant payout
        and secure pickup support.

      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 mt-10">

        {/* PRIMARY */}
        <button className="h-14 px-8 rounded-2xl bg-[#00C896] hover:bg-[#00b587] text-white font-semibold transition-all duration-300 shadow-[0_12px_30px_rgba(0,200,150,0.18)]">

          Start Selling

        </button>

        {/* SECONDARY */}
        <button className="h-14 px-8 rounded-2xl border border-gray-300 bg-white/90 backdrop-blur-xl text-[#111827] hover:bg-white transition-all duration-300">

          Explore Categories

        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 max-w-4xl">

        {[
          ["15K+", "Assets Processed"],

          ["24 Hours", "Pickup Support"],

          ["100%", "Secure Payments"],
        ].map((item, idx) => (

          <div
            key={idx}
            className="rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
          >

            <h3 className="text-3xl font-semibold text-[#111827] mb-2">

              {item[0]}

            </h3>

            <p className="text-sm text-gray-500">

              {item[1]}

            </p>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>



      {/* CATEGORY SECTION */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="mb-14">

            <p className="text-sm uppercase tracking-[0.28em] text-[#00C896] mb-5">

              Categories

            </p>

            <h2 className="text-4xl md:text-5xl font-light tracking-[-0.05em] text-[#111827] mb-5">

              What Would You Like To Sell?

            </h2>

            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">

              Select a category and start your asset
              evaluation with live pricing and pickup support.

            </p>

          </div>

          {/* GRID */}
          <CategoryGrid />

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-[40px] border border-gray-200 bg-white p-8 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">

            <div className="grid lg:grid-cols-3 gap-10">

              {features.map((item, idx) => (

                <div key={idx}>

                  {/* ICON */}
                  <div className="w-16 h-16 rounded-3xl bg-[#00C896]/10 border border-[#00C896]/15 flex items-center justify-center text-[#00C896] mb-6">

                    <item.icon size={30} />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-light tracking-[-0.03em] text-[#111827] mb-4">

                    {item.title}

                  </h3>

                  {/* DESC */}
                  <p className="text-gray-500 leading-relaxed">

                    {item.desc}

                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>

  );
};

export default SellAssetsPage;
