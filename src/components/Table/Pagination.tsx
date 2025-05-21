import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import { PaginationProps } from "./types";

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-2 mb-2 text-sm">
      <div className="flex items-center cursor-pointer">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded text-black flex items-center gap-1 cursor-pointer ${
            currentPage === totalPages
              ? "text-gray-600 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ArrowRightIcon width={16} height={16} />
          <span>بعدی</span>
        </button>
      </div>

      <div dir="ltr" className="flex items-center gap-2 cursor-pointer">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() =>
              page !== "..." ? onPageChange(page as number) : undefined
            }
            className={`px-3 py-1 rounded text-black cursor-pointer ${
              page === "..."
                ? ""
                : currentPage === page
                ? "bg-white border border-gray-200"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex items-center cursor-pointer">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded text-black flex items-center gap-1 cursor-pointer ${
            currentPage === 1
              ? "text-gray-600 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <span>قبلی</span>
          <ArrowLeftIcon width={16} height={16} />
        </button>
      </div>
    </div>
  );
};
