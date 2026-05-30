import React from "react";
import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const AdminNavbar = () => {
  return (
    <header className="bg-white border-b border-[#EEF2F6] px-4 md:px-6 lg:px-8">

      <div className="h-[72px] flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="min-w-0">

          <h1 className="text-xl md:text-2xl font-black text-[#020B2D] truncate">
            Rupantar
          </h1>

          <p className="hidden sm:block text-sm text-[#6E7C96] truncate">
            Manage requests, products and orders
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* SEARCH */}
          <div className="hidden lg:flex items-center gap-3 h-[46px] w-[280px] xl:w-[340px] px-4 rounded-2xl border border-[#E5EEF8] bg-[#F8FAFC]">

            <Search
              size={18}
              className="text-[#94A3B8] shrink-0"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent flex-1 outline-none text-sm text-[#020B2D]"
            />

          </div>

          {/* NOTIFICATION */}
          <button className="relative w-11 h-11 rounded-xl border border-[#E5EEF8] bg-white flex items-center justify-center hover:bg-[#F8FAFC] transition-all">

            <Bell
              size={18}
              className="text-[#020B2D]"
            />

            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#00B67A]" />

          </button>

          {/* PROFILE */}
          <button className="flex items-center gap-2 md:gap-3 h-11 px-2 md:px-3 rounded-xl border border-[#E5EEF8] bg-white hover:bg-[#F8FAFC] transition-all">

            <div className="w-9 h-9 rounded-lg bg-[#00B67A] text-white flex items-center justify-center font-bold">
              A
            </div>

            <div className="hidden md:block text-left">

              <p className="text-sm font-bold text-[#020B2D]">
                Admin
              </p>

              <p className="text-xs text-[#6E7C96]">
                Super Admin
              </p>

            </div>

            <ChevronDown
              size={16}
              className="hidden md:block text-[#6E7C96]"
            />

          </button>

        </div>

      </div>

      {/* MOBILE SEARCH */}
      <div className="lg:hidden pb-4">

        <div className="flex items-center gap-3 h-[46px] px-4 rounded-2xl border border-[#E5EEF8] bg-[#F8FAFC]">

          <Search
            size={18}
            className="text-[#94A3B8]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none text-sm"
          />

        </div>

      </div>

    </header>
  );
};

export default AdminNavbar;