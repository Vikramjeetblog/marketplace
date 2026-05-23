import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  Mail,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = ({ setShowLogin, setShowSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex items-center justify-center px-4 py-6">
      
      <div className="w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-emerald-600 to-emerald-800 p-10 text-white relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent)]"></div>

          <div className="relative z-10">
            
            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">
              
              <div className="w-14 h-14 bg-white text-emerald-700 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">
                R
              </div>

              <div>
                <h1 className="text-3xl font-black">
                  RUPANTAR
                </h1>

                <p className="text-sm tracking-[3px] uppercase text-emerald-100">
                  Buy Smart. Sell Easy.
                </p>
              </div>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-black leading-tight mb-5">
              Welcome Back
            </h2>

            <p className="text-emerald-50 text-base leading-relaxed max-w-sm">
              Login to manage your products, orders and account easily.
            </p>

            {/* SMALL FEATURES */}
            <div className="mt-10 space-y-4">
              
              <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur">
                Trusted Marketplace
              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur">
                Verified Products
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-8 sm:p-10 lg:p-12 flex items-center justify-center">
          
          <div className="w-full max-w-md mx-auto">
            
            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              
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

            {/* TITLE */}
            <h2 className="text-4xl font-black text-slate-900 mb-3">
              Login
            </h2>

            <p className="text-slate-500 mb-8">
              Welcome back! Please enter your details.
            </p>

            {/* FORM */}
            <form className="space-y-6">
              
              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                    className="w-full border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                
                <div className="flex items-center justify-between mb-2">
                  
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-emerald-600 font-semibold"
                  >
                    Forgot?
                  </button>
                </div>

                <div className="relative">
                  
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full border border-slate-200 rounded-2xl py-4 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

              {/* REMEMBER */}
              <div className="flex items-center">
                
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-emerald-600"
                  />

                  Remember me
                </label>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                Login
                <ArrowRight size={20} />
              </button>
            </form>

            {/* SIGNUP */}
            <p className="text-center text-slate-500 mt-8">
              Don’t have an account?{" "}

              <button
  type="button"
  onClick={() => {
    setShowLogin(false);
    setShowSignup(true);
  }}
  className="text-emerald-600 font-bold hover:text-emerald-500"
>
  Create Account
</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;