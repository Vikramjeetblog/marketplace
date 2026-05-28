
import React from "react";

import {
  ArrowRight,
  Building2,
  Upload,
  FileSpreadsheet,
  CalendarDays,
  ShieldCheck,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

const EnterpriseFlow = ({
  category,
}) => {

  return (

    <div className="grid lg:grid-cols-[1fr_380px] gap-8">

      {/* LEFT SIDE */}
      <div>

        {/* STEPPER */}
        <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-2">

          {category.flowSteps.map(
            (step, idx) => (

              <div
                key={step.id}
                className="flex items-center gap-4 shrink-0"
              >

                {/* STEP */}
                <div className="flex items-center gap-3">

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-semibold border transition-all ${
                      idx === 0
                        ? "text-black border-transparent"
                        : "bg-white/5 border-white/10 text-white/40"
                    }`}
                    style={{
                      background:
                        idx === 0
                          ? category.accent
                          : "",
                    }}
                  >

                    {idx === 0 ? (
                      <Check size={18} />
                    ) : (
                      idx + 1
                    )}

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">

                      Step {idx + 1}

                    </p>

                    <h3 className="text-white/80">

                      {step.title}

                    </h3>

                  </div>

                </div>

                {/* LINE */}
                {idx !==
                  category.flowSteps
                    .length - 1 && (

                  <div className="w-10 h-[1px] bg-white/10" />

                )}

              </div>
            )
          )}

        </div>

        {/* MAIN CARD */}
        <div className="rounded-[40px] border border-white/10 bg-[#0D172A]/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

          {/* HEADER */}
          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">

              Enterprise Liquidation

            </p>

            <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4">

              Submit Commercial Assets

            </h2>

            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">

              Schedule enterprise inventory evaluation
              for office assets, workstations, bulk
              electronics and commercial liquidation.

            </p>

          </div>

          {/* COMPANY DETAILS */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">

            {/* COMPANY */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <div className="flex items-center gap-3 mb-5">

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background:
                      `${category.accent}20`,
                  }}
                >

                  <Building2
                    size={22}
                    style={{
                      color:
                        category.accent,
                    }}
                  />

                </div>

                <div>

                  <p className="text-white/40 text-sm mb-1">

                    Company Name

                  </p>

                  <h3 className="text-white text-lg">

                    Business Information

                  </h3>

                </div>

              </div>

              <input
                type="text"
                placeholder="Enter company name"
                className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-white/30 outline-none"
              />

            </div>

            {/* CONTACT */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

              <div className="flex items-center gap-3 mb-5">

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background:
                      `${category.accent}20`,
                  }}
                >

                  <BriefcaseBusiness
                    size={22}
                    style={{
                      color:
                        category.accent,
                    }}
                  />

                </div>

                <div>

                  <p className="text-white/40 text-sm mb-1">

                    Contact Person

                  </p>

                  <h3 className="text-white text-lg">

                    Enterprise Coordinator

                  </h3>

                </div>

              </div>

              <input
                type="text"
                placeholder="Enter full name"
                className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-white/30 outline-none"
              />

            </div>

          </div>

          {/* INVENTORY SECTION */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 mb-8">

            <div className="flex items-center gap-4 mb-6">

              <div
                className="w-16 h-16 rounded-3xl flex items-center justify-center"
                style={{
                  background:
                    `${category.accent}20`,
                }}
              >

                <FileSpreadsheet
                  size={32}
                  style={{
                    color:
                      category.accent,
                  }}
                />

              </div>

              <div>

                <h3 className="text-2xl font-light text-white mb-2">

                  Upload Inventory Sheet

                </h3>

                <p className="text-white/50 leading-relaxed">

                  Upload Excel, CSV or inventory
                  documents for bulk asset evaluation.

                </p>

              </div>

            </div>

            {/* UPLOAD BOX */}
            <label className="group relative flex flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 p-12 cursor-pointer overflow-hidden">

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${category.accent}, transparent 60%)`,
                }}
              />

              <input
                type="file"
                className="hidden"
              />

              <div
                className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
                style={{
                  background:
                    `${category.accent}20`,
                }}
              >

                <Upload
                  size={36}
                  style={{
                    color:
                      category.accent,
                  }}
                />

              </div>

              <h3 className="relative z-10 text-2xl font-light text-white mb-3">

                Upload Inventory File

              </h3>

              <p className="relative z-10 text-white/50 text-center max-w-md leading-relaxed">

                Drag & drop Excel sheets, inventory
                exports or asset lists for faster
                enterprise evaluation.

              </p>

            </label>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <div className="sticky top-28 rounded-[36px] border border-white/10 bg-[#0D172A]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

          <div className="relative h-[260px] overflow-hidden">

            <img
              src={category.heroImage}
              alt={category.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#040B1A] via-black/20 to-transparent" />

          </div>

          <div className="p-8">

            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">

              Enterprise Solutions

            </p>

            <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-5">

              Commercial Asset Recovery

            </h2>

            <p className="text-white/60 leading-relaxed mb-8">

              Dedicated enterprise handling for
              office liquidation, IT assets and
              commercial inventory management.

            </p>

            <button
              className="w-full h-14 rounded-2xl flex items-center justify-center gap-2 text-[#040B1A] font-semibold transition-all hover:scale-[1.01]"
              style={{
                background:
                  category.accent,
              }}
            >

              Request Enterprise Evaluation

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default EnterpriseFlow;

