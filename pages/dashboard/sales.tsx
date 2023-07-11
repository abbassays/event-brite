import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useCustomSession } from "@/context/customSession";
import { SaleType } from "@/types";
import { allSales } from "@/utils/json-database";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";
import Pagination from "@/components/CustomUI/Pagination";
import SaleCard from "@/components/ListCards/SaleCard";
import CustomSearchBar from "@/components/CustomUI/SearchBar";
import { DatePickerWithRange } from "@/components/CustomUI/DateRangePicker";

type Props = {};

const AllSalesPage = (props: Props) => {
  const router = useRouter();
  const itemsPerPage = 15;

  const { customSession, selectedOrg } = useCustomSession();

  const [sales, setSales] = useState<SaleType[]>([]);
  const [visibleSales, setVisibleSales] = useState<SaleType[]>();
  const [currentPage, setCurrentPage] = useState(1);

  const initializeSales = () => {
    if (customSession?.role === "ADMIN") {
      setSales(allSales);
    }
  };

  const fetchSales = () => {
    /* Replace this code with your code to fetch sales */
    const selectedTickets = sales.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setVisibleSales(selectedTickets);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSales(allSales);
      setVisibleSales(allSales.slice(0, itemsPerPage));
      setCurrentPage(1);
      return;
    }

    const searchedWord = e.target.value?.toLowerCase();
    const searchedSales = allSales
      .filter((sale) => {
        return (
          sale.organiserName
            .toLowerCase()
            .includes(searchedWord.toLowerCase()) ||
          sale.eventName.toLowerCase().includes(searchedWord.toLowerCase())
        );
      })
      .sort((a, b) => a.eventName.localeCompare(b.eventName));
    setSales(searchedSales);
    setVisibleSales(searchedSales.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const searchBar = (
    <div className="flex flex-col sm:flex-row justify-end gap-4 items-end sm:items-center">
      <DatePickerWithRange setSales={setSales} />
      <CustomSearchBar
        placeholder="Search by Event / Organiser"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );

  useEffect(() => initializeSales(), [allSales, customSession, selectedOrg]);

  useEffect(() => {
    fetchSales();
  }, [sales, currentPage]);

  const salesList = visibleSales?.map((sale) => (
    <SaleCard key={sale.id} {...sale} />
  ));

  return (
    <AdminLayout title="All Sales">
      <Container
        title="All Sales"
        className="grid grid-cols-1 gap-2"
        gridItems={salesList}
        gridHeaders={searchBar}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={sales.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllSalesPage;
