import React, { useEffect, useState } from "react";

import allEvents from "../../../utils/all_events.json";
import { EventType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import EventCard from "../../../components/ListCards/EventCard";

const AllEventsPage = () => {
  const [events, setEvents] = useState<EventType[]>();

  const fetchEvents = () => {
    setEvents(allEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [allEvents]);

  const eventsList = events?.map((event) => (
    <EventCard key={event.id} {...event} />
  ));

  return (
    <Layout title="All Events">
      <Container
        title="All Events"
        className="grid grid-cols-1"
        gridItems={eventsList}
      ></Container>
    </Layout>
  );
};

export default AllEventsPage;
