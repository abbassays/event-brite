import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { allTickets, getTicketsByOrganiserId } from "@/utils/json-database";
import { TicketType } from "@/types";

import Pagination from "@/components/CustomUI/Pagination";
import Button from "@/components/CustomUI/Button";
import CustomSearchBar from "@/components/CustomUI/SearchBar";
import TicketCard from "@/components/ListCards/TicketCard";
import DeleteModal from "@/components/CustomUI/DeleteModal";
import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";
import { useCustomSession } from "@/context/customSession";

const AllTicketsPage = () => {
  const router = useRouter();
  const itemsPerPage = 12;

  const { customSession, selectedOrg } = useCustomSession();

  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [visibleTickets, setVisibleTickets] = useState<TicketType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const initializeTickets = () => {
    if (customSession?.role === "ADMIN") {
      setTickets(allTickets);
    } else if (customSession?.role === "ORGANISER") {
      setTickets(getTicketsByOrganiserId(customSession.user.id));
    } else if (customSession?.role === "STAFF") {
      setTickets(getTicketsByOrganiserId(selectedOrg.id));
    }
  };

  const fetchTickets = () => {
    /* Replace this code with your code to fetch tickets */
    const selectedTickets = tickets.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setVisibleTickets(selectedTickets);
  };

  useEffect(
    () => initializeTickets(),
    [allTickets, customSession, selectedOrg]
  );

  useEffect(() => {
    fetchTickets();
  }, [tickets, currentPage]);

  const handleDelete = (ticketId: string) => {
    // Delete ticket from DB
    console.log("Deleting ticket with id: " + ticketId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedWord = e.target.value?.toLowerCase();
    const searchedTickets = tickets.filter((ticket) => {
      return (
        ticket.organiserName
          .toLowerCase()
          .includes(searchedWord.toLowerCase()) ||
        ticket.eventName.toLowerCase().includes(searchedWord.toLowerCase())
      );
    });
    setVisibleTickets(searchedTickets.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const ticketsList = visibleTickets?.map((ticket) => (
    <TicketCard
      key={ticket.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...ticket}
    />
  ));

  const createButton = (
    <div>
      <Button onClick={() => router.push("/dashboard/tickets/create")}>
        Create Ticket
      </Button>
    </div>
  );

  const searchBar = (
    <div className="flex justify-end">
      <CustomSearchBar
        placeholder="Search Event/Organiser"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );

  return (
    <AdminLayout title="All Tickets">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
      <Container
        title="All Tickets"
        className="grid grid-cols-1 gap-2"
        gridItems={ticketsList}
        gridHeaders={searchBar}
        actionButton={createButton}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={tickets.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllTicketsPage;
