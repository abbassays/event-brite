import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { allTickets, allEvents, getTicketById } from "@/utils/json-database";

import Layout from "../../../components/CustomUI/Layout";
import TicketForm from "../../../components/AdminForms/TicketForm";
import { EventType, TicketType } from "@/types";
import PageLoader from "@/components/CustomUI/PageLoader";

const EditTicketPage = () => {
  const [ticket, setTicket] = useState<TicketType | undefined>();
  const [events, setEvents] = useState<EventType[]>();

  const router = useRouter();
  const { id } = router.query;

  const fetchData = () => {
    setTicket(getTicketById(id as string));
    setEvents(allEvents);
  };

  useEffect(() => {
    if (router.isReady) fetchData();
  }, [router]);

  if (!ticket) return <PageLoader />;

  return (
    <Layout title="Edit Ticket">
      <TicketForm ticket={ticket} eventsList={events} />
    </Layout>
  );
};
export default EditTicketPage;
