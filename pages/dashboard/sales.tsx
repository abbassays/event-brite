import { useCustomSession } from "@/context/customSession";
import { SaleType } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { allSales } from "@/utils/json-database";

type Props = {};

const AllSalesPage = (props: Props) => {
  const router = useRouter();
  const itemsPerPage = 12;

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

  return <div>AllSalesPage</div>;
};

export default AllSalesPage;
