import { Filter } from "lucide-react";

const TableFilter = ({ value, onChange, options = [], label = "Status" }) => {
  return (
    <div className="relative">
      <Filter
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#020B2D] pointer-events-none"
      />

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full lg:w-auto pl-12 pr-10 rounded-xl border border-[#E5EEF8] bg-white text-[#020B2D] outline-none appearance-none"
        aria-label={`Filter by ${label}`}
      >
        <option value="all">All {label}</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TableFilter;
