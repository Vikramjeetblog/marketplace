import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
return ( 
<div className="min-h-screen bg-[#F5F7FA] flex">

  {/* SIDEBAR */}
  <div className="w-[250px] shrink-0">
    <AdminSidebar />
  </div>

  {/* CONTENT */}
  <div className="flex-1 flex flex-col min-w-0">

    {/* TOP NAVBAR */}
    <AdminNavbar />

    {/* PAGE CONTENT */}
    <main className="flex-1 p-8 overflow-y-auto">
      {children}
    </main>

  </div>

</div>

);
};

export default AdminLayout;
