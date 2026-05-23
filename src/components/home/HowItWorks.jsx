import {UploadCloud,ClipboardCheck,ThumbsUp} from "lucide-react";
import {motion} from "framer-motion"
import {advantages} from "../../data/homeData";
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
export default HowItWorks;