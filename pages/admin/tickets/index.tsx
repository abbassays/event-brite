import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import allTickets from "../../../utils/all_tickets.json";
import { TicketType } from "../../../types";

import AdminLayout from "../../../components/UI/AdminLayout";
import Container from "../../../components/UI/Container";
import TicketCard from "../../../components/ListCards/TicketCard";
import DeleteModal from "../../../components/UI/DeleteModal";
import Pagination from "../../../components/UI/Pagination";
import Button from "../../../components/UI/Button";

const AllTicketsPage = () => {
  const router = useRouter();
  const itemsPerPage = 12;
  const [tickets, setTickets] = useState<TicketType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTickets = () => {
    /* Replace this code with your code to fetch tickets */
    const selectedTickets = allTickets.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setTickets(selectedTickets);
  };

  useEffect(() => {
    fetchTickets();
  }, [allTickets, currentPage]);

  const handleDelete = (ticketId: string) => {
    // Delete ticket from DB
    console.log("Deleting ticket with id: " + ticketId);
  };

  const ticketsList = tickets?.map((ticket) => (
    <TicketCard
      key={ticket.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...ticket}
    />
  ));

  const createButton = (
    <div>
      <Button onClick={() => router.push("/admin/tickets/create")}>
        Create Ticket
      </Button>
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
        className="grid grid-cols-1"
        gridItems={ticketsList}
        actionButton={createButton}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allTickets.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllTicketsPage;
