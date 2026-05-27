import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Search,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import LoginPage from "../../pages/LoginPage";

import ConfirmModal from "../common/ConfirmModal";

// USER STORE
import { useUserStore } from "../../store/useUserStore";

// PRODUCT STORE
import useProductStore from "../../store/useProductStore";

const Navbar = () => {

  const [showLogin, setShowLogin] =
    useState(false);

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [
    showLogoutModal,
    setShowLogoutModal,
  ] = useState(false);

  const dropdownRef =
    useRef(null);

  // USER STORE
  const {
    user,
    logout,
  } = useUserStore();

  // PRODUCT STORE
  const {
    cart,
    clearCart,
  } = useProductStore();

  // LOGIN STATUS
  const isLoggedIn =
    !!user;

  // TOTAL CART ITEMS
  const totalCartItems =
    cart.reduce(
      (acc, item) =>
        acc + item.qty,
      0
    );

  // CLOSE DROPDOWN
  useEffect(() => {

    const handleClickOutside = (
      event
    ) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {

        setShowDropdown(
          false
        );
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // DISABLE BODY SCROLL
  useEffect(() => {

    if (showLogin) {

      document.body.style.overflow =
        "hidden";

    } else {

      document.body.style.overflow =
        "auto";
    }

    return () => {

      document.body.style.overflow =
        "auto";
    };

  }, [showLogin]);

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
              {isLoggedIn &&
                cart.length > 0 && (

                <Link
                  to="/cart"
                  className="relative w-11 h-11 rounded-full border border-[#D7E2F0] bg-white hover:bg-[#F8FBFD] transition-all flex items-center justify-center text-[#031B4E]"
                >

                  <ShoppingCart size={22} />

                  {/* COUNT */}
                  <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-[#43C6B8] text-white text-[11px] flex items-center justify-center font-bold">

                    {totalCartItems}
                  </span>
                </Link>
              )}

              {/* LOGIN */}
              {!isLoggedIn ? (

                <button
                  onClick={() =>
                    setShowLogin(
                      true
                    )
                  }
                  className="h-11 px-6 rounded-full bg-[#020B2D] text-white text-sm font-semibold hover:bg-[#031B4E] transition-all"
                >
                  Login
                </button>

              ) : (

                <div
                  className="relative"
                  ref={dropdownRef}
                >

                  {/* USER BUTTON */}
                  <button
                    onClick={() =>
                      setShowDropdown(
                        !showDropdown
                      )
                    }
                    className="flex items-center gap-3 h-11 px-4 rounded-full border border-[#D7E2F0] bg-white hover:bg-[#F8FBFD] transition-all"
                  >

                    {/* AVATAR */}
                    <div className="w-8 h-8 rounded-full bg-[#43C6B8] text-white flex items-center justify-center text-sm font-bold uppercase">

                      {user?.name?.charAt(
                        0
                      )}
                    </div>

                    {/* NAME */}
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

                        <Link
                          to="/account/orders"
                          onClick={() =>
                            setShowDropdown(
                              false
                            )
                          }
                          className="block w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors"
                        >
                          My Orders
                        </Link>

                        <Link
                          to="/account/payment-methods"
                          onClick={() =>
                            setShowDropdown(
                              false
                            )
                          }
                          className="block w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors"
                        >
                          Saved Payment Method
                        </Link>

                        <Link
                          to="/account/earnings"
                          onClick={() =>
                            setShowDropdown(
                              false
                            )
                          }
                          className="block w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors"
                        >
                          Earnings
                        </Link>

                        <Link
                          to="/account/addresses"
                          onClick={() =>
                            setShowDropdown(
                              false
                            )
                          }
                          className="block w-full px-6 py-3 text-left text-sm text-[#031B4E] hover:bg-[#F8FBFD] transition-colors"
                        >
                          Saved Addresses
                        </Link>

                        <div className="border-t border-[#EEF4FA] my-2" />

                        {/* LOGOUT */}
                        <button
                          onClick={() => {

                            setShowDropdown(
                              false
                            );

                            setShowLogoutModal(
                              true
                            );
                          }}
                          className="w-full px-6 py-3 text-left text-sm text-red-500 hover:bg-red-50 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
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
          setShowLogin={
            setShowLogin
          }
        />
      )}

      {/* LOGOUT MODAL */}
      <ConfirmModal
        isOpen={
          showLogoutModal
        }
        title="Logout Account?"
        description="Are you sure you want to logout from your Rupantar account?"
        confirmText="Logout"
        cancelText="Cancel"
        onCancel={() =>
          setShowLogoutModal(
            false
          )
        }
        onConfirm={() => {

          // CLEAR CART
          clearCart();

          // LOGOUT USER
          logout();

          // CLOSE MODAL
          setShowLogoutModal(
            false
          );

          // TOAST
          toast.success(
            "Logged out successfully"
          );
        }}
      />
    </>
  );
};

export default Navbar;