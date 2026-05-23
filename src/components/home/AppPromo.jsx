import {Smartphone,Menu} from "lucide-react";
const AppPromo = () => (
  <div className="py-24 bg-emerald-700 overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white to-transparent"></div>
    <div className="absolute right-0 top-0 w-1/2 h-full bg-emerald-600/50 skew-x-12 transform origin-top-right"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
      <div className="text-white lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-6">
          <Smartphone size={16} /> Mobile Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          RUPANTAR App
          <br />
          Coming Soon
        </h2>
        <p className="text-emerald-100 text-xl font-medium mb-4">
          North Bengal’s trusted resale ecosystem — now in your pocket.
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto mt-6">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl">
            App Store{" "}
            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
              Soon
            </span>
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl">
            Google Play{" "}
            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-300">
              Soon
            </span>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col pt-12 p-5 items-center">
          <div className="absolute top-0 w-36 h-7 bg-slate-800 rounded-b-3xl z-20"></div>
          <div className="w-full h-full bg-slate-50 rounded-2xl overflow-hidden relative">
            <div className="bg-emerald-600 h-40 w-full rounded-b-[2rem] absolute top-0 p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold">
                  R
                </div>
                <Menu size={20} />
              </div>
              <h3 className="font-bold text-lg">Hello, User</h3>
              <p className="text-xs opacity-80">Explore curated deals today</p>
            </div>
            <div className="mt-32 px-4 space-y-4 relative z-10">
              <div className="w-full bg-white shadow-sm rounded-xl h-12 mb-2"></div>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
                <div className="bg-white shadow-sm h-32 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default AppPromo;