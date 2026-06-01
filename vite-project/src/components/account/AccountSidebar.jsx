import React, { useState } from "react";

import {
  PackageOpen,
  CreditCard,
  MapPin,
  Wallet,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import toast from "react-hot-toast";

import { useUserStore } from "../../store/useUserStore";

import EditProfileModal from "../modals/EditProfileModal";

const AccountSidebar = () => {
  const {
    user,
    updateUser,
  } = useUserStore();

  const location = useLocation();

  const [
    showProfileModal,
    setShowProfileModal,
  ] = useState(false);

  // SIDEBAR MENU
  const menuItems = [
    {
      title: "My Orders",
      icon: PackageOpen,
      link: "/account/orders",
    },

    {
      title:
        "Saved Payment Methods",
      icon: CreditCard,
      link:
        "/account/payment-methods",
    },

    {
      title: "Saved Addresses",
      icon: MapPin,
      link: "/account/addresses",
    },

    {
      title: "Earnings",
      icon: Wallet,
      link: "/account/earnings",
    },
  ];

  return (
    <div>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6 shadow-sm">

        {/* AVATAR */}
        <div className="w-16 h-16 rounded-full bg-[#00B67A] text-white flex items-center justify-center text-2xl font-black">

          {user?.name?.charAt(0) ||
            "R"}
        </div>

        {/* NAME */}
        <h2 className="mt-5 text-[28px] font-black text-[#020B2D] leading-tight">

          {user?.name ||
            "Rupantar User"}
        </h2>

        {/* EMAIL */}
        <p className="mt-2 text-[#6E7C96] text-sm break-all">

          {user?.email ||
            "No Email"}
        </p>

        {/* BUTTON */}
        <button
          onClick={() =>
            setShowProfileModal(
              true
            )
          }
          className="mt-6 h-11 px-6 rounded-full bg-[#020B2D] text-white text-sm font-semibold hover:opacity-95 transition-all"
        >
          Edit Profile
        </button>
      </div>

      {/* MENU */}
      <div className="mt-5 bg-white rounded-[30px] border border-[#E5EEF8] p-3 shadow-sm">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            location.pathname ===
            item.link;

          return (
            <Link
              key={item.title}
              to={item.link}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                isActive
                  ? "bg-[#00B67A]/10 text-[#00B67A]"
                  : "text-[#020B2D] hover:bg-[#F8FBFD]"
              }`}
            >
              {/* ICON */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isActive
                    ? "bg-[#00B67A] text-white"
                    : "bg-[#F5F8FC]"
                }`}
              >
                <Icon size={18} />
              </div>

              {/* TEXT */}
              <span className="text-sm font-semibold">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      {/* EDIT PROFILE MODAL */}
      <EditProfileModal
        isOpen={showProfileModal}
        onClose={() =>
          setShowProfileModal(
            false
          )
        }
        user={user}
        onSave={(
          updatedUser
        ) => {
          updateUser(updatedUser);

          toast.success(
            "Profile updated successfully"
          );

          setShowProfileModal(
            false
          );
        }}
      />
    </div>
  );
};

export default AccountSidebar;