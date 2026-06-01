import React from "react";
import {
  User,
  Bell,
  Store,
  Truck,
  Percent,
  Shield,
  Save,
} from "lucide-react";
import AdminLayout from "../layout/AdminLayout";

const Settings = () => {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div>

          <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
            Settings
          </h1>

          <p className="text-[#6E7C96] mt-2">
            Manage platform, marketplace and admin preferences.
          </p>

        </div>

        {/* ADMIN PROFILE */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <User className="text-[#00B67A]" />

            <h2 className="text-xl font-bold text-[#020B2D]">
              Admin Profile
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Admin User"
                className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                defaultValue="admin@rupantar.com"
                className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
              />
            </div>

          </div>

        </div>

        {/* MARKETPLACE SETTINGS */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Store className="text-[#00B67A]" />

            <h2 className="text-xl font-bold text-[#020B2D]">
              Marketplace Settings
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Platform Name
              </label>

              <input
                type="text"
                defaultValue="Rupantar"
                className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Support Email
              </label>

              <input
                type="email"
                defaultValue="support@rupantar.com"
                className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
              />
            </div>

          </div>

        </div>

        {/* PICKUP SETTINGS */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Truck className="text-[#00B67A]" />

            <h2 className="text-xl font-bold text-[#020B2D]">
              Pickup Settings
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Pickup Radius (KM)
              </label>

              <input
                type="number"
                defaultValue="25"
                className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Daily Pickup Capacity
              </label>

              <input
                type="number"
                defaultValue="50"
                className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
              />
            </div>

          </div>

        </div>

        {/* COMMISSION */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Percent className="text-[#00B67A]" />

            <h2 className="text-xl font-bold text-[#020B2D]">
              Commission Settings
            </h2>

          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Marketplace Commission (%)
            </label>

            <input
              type="number"
              defaultValue="10"
              className="w-full md:w-[300px] h-12 px-4 rounded-xl border border-[#E5EEF8]"
            />
          </div>

        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Bell className="text-[#00B67A]" />

            <h2 className="text-xl font-bold text-[#020B2D]">
              Notifications
            </h2>

          </div>

          <div className="space-y-4">

            <label className="flex items-center justify-between">

              <span>Email Notifications</span>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </label>

            <label className="flex items-center justify-between">

              <span>New Sell Requests</span>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </label>

            <label className="flex items-center justify-between">

              <span>New Orders</span>

              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5"
              />

            </label>

          </div>

        </div>

        {/* SECURITY */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <Shield className="text-[#00B67A]" />

            <h2 className="text-xl font-bold text-[#020B2D]">
              Security
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input
              type="password"
              placeholder="New Password"
              className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
            />

          </div>

        </div>

        {/* SAVE BUTTON */}
        <div className="flex justify-end">

          <button
            className="
              h-12
              px-6
              rounded-xl
              bg-[#00B67A]
              text-white
              font-semibold
              flex
              items-center
              gap-2
            "
          >
            <Save size={18} />
            Save Settings
          </button>

        </div>

      </div>

    </AdminLayout>
  );
};

export default Settings;