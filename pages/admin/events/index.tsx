import React, { useEffect, useState } from "react";

import allEvents from "../../../utils/all_events.json";
import { EventType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import EventCard from "../../../components/ListCards/EventCard";
import DeleteModal from "../../../components/UI/DeleteModal";

const AllEventsPage = () => {
  const [events, setEvents] = useState<EventType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const fetchEvents = () => {
    setEvents(allEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [allEvents]);

  const handleDelete = (eventId: string) => {
    // Delete event from DB
    console.log("Deleting event with id: " + eventId);
  };

  const eventsList = events?.map((event) => (
    <EventCard
      key={event.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...event}
    />
  ));

  return (
    <Layout title="All Events">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
      <Container
        title="All Events"
        className="grid grid-cols-1"
        gridItems={eventsList}
      ></Container>
    </Layout>
  );
};

export default AllEventsPage;
