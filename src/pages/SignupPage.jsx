import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Mail,
  Phone,
  Lock,
} from "lucide-react";

const SignupPage = ({ setShowSignup, setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full flex items-center justify-center p-4">
      
      <div className="w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-2xl grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-emerald-600 to-emerald-800 p-10 text-white relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent)]"></div>

          <div className="relative z-10">
            
            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">
              
              <div className="w-16 h-16 bg-white text-emerald-700 rounded-2xl flex items-center justify-center font-black text-3xl shadow-lg">
                R
              </div>

              <div>
                <h1 className="text-4xl font-black">
                  RUPANTAR
                </h1>

                <p className="text-sm tracking-[4px] uppercase text-emerald-100 mt-1">
                  Buy Smart. Sell Easy.
                </p>
              </div>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl font-black leading-tight mb-5">
              Create Your Account
            </h2>

            <p className="text-emerald-50 text-lg leading-relaxed max-w-md">
              Start buying and selling easily with RUPANTAR.
            </p>

            {/* FEATURE CARDS */}
            <div className="mt-10 space-y-4">
              
              <div className="bg-white/10 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur">
                Trusted Marketplace
              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur">
                Secure Transactions
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-8 sm:p-10 lg:p-10 flex items-center justify-center">
          
          <div className="w-full max-w-3xl mx-auto">
            
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
              Create Account
            </h2>

            <p className="text-slate-500 mb-8 text-base">
              Enter your details to continue.
            </p>

            {/* FORM */}
            <form className="space-y-5">
              
              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                    className="w-full border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid grid-cols-2 gap-5">
                
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

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                      className="w-full border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* PASSWORD ROW */}
              <div className="grid grid-cols-2 gap-5">
                
                {/* PASSWORD */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                      className="w-full border border-slate-200 rounded-2xl py-4 pl-12 pr-16 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                      className="w-full border border-slate-200 rounded-2xl py-4 pl-12 pr-16 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                Create Account
                <ArrowRight size={20} />
              </button>
            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-slate-500 mt-6 text-sm">
              Already have an account?{" "}

              <button
                type="button"
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
                className="text-emerald-600 font-bold hover:text-emerald-500"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;