import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const pageNumbersArray = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(startPage + 4, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbersArray.push(i);
    }

    setPageNumbers(pageNumbersArray);
  }, [currentPage, totalPages]);

  const handleNextPage = () => {
    currentPage === totalPages ? null : setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    currentPage === 1 ? null : setCurrentPage(currentPage - 1);
  };

  console.log(pageNumbers);

  return (
    <div className="flex flex-col items-center mt-10">
      <span className="text-sm text-gray-700">
        Showing{" "}
        <span className="font-semibold text-gray-900">{currentPage}</span> of{" "}
        <span className="font-semibold text-gray-900">{totalPages}</span>{" "}
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 text-sm font-medium text-gray-800 rounded-l border-[1.5px] border-r-0 border-blue-500 bg-white hover:bg-slate-100"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 text-sm font-medium text-gray-800 rounded-r border-[1.5px] border-blue-500 bg-white hover:bg-slate-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
