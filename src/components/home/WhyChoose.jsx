import {advantages} from "../../data/homedata";
import {CheckCircle} from "lucide-react";
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
export default  WhyChooseRupantar;

