import {Award} from "lucide-react";
const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">
              R
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                RUPANTAR
              </h2>
              <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                Buy Smart. Sell Easy.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            A trusted modern resale ecosystem. We evaluate, we buy, and we
            curate for you.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-amber-500 text-xs font-bold px-3 py-2 rounded-lg">
            <Award size={14} /> 23 Years of Trusted Service
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Our Legacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#sell"
                className="hover:text-emerald-400 transition-colors"
              >
                Sell Your Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Buy Curated Items
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Evaluation Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms & Privacy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Locations</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Siliguri (HQ)</li>
            <li>Darjeeling</li>
            <li>Jalpaiguri</li>
            <li>Cooch Behar</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} RUPANTAR. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;