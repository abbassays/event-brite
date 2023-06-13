import React, { useEffect, useState } from "react";

import allTickets from "../../../utils/all_tickets.json";
import { TicketType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import TicketCard from "../../../components/ListCards/TicketCard";

const AllTicketsPage = () => {
  const [tickets, setTickets] = useState<TicketType[]>();

  const fetchTickets = () => {
    setTickets(allTickets);
  };

  useEffect(() => {
    fetchTickets();
  }, [allTickets]);

  const ticketsList = tickets?.map((ticket) => (
    <TicketCard key={ticket.id} {...ticket} />
  ));

  return (
    <Layout title="All Tickets">
      <Container
        title="All Tickets"
        className="grid grid-cols-1"
        gridItems={ticketsList}
      ></Container>
    </Layout>
  );
};

export default AllTicketsPage;
