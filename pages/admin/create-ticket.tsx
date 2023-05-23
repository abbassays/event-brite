import React, { useEffect, useState } from "react";

import allEvents from "../../utils/all_events.json";
import { EventType } from "../../types";

import Layout from "../../components/UI/Layout";
import TicketForm from "../../components/AdminForms/TicketForm";

const CreateEvent = () => {
  const [event, setEvent] = useState<EventType>();

  const fetchEvent = () => {
    /* This will be a dynamic route with event id, event will be fetched here from event id */
    const randomEvent = allEvents[Math.floor(Math.random() * allEvents.length)];

    setEvent(randomEvent);
  };

  useEffect(() => {
    fetchEvent();
  }, [allEvents]);

  return (
    <Layout title="Create Ticket">
      <TicketForm event={event} />
    </Layout>
  );
};

export default CreateEvent;
