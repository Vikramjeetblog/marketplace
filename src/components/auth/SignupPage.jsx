import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-600 to-emerald-800 p-12 text-white relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent)]"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-white text-emerald-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">
                R
              </div>

              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  RUPANTAR
                </h1>

                <p className="text-sm uppercase tracking-[3px] text-emerald-100 font-semibold">
                  Buy Smart. Sell Easy.
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Join North Bengal’s Trusted Marketplace
            </h2>

            <p className="text-emerald-50 text-lg leading-relaxed max-w-md">
              Create your account to buy verified second-hand products or sell
              your unused items easily with RUPANTAR.
            </p>
          </div>

          <div className="relative z-10 space-y-5 mt-12">
            <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-bold">Trusted Platform</h3>
                <p className="text-sm text-emerald-100">
                  23 years of regional trust and support.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-bold">Secure Transactions</h3>
                <p className="text-sm text-emerald-100">
                  Verified products and smooth buying experience.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-bold">Easy Selling</h3>
                <p className="text-sm text-emerald-100">
                  Upload products and get evaluated quickly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 sm:p-10 lg:p-14 flex items-center">
          <div className="w-full">
            
            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                R
              </div>

              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  RUPANTAR
                </h1>

                <p className="text-[11px] uppercase tracking-[3px] text-emerald-600 font-bold">
                  Buy Smart. Sell Easy.
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-black text-slate-900 mb-3">
              Create Account
            </h2>

            <p className="text-slate-500 mb-10">
              Sign up to start buying and selling with confidence.
            </p>

            <form className="space-y-6">
              
              {/* NAME */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full border border-slate-200 rounded-xl py-4 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                Create Account
                <ArrowRight size={20} />
              </button>
            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-slate-500 mt-8">
              Already have an account?{" "}
              <span className="text-emerald-600 font-bold cursor-pointer hover:text-emerald-500">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;