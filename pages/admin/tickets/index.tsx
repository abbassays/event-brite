import React, { useEffect, useState } from "react";

import allTickets from "../../../utils/all_tickets.json";
import { TicketType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import TicketCard from "../../../components/ListCards/TicketCard";
import DeleteModal from "../../../components/UI/DeleteModal";

const AllTicketsPage = () => {
  const [tickets, setTickets] = useState<TicketType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const fetchTickets = () => {
    setTickets(allTickets);
  };

  useEffect(() => {
    fetchTickets();
  }, [allTickets]);

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

  return (
    <Layout title="All Tickets">
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
      ></Container>
    </Layout>
  );
};

export default AllTicketsPage;
