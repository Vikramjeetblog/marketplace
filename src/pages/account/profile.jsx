import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import AccountSidebar from "../../components/account/AccountSidebar";

import EditProfileModal from "../../components/modals/EditProfileModal";

import { useUserStore } from "../../store/useUserStore";

import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUser } =
    useUserStore();

  const [showProfileModal, setShowProfileModal] =
    useState(false);

  // SAVE PROFILE
  const handleSaveProfile = (
    updatedUser
  ) => {
    updateUser(updatedUser);

    toast.success(
      "Profile updated successfully"
    );

    setShowProfileModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

          {/* SIDEBAR */}
          <AccountSidebar />

          {/* RIGHT */}
          <div>

            {/* HEADER */}
            <div className="mb-8">

              <h1 className="text-[40px] leading-tight font-black text-[#020B2D]">
                My Profile
              </h1>

              <p className="mt-2 text-[#6E7C96] text-[15px]">
                Manage your profile
                information and account
                details.
              </p>
            </div>

            {/* PROFILE CARD */}
            <div className="bg-white rounded-[32px] border border-[#E5EEF8] p-8 shadow-sm">

              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* LEFT */}
                <div className="flex items-center gap-5">

                  {/* AVATAR */}
                  <div className="w-24 h-24 rounded-full bg-[#00B67A] text-white flex items-center justify-center text-[38px] font-black shadow-lg shadow-[#00B67A]/20">

                    {user?.name?.charAt(
                      0
                    ) || "R"}
                  </div>

                  {/* INFO */}
                  <div>
                    <h2 className="text-[34px] leading-tight font-black text-[#020B2D]">
                      {user?.name ||
                        "Rupantar User"}
                    </h2>

                    <p className="mt-2 text-[#6E7C96]">
                      Premium Rupantar
                      Member
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setShowProfileModal(
                      true
                    )
                  }
                  className="h-12 px-7 rounded-full bg-[#020B2D] text-white text-sm font-bold hover:opacity-95 transition-all w-fit"
                >
                  Edit Profile
                </button>
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-[#E5EEF8] my-8" />

              {/* DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* EMAIL */}
                <div className="bg-[#F7F9FC] border border-[#E5EEF8] rounded-[24px] p-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                    <Mail
                      size={22}
                      className="text-[#00B67A]"
                    />
                  </div>

                  <p className="mt-5 text-sm text-[#6E7C96]">
                    Email Address
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold text-[#020B2D] break-all">
                    {user?.email ||
                      "No Email"}
                  </h3>
                </div>

                {/* PHONE */}
                <div className="bg-[#F7F9FC] border border-[#E5EEF8] rounded-[24px] p-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#020B2D]/10 flex items-center justify-center">

                    <Phone
                      size={22}
                      className="text-[#020B2D]"
                    />
                  </div>

                  <p className="mt-5 text-sm text-[#6E7C96]">
                    Contact Number
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold text-[#020B2D]">
                    {user?.phone ||
                      "Not Added"}
                  </h3>
                </div>

                {/* ALT NUMBER */}
                <div className="bg-[#F7F9FC] border border-[#E5EEF8] rounded-[24px] p-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/10 flex items-center justify-center">

                    <Phone
                      size={22}
                      className="text-[#FFB800]"
                    />
                  </div>

                  <p className="mt-5 text-sm text-[#6E7C96]">
                    Alternate Number
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold text-[#020B2D]">
                    {user?.alternatePhone ||
                      "Not Added"}
                  </h3>
                </div>

                {/* LOCATION */}
                <div className="bg-[#F7F9FC] border border-[#E5EEF8] rounded-[24px] p-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                    <MapPin
                      size={22}
                      className="text-[#00B67A]"
                    />
                  </div>

                  <p className="mt-5 text-sm text-[#6E7C96]">
                    Region
                  </p>

                  <h3 className="mt-1 text-[18px] font-bold text-[#020B2D]">
                    Siliguri, India
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <EditProfileModal
        isOpen={showProfileModal}
        onClose={() =>
          setShowProfileModal(false)
        }
        user={user}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default Profile;