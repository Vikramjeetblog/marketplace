import { useState } from "react";
import toast from "react-hot-toast";
import {
  Package,
  Wrench,
  Eye,
  CheckCircle,
  AlertTriangle,
  Plus,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import ConfirmModal from "../../components/common/ConfirmModal";
import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";

const inventoryStats = [
  {
    title: "Total Assets",
    value: "186",
    icon: Package,
  },
  {
    title: "Under Inspection",
    value: "24",
    icon: AlertTriangle,
  },
  {
    title: "Under Repair",
    value: "18",
    icon: Wrench,
  },
  {
    title: "Ready To List",
    value: "44",
    icon: CheckCircle,
  },
];

const initialInventoryItems = [
  {
    id: "INV001",
    asset: "Apple iPhone 13",
    category: "Mobile",
    condition: "Excellent",
    purchaseCost: 18000,
    repairCost: 500,
    expectedPrice: 24999,
    status: "Ready To List",
  },
  {
    id: "INV002",
    asset: "Dell Latitude 7420",
    category: "Laptop",
    condition: "Good",
    purchaseCost: 15000,
    repairCost: 1500,
    expectedPrice: 22999,
    status: "Repairing",
  },
  {
    id: "INV003",
    asset: "Godrej Sofa Set",
    category: "Furniture",
    condition: "Fair",
    purchaseCost: 5000,
    repairCost: 0,
    expectedPrice: 8999,
    status: "Inspection",
  },
];

const inventoryStatuses = [
  "Inspection",
  "Repairing",
  "Ready To List",
  "Listed",
  "Sold",
];

const emptyForm = {
  asset: "",
  category: "",
  condition: "",
  purchaseCost: "",
  status: "Inspection",
};

const statusClasses = {
  Inspection: "bg-yellow-100 text-yellow-700",
  Repairing: "bg-orange-100 text-orange-700",
  "Ready To List": "bg-green-100 text-green-700",
  Listed: "bg-blue-100 text-blue-700",
  Sold: "bg-slate-100 text-slate-700",
};

const InventoryFormModal = ({
  isOpen,
  mode,
  formData,
  onChange,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen flex items-center justify-center p-4">

        {/* MODAL */}
        <div className="w-full max-w-[560px] bg-white rounded-[32px] overflow-hidden shadow-2xl">

          {/* HEADER */}
          <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-[#EEF2F6]">

            <div>
              <h2 className="text-[32px] leading-none font-black text-[#020B2D]">
                {mode === "edit" ? "Edit Inventory" : "Add Inventory"}
              </h2>

              <p className="mt-3 text-sm text-[#6E7C96]">
                {mode === "edit"
                  ? "Update inventory item details"
                  : "Add a new product to inventory"}
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F9FC] transition-all"
            >
              <X
                size={22}
                className="text-[#020B2D]"
              />
            </button>
          </div>

          {/* BODY */}
          <form
            onSubmit={onSubmit}
            className="px-6 py-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Product Name
                </label>

                <input
                  type="text"
                  name="asset"
                  value={formData.asset}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Condition
                </label>

                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Purchase Price
                </label>

                <input
                  type="number"
                  name="purchaseCost"
                  min="0"
                  value={formData.purchaseCost}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={onChange}
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] bg-white outline-none"
                >
                  {inventoryStatuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {status}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* ACTIONS */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <button
                type="button"
                onClick={onClose}
                className="h-[52px] rounded-2xl border border-[#00B67A] text-[#00B67A] text-[14px] font-bold hover:bg-[#00B67A]/5 transition-all"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="h-[52px] rounded-2xl bg-[#00B67A] text-white text-[14px] font-bold hover:opacity-90 transition-all"
              >
                {mode === "edit" ? "Save Changes" : "Add Item"}
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [formData, setFormData] = useState(emptyForm);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const openAddModal = () => {
    setFormMode("add");
    setSelectedItem(null);
    setFormData(emptyForm);
    setIsFormOpen(true);
  };

  const openEditModal = (item) => {
    setFormMode("edit");
    setSelectedItem(item);
    setFormData({
      asset: item.asset,
      category: item.category,
      condition: item.condition || "",
      purchaseCost: String(item.purchaseCost),
      status: item.status,
    });
    setIsFormOpen(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
    setSelectedItem(null);
    setFormData(emptyForm);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const purchaseCost = Number(formData.purchaseCost);

    if (formMode === "edit" && selectedItem) {
      setInventoryItems((currentItems) =>
        currentItems.map((item) =>
          item.id === selectedItem.id
            ? {
                ...item,
                asset: formData.asset,
                category: formData.category,
                condition: formData.condition,
                purchaseCost,
                status: formData.status,
              }
            : item
        )
      );

      toast.success("Inventory item updated successfully");
      closeFormModal();
      return;
    }

    const nextIdNumber = inventoryItems.reduce((highestId, item) => {
      const numericId = Number(item.id.replace("INV", ""));

      return Number.isNaN(numericId) ? highestId : Math.max(highestId, numericId);
    }, 0) + 1;
    const newItem = {
      id: `INV${String(nextIdNumber).padStart(3, "0")}`,
      asset: formData.asset,
      category: formData.category,
      condition: formData.condition,
      purchaseCost,
      repairCost: 0,
      expectedPrice: purchaseCost,
      status: formData.status,
    };

    setInventoryItems((currentItems) => [newItem, ...currentItems]);
    toast.success("Inventory item added successfully");
    closeFormModal();
  };

  const handleDeleteConfirm = () => {
    if (!deleteItem) return;

    setInventoryItems((currentItems) =>
      currentItems.filter((item) => item.id !== deleteItem.id)
    );
    setDeleteItem(null);
    toast.success("Inventory item deleted successfully");
  };

  const handleStatusChange = (itemId, status) => {
    setInventoryItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              status,
            }
          : item
      )
    );
    toast.success("Inventory status updated");
  };

  const columns = [
    {
      key: "id",
      header: "Inventory ID",
      accessor: (item) => item.id,
      cellClassName: "px-6 py-5 font-semibold",
    },
    {
      key: "asset",
      header: "Asset",
      accessor: (item) => item.asset,
    },
    {
      key: "category",
      header: "Category",
      accessor: (item) => item.category,
    },
    {
      key: "condition",
      header: "Condition",
      accessor: (item) => item.condition || "-",
    },
    {
      key: "purchaseCost",
      header: "Purchase Cost",
      accessor: (item) => item.purchaseCost,
      searchValue: (item) => `₹${item.purchaseCost.toLocaleString()} ${item.purchaseCost}`,
      render: (item) => `₹${item.purchaseCost.toLocaleString()}`,
    },
    {
      key: "repairCost",
      header: "Repair Cost",
      accessor: (item) => item.repairCost,
      searchValue: (item) => `₹${item.repairCost.toLocaleString()} ${item.repairCost}`,
      render: (item) => `₹${item.repairCost.toLocaleString()}`,
    },
    {
      key: "expectedPrice",
      header: "Expected Price",
      accessor: (item) => item.expectedPrice,
      searchValue: (item) => `₹${item.expectedPrice.toLocaleString()} ${item.expectedPrice}`,
      cellClassName: "px-6 py-5 font-semibold",
      render: (item) => `₹${item.expectedPrice.toLocaleString()}`,
    },
    {
      key: "status",
      header: "Status",
      accessor: (item) => item.status,
      render: (item) => (
        <select
          value={item.status}
          onChange={(event) => handleStatusChange(item.id, event.target.value)}
          className={`px-3 py-1 rounded-full text-xs font-semibold outline-none border-0 ${statusClasses[item.status]}`}
        >
          {inventoryStatuses.map((status) => (
            <option
              key={status}
              value={status}
            >
              {status}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: "action",
      header: "Action",
      searchable: false,
      sortable: false,
      render: (item) => (
        <div className="flex gap-2">
          <Link
            to={`/admin/inventory/${item.id}`}
            className="
              h-10
              w-10
              rounded-xl
              border
              border-[#E5EEF8]
              flex
              items-center
              justify-center
              hover:bg-[#F8FAFC]
            "
          >
            <Eye size={16} />
          </Link>

          <button
            type="button"
            onClick={() => openEditModal(item)}
            className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
          >
            <Pencil size={16} />
          </button>

          <button
            type="button"
            onClick={() => setDeleteItem(item)}
            className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Inventory Management
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Track purchased assets, repairs, inspections and listing readiness.
            </p>
          </div>

          <button
            type="button"
            onClick={openAddModal}
            className="h-12 px-5 rounded-xl bg-[#00B67A] text-white font-semibold flex items-center gap-2"
          >
            <Plus size={18} />
            Add Product
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {inventoryStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-white border border-[#EEF2F6] rounded-3xl p-5"
              >
                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-[#6E7C96]">
                      {stat.title}
                    </p>

                    <h2 className="text-2xl lg:text-3xl font-black text-[#020B2D] mt-2">
                      {stat.value}
                    </h2>

                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                    <Icon
                      size={22}
                      className="text-[#00B67A]"
                    />

                  </div>

                </div>
              </div>
            );
          })}

        </div>

        <DataTable
          data={inventoryItems}
          columns={columns}
          searchPlaceholder="Search inventory..."
          minWidth="1080px"
        />

      </div>

      <InventoryFormModal
        isOpen={isFormOpen}
        mode={formMode}
        formData={formData}
        onChange={handleFormChange}
        onClose={closeFormModal}
        onSubmit={handleFormSubmit}
      />

      <ConfirmModal
        isOpen={Boolean(deleteItem)}
        title="Delete Inventory Item"
        description="Are you sure you want to delete this inventory item?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteItem(null)}
      />

    </AdminLayout>
  );
};

export default Inventory;
