import { Search } from "lucide-react";

const TableSearch = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex-1 relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E5EEF8] outline-none"
      />
    </div>
  );
};

export default TableSearch;
