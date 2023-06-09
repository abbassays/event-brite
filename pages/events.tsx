import React, { useState, useEffect } from "react";

import allEvents from "../utils/all_events.json";
import { EventType } from "../types";

import Layout from "../components/CustomUI/Layout";
import EventsContainer from "../components/Events/EventsContainer";
import Pagination from "../components/CustomUI/Pagination";
import Filter from "../components/Events/Filter";
import Container from "../components/CustomUI/Container";

const Events = () => {
  const itemsPerPage = 12;
  const [events, setEvents] = useState<EventType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEvents = () => {
    /* Replace this code with your code to fetch events */
    const selectedEvents = allEvents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setEvents(selectedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [allEvents, currentPage]);

  console.log("events", events);

  return (
    <Layout title="Events">
      <Container>
        <Filter
          events={events}
          allEvents={allEvents}
          setEvents={setEvents}
          setCurrentPage={setCurrentPage}
        />
        <EventsContainer
          events={events}
          title="All Events"
          description="Upcoming events you might be interested in."
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allEvents.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </Layout>
  );
};

export default Events;
