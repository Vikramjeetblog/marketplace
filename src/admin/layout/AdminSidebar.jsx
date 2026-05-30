import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Package,
  ShoppingCart,
  Users,
  Truck,
  Settings,
  LogOut,
  PackageSearch
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    name: "Sell Requests",
    icon: ClipboardList,
    path: "/admin/requests",
  },
  {
    name: "Pickups",
    icon: Truck,
    path: "/admin/pickups",
  },
  {
  name: "Inventory",
  icon: PackageSearch,
  path: "/admin/inventory",
},
  {
    name: "Marketplace Products",
    icon: Package,
    path: "/admin/products",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/admin/orders",
  },
  {
    name: "Customers",
    icon: Users,
    path: "/admin/customers",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

const AdminSidebar = () => {
  return (
    <div
      className="
        hidden
        md:flex
        w-[260px]
        min-h-screen
        bg-[#04103A]
        border-r
        border-white/10
        flex-col
        shrink-0
      "
    >
      {/* LOGO */}
      <div className="h-[72px] px-6 flex items-center border-b border-white/10">
        <div>
          <h1 className="text-[28px] font-black tracking-tight text-white">
            Rupantar
          </h1>

          <p className="text-[11px] text-slate-400 uppercase tracking-[2px]">
            Admin Panel
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 px-3 py-5 overflow-y-auto">

        <div className="mb-4 px-4">
          <p className="text-[10px] uppercase tracking-[2px] text-slate-500">
            Operations
          </p>
        </div>

        <div className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  h-[50px]
                  px-4
                  rounded-xl
                  text-[15px]
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? "bg-[#00B67A] text-white shadow-[0_8px_30px_rgba(0,182,122,0.18)]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }
                `
                }
              >
                <Icon size={18} />

                <span>
                  {item.name}
                </span>
              </NavLink>
            );
          })}

        </div>

      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 p-3">

        <button
          className="
            w-full
            h-[50px]
            rounded-xl
            flex
            items-center
            gap-3
            px-4
            text-[15px]
            font-medium
            text-slate-300
            hover:bg-red-500/10
            hover:text-red-400
            transition-all
          "
        >
          <LogOut size={18} />

          <span>
            Logout
          </span>
        </button>

      </div>
    </div>
  );
};

export default AdminSidebar;