import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // DISABLE BODY SCROLL WHEN MODAL OPEN
  useEffect(() => {
    if (showLogin || showSignup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin, showSignup]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white shadow-lg border-b border-slate-800">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between h-20 items-center">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30">
                R
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-white">
                  RUPANTAR
                </h1>

                <p className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                  Buy Smart. Sell Easy.
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              
              <a
                href="#products"
                className="hover:text-emerald-400 transition-colors"
              >
                Buy
              </a>

              <a
                href="#sell"
                className="hover:text-emerald-400 transition-colors"
              >
                Sell
              </a>

              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Our Legacy
              </a>

              {/* LOGIN BUTTON */}
              <button
                onClick={() => setShowLogin(true)}
                className="text-slate-900 bg-white hover:bg-slate-100 px-5 py-2.5 rounded-full font-semibold transition-all"
              >
                Login
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-emerald-400"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="md:hidden pb-6 flex flex-col gap-4 border-t border-slate-800 pt-4">
              
              <a
                href="#products"
                className="hover:text-emerald-400 transition-colors"
              >
                Buy
              </a>

              <a
                href="#sell"
                className="hover:text-emerald-400 transition-colors"
              >
                Sell
              </a>

              <a
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Our Legacy
              </a>

              {/* MOBILE LOGIN */}
              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsOpen(false);
                }}
                className="bg-white text-slate-900 px-5 py-3 rounded-full font-semibold text-center"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm">
          
          <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-y-auto">
            
            <div className="relative w-full max-w-4xl flex items-center justify-center">
              
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all"
              >
                <X size={20} />
              </button>

              {/* LOGIN PAGE */}
              <LoginPage
                setShowLogin={setShowLogin}
                setShowSignup={setShowSignup}
              />
            </div>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm">
          
          <div className="min-h-screen w-full flex items-center justify-center p-4 overflow-y-auto">
            
            <div className="relative w-full max-w-5xl flex items-center justify-center">
              
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowSignup(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-all"
              >
                <X size={20} />
              </button>

              {/* SIGNUP PAGE */}
              <SignupPage
                setShowSignup={setShowSignup}
                setShowLogin={setShowLogin}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;