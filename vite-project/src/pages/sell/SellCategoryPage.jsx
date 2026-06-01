import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import sellCategories from "../../data/sellCategories";
import useSellStore from "../../store/useSellStore";

import GuidedFlow from "../../components/sell/flows/GuidedFlow";


const SellCategoryPage = () => {
  const { categoryId } = useParams();
  
  const setCategory = useSellStore((state) => state.setCategory);
  const selectedCategory = useSellStore((state) => state.selectedCategory);

  const category = sellCategories.find((item) => item.id === categoryId);

  useEffect(() => {
    if (category && (!selectedCategory || selectedCategory.id !== category.id)) {
      setCategory(category);
    }
  }, [category, selectedCategory, setCategory]);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-light text-[#111827] mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-500 text-lg">
            The requested category does not exist.
          </p>
        </div>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white via-[#FAFAFA] to-white">
        <div
          className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] blur-[160px] opacity-20"
          style={{ background: category.accent }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700">
                  Established Since 2002
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-light tracking-[-0.07em] leading-[0.92]">
                Sell Your <br />
                <span className="font-normal" style={{ color: category.accent }}>
                  {category.title}
                </span>
              </h1>

              <p className="max-w-lg text-lg md:text-xl text-gray-600 leading-relaxed">
                Get the best value for your device from a company trusted since 2002. 
                Transparent evaluation, fair pricing, and hassle-free selling.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { value: "2002", label: "Established" },
                  { value: "24+", label: "Years Experience" },
                  { value: "1000+", label: "Happy Customers" },
                  { value: "100%", label: "Transparent" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl font-semibold mb-1 text-[#111827]">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-[42px]" />
              <div className="overflow-hidden rounded-[42px] border border-gray-200 shadow-2xl">
                <img
                  src={category.heroImage}
                  alt={category.title}
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW SECTION */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* Journey Progress */}
          <div className="flex items-center gap-4 overflow-x-auto pb-6 mb-10 hide-scroll">
            {category.flowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-11 h-11 rounded-2xl bg-[#111827] text-white flex items-center justify-center text-sm font-semibold shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="font-semibold text-[#111827]">{step.title}</span>
                </div>
                {index !== category.flowSteps.length - 1 && (
                  <div className="w-12 h-px bg-gray-300 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <GuidedFlow category={category} />
        </div>
      </section>

      {/* TRUST / WHY US SECTION */}
      <section className="relative py-24 bg-[#020B2D] overflow-hidden">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#00C896]/10 blur-[140px]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-3 h-3 rounded-full bg-[#00C896] animate-pulse" />
            <span className="text-[#00C896] text-sm font-medium tracking-wide">
              WHY CUSTOMERS TRUST US
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
            A Trusted Name <br /> Since 2002
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            More than two decades of excellence in technology resale and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "24+", label: "Years Experience" },
              { number: "1000+", label: "Devices Evaluated" },
              { number: "5000+", label: "Happy Customers" },
              { number: "100%", label: "Transparent Process" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-9 text-left hover:bg-white/10 transition-all"
              >
                <div className="text-6xl font-light text-[#00C896] mb-4">
                  {item.number}
                </div>
                <h3 className="text-white text-xl font-medium">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
              <span className="text-emerald-600 text-sm font-medium">Real Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111827]">
              Loved by Customers
            </h2>
            <p className="text-gray-600 mt-3 max-w-md mx-auto">
              Don't just take our word for it. Here's what people say about selling with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "I got ₹18,500 for my iPhone 13 in just 2 days. Super smooth process and honest pricing.",
                name: "Rahul Sharma",
                location: "Indore",
                rating: 5,
              },
              {
                quote: "Best experience ever. They picked up my Samsung phone from home and payment was instant.",
                name: "Priya Malhotra",
                location: "Bhopal",
                rating: 5,
              },
              {
                quote: "Very transparent evaluation. They explained every detail. Got more than I expected.",
                name: "Amit Verma",
                location: "Ujjain",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#111827]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about selling your phone
            </p>
          </div>
          <div className="space-y-4">
            {[
  {
    q: "How is my asset evaluated?",
    a: "Our team reviews the photos, condition, brand, age, and market demand before generating an offer."
  },
  {
    q: "Do you provide pickup service?",
    a: "Yes. Pickup is scheduled after your offer is accepted."
  },
  {
    q: "How long does the review process take?",
    a: "Most requests are reviewed within 24-48 hours."
  },
  {
    q: "What items can I sell?",
    a: "You can sell phones, laptops, furniture, office equipment, appliances, and other eligible assets."
  }
].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 px-8 py-6 cursor-pointer hover:border-gray-300 transition-all"
              >
                <summary className="flex items-center justify-between text-lg font-medium text-[#111827] list-none">
                  {faq.q}
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed pr-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Padding */}
      <div className="h-24"></div>
    </div>
  );
};

export default SellCategoryPage;