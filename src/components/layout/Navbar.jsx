import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";

import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  // LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // USER DATA
  const [user, setUser] = useState(null);

  // CART
  const [cartItems] = useState([]);

  // DROPDOWN
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // LOAD USER FROM LOCAL STORAGE
  useEffect(() => {
    const savedUser = localStorage.getItem("rupantarUser");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      setUser(parsedUser);

      setIsLoggedIn(true);
    }
  }, []);

  // DISABLE BODY SCROLL
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin]);

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("rupantarUser");

    setIsLoggedIn(false);

    setUser(null);

    setShowDropdown(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E5EEF8]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-20 flex items-center justify-between gap-6">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#43C6B8] flex items-center justify-center text-white font-black text-lg">
                R
              </div>

              <div className="hidden sm:block">
                <h1 className="text-[20px] font-black tracking-tight text-[#020B2D]">
                  RUPANTAR
                </h1>

                <p className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#43C6B8]">
                  BUY SMART. SELL EASY.
                </p>
              </div>
            </Link>

            {/* SEARCH */}
            <div className="hidden md:flex flex-1 max-w-3xl">

              <div className="w-full relative">

                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8FA3BF]"
                />

                <input
                  type="text"
                  placeholder="Search furniture, laptops, office assets..."
                  className="w-full h-12 pl-14 pr-5 rounded-full border border-[#D7E2F0] bg-[#F8FBFD] focus:outline-none focus:border-[#43C6B8] transition-all text-sm text-[#031B4E]"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* CART */}
              {isLoggedIn && cartItems.length > 0 && (
                <button className="relative text-[#031B4E]">

                  <ShoppingCart size={22} />

                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#43C6B8] text-white text-[10px] flex items-center justify-center font-semibold">
                    {cartItems.length}
                  </span>
                </button>
              )}

              {/* LOGIN BUTTON */}
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="h-11 px-6 rounded-full bg-[#020B2D] text-white text-sm font-semibold hover:bg-[#031B4E] transition-all"
                >
                  Login
                </button>
              ) : (
                <div
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() =>
                      setShowDropdown(!showDropdown)
                    }
                    className="flex items-center gap-3 h-11 px-4 rounded-full border border-[#D7E2F0] bg-white hover:bg-[#F8FBFD] transition-all"
                  >
                    {/* USER ICON */}
                    <div className="w-8 h-8 rounded-full bg-[#43C6B8] text-white flex items-center justify-center text-sm font-bold uppercase">
                      {user?.name?.charAt(0)}
                    </div>

                    {/* USER NAME */}
                    <span className="text-sm font-semibold text-[#031B4E]">
                      {user?.name}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`transition-transform text-[#6E7C96] ${
                        showDropdown
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-3 w-72 bg-white border border-[#E5EEF8] rounded-[24px] shadow-[0_20px_50px_rgba(2,11,45,0.12)] overflow-hidden">

                      {/* USER INFO */}
                      <div className="px-6 py-5 border-b border-[#EEF4FA]">

                        <h3 className="text-[16px] font-bold text-[#020B2D]">
                          {user?.name}
                        </h3>

                        <p className="text-sm text-[#6E7C96] mt-1">
                          {user?.email}
                        </p>
                      </div>

                      {/* MENU */}
                      <div className="py-2">

                        <button className="w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors">
                          My Orders
                        </button>

                        <button className="w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors">
                          Saved Products
                        </button>

                        <button className="w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors">
                          Evaluation Requests
                        </button>

                        <button className="w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors">
                          Saved Addresses
                        </button>

                        <div className="border-t border-[#EEF4FA] my-2" />

                        <button
                          onClick={handleLogout}
                          className="w-full px-6 py-3 text-left text-sm text-red-500 hover:bg-red-50 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* MOBILE MENU */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[#031B4E]"
              >
                {isOpen ? (
                  <X size={26} />
                ) : (
                  <Menu size={26} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          <div className="md:hidden pb-4">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8FA3BF]"
              />

              <input
                type="text"
                placeholder="Search assets..."
                className="w-full h-11 pl-12 pr-4 rounded-full border border-[#D7E2F0] bg-[#F8FBFD] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (
        <LoginPage
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
        />
      )}
    </>
  );
};

export default Navbar;