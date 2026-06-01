import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex">

      {/* SIDEBAR */}
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* TOP NAVBAR */}
        <AdminNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto min-w-0">
          {children}
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;
