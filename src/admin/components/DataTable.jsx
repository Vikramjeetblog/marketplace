import { useMemo, useState } from "react";
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import TableFilter from "./TableFilter";
import TablePagination from "./TablePagination";
import TableSearch from "./TableSearch";

const getColumnValue = (row, column) => {
  if (column.accessor) {
    return column.accessor(row);
  }

  if (column.key) {
    return row[column.key];
  }

  return "";
};

const normalizeValue = (value) => {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).toLowerCase();
};

const compareValues = (firstValue, secondValue) => {
  if (typeof firstValue === "number" && typeof secondValue === "number") {
    return firstValue - secondValue;
  }

  return String(firstValue ?? "").localeCompare(String(secondValue ?? ""), undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

const DataTable = ({
  data,
  columns,
  title,
  searchPlaceholder = "Search...",
  statusKey = "status",
  statusLabel = "Status",
  pageSize = 5,
  minWidth = "760px",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const statusOptions = useMemo(() => {
    return Array.from(
      new Set(
        data
          .map((item) => item[statusKey])
          .filter(Boolean)
      )
    );
  }, [data, statusKey]);

  const searchableColumns = useMemo(() => {
    return columns.filter((column) => column.searchable !== false);
  }, [columns]);

  const filteredData = useMemo(() => {
    const query = normalizeValue(searchTerm).trim();

    return data.filter((item) => {
      const matchesStatus = statusFilter === "all" || item[statusKey] === statusFilter;

      if (!matchesStatus) {
        return false;
      }

      if (!query) {
        return true;
      }

      return searchableColumns.some((column) => {
        const value = column.searchValue
          ? column.searchValue(item)
          : getColumnValue(item, column);

        return normalizeValue(value).includes(query);
      });
    });
  }, [data, searchTerm, searchableColumns, statusFilter, statusKey]);

  const sortedData = useMemo(() => {
    if (!sortConfig) {
      return filteredData;
    }

    const sorted = [...filteredData].sort((firstItem, secondItem) => {
      const column = columns.find((item) => item.key === sortConfig.key);

      if (!column) {
        return 0;
      }

      const firstValue = column.sortValue
        ? column.sortValue(firstItem)
        : getColumnValue(firstItem, column);
      const secondValue = column.sortValue
        ? column.sortValue(secondItem)
        : getColumnValue(secondItem, column);

      return compareValues(firstValue, secondValue);
    });

    return sortConfig.direction === "asc" ? sorted : sorted.reverse();
  }, [columns, filteredData, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedData = sortedData.slice(
    (safeCurrentPage - 1) * pageSize,
    safeCurrentPage * pageSize
  );

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (column.sortable === false) {
      return;
    }

    setCurrentPage(1);
    setSortConfig((currentSort) => {
      if (!currentSort || currentSort.key !== column.key) {
        return {
          key: column.key,
          direction: "asc",
        };
      }

      return {
        key: column.key,
        direction: currentSort.direction === "asc" ? "desc" : "asc",
      };
    });
  };

  const getSortIcon = (column) => {
    if (column.sortable === false || !sortConfig || sortConfig.key !== column.key) {
      return <ChevronsUpDown size={14} />;
    }

    return sortConfig.direction === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#EEF2F6] rounded-3xl p-5">
        <div className="flex flex-col lg:flex-row gap-4">
          <TableSearch
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
          />

          <TableFilter
            value={statusFilter}
            onChange={handleStatusChange}
            options={statusOptions}
            label={statusLabel}
          />
        </div>
      </div>

      <div className="bg-white border border-[#EEF2F6] rounded-3xl overflow-hidden">
        {title && (
          <div className="px-6 py-5 border-b border-[#EEF2F6]">
            <h2 className="font-bold text-[#020B2D]">
              {title}
            </h2>
          </div>
        )}

        <div className="overflow-x-auto">
          <table
            className="w-full"
            style={{ minWidth }}
          >
            <thead>
              <tr className="bg-[#F8FAFC]">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-4 text-left text-sm text-[#6E7C96]"
                  >
                    {column.sortable === false ? (
                      column.header
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSort(column)}
                        className="inline-flex items-center gap-2 text-left text-sm text-[#6E7C96] hover:text-[#020B2D] transition-all"
                      >
                        <span>{column.header}</span>
                        {getSortIcon(column)}
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-[#EEF2F6]"
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={column.cellClassName || "px-6 py-5"}
                      >
                        {column.render
                          ? column.render(item)
                          : getColumnValue(item, column)}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className="border-t border-[#EEF2F6]">
                  <td
                    colSpan={columns.length}
                    className="px-6 py-10 text-center text-[#6E7C96]"
                  >
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <TablePagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          totalItems={sortedData.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DataTable;
