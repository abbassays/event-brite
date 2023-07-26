import React, { useEffect, useState } from "react";

import { CheckInType } from "@/types";
import { getCheckInsData } from "@/utils/json-database";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";
import { DatePickerWithRange } from "@/components/CustomUI/DateRangePicker";
import Pagination from "@/components/CustomUI/Pagination";
import CustomSearchBar from "@/components/CustomUI/SearchBar";
import CheckInCard from "@/components/ListCards/CheckInCard";
import { useCustomSession } from "@/context/customSession";

type Props = {};

const AllCheckInsPage = (props: Props) => {
  const itemsPerPage = 10;

  const { customSession, selectedOrg } = useCustomSession();

  const [allCheckIns, setAllCheckIns] = useState<CheckInType[]>([]);
  const [checkIns, setCheckIns] = useState<CheckInType[]>([]);
  const [visibleCheckIns, setVisibleCheckIns] = useState<CheckInType[]>();
  const [currentPage, setCurrentPage] = useState(1);

  const initializeCheckIns = () => {
    if (customSession) {
      if (allCheckIns.length === 0)
        setAllCheckIns(getCheckInsData(customSession, selectedOrg?.id));
      setCheckIns(getCheckInsData(customSession, selectedOrg?.id));
    }
  };

  const fetchCheckIns = () => {
    /* Replace this code with your code to fetch checkIns */
    const selectedTickets = checkIns.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setVisibleCheckIns(selectedTickets);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCheckIns(allCheckIns);
      setVisibleCheckIns(allCheckIns.slice(0, itemsPerPage));
      setCurrentPage(1);
      return;
    }

    const searchedWord = e.target.value?.toLowerCase();
    const searchedCheckIns = allCheckIns
      .filter((checkIn) => {
        return (
          checkIn.customerEmail
            .toLowerCase()
            .includes(searchedWord.toLowerCase()) ||
          checkIn.customerName
            .toLowerCase()
            .includes(searchedWord.toLowerCase())
        );
      })
      .sort((a, b) => a.eventName.localeCompare(b.eventName));
    setCheckIns(searchedCheckIns);
    setVisibleCheckIns(searchedCheckIns.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const searchBar = (
    <div className="flex flex-col md:flex-row justify-end gap-2 md:gap-4 items-end md:items-center">
      <DatePickerWithRange allItems={allCheckIns} setItems={setCheckIns} />
      <CustomSearchBar
        placeholder="Search by Customer"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );

  useEffect(() => initializeCheckIns(), [customSession, selectedOrg]);

  useEffect(() => {
    fetchCheckIns();
  }, [checkIns, currentPage]);

  const checkInsList = visibleCheckIns?.map((checkIn) => (
    <CheckInCard key={checkIn.id} {...checkIn} />
  ));

  return (
    <AdminLayout title="All Check-Ins">
      <Container
        title="All Check-Ins"
        className="grid grid-cols-1 gap-2 md:gap-4"
        gridItems={checkInsList}
        gridHeaders={searchBar}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={checkIns.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllCheckInsPage;
