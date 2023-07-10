import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useCustomSession } from "@/context/customSession";
import { SaleType } from "@/types";
import { allSales } from "@/utils/json-database";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";
import Pagination from "@/components/CustomUI/Pagination";
import SaleCard from "@/components/ListCards/SaleCard";

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
        // gridHeaders={searchBar}
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
