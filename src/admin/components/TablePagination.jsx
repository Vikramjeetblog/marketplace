const TablePagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="px-6 py-4 border-t border-[#EEF2F6] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-sm text-[#6E7C96]">
        Showing {startItem} to {endItem} of {totalItems} results
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-10 px-4 rounded-xl border border-[#E5EEF8] text-sm font-medium text-[#020B2D] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8FAFC] transition-all"
        >
          Previous
        </button>

        <span className="h-10 px-4 rounded-xl bg-[#F8FAFC] border border-[#E5EEF8] flex items-center text-sm font-semibold text-[#020B2D]">
          {currentPage} / {totalPages}
        </span>

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-10 px-4 rounded-xl border border-[#E5EEF8] text-sm font-medium text-[#020B2D] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8FAFC] transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
