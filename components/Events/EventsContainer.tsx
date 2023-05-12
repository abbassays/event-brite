import React, { useState, useEffect } from "react";

import allEvents from "../../utils/all_events.json";
import { EventType } from "../../types";

import Container from "../UI/Container";
import EventCard from "./EventCard";
import Pagination from "../UI/Pagination";

const EventsContainer = () => {
  const itemsPerPage = 12;
  const [events, setEvents] = useState<EventType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const selectedEvents = allEvents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    setEvents(selectedEvents);
  }, [allEvents, currentPage]);

  const eventsGrid = events.map((event) => (
    <EventCard
      key={event.id}
      title={event.title}
      description={event.description}
      category={event.category}
      date={event.date}
      location={event.location}
      image={event.image}
      id={event.id}
    />
  ));

  return (
    <Container
      gridItems={eventsGrid}
      title="Featured Events"
      description="Check out some of our featured events"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-stretch"
    >
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={allEvents.length}
        itemsPerPage={itemsPerPage}
      />
    </Container>
  );
};

export default EventsContainer;
