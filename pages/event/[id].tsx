import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import events from "../../utils/all_events.json";
import { EventType } from "../../types";

import Layout from "../../components/UI/Layout";
import Container from "../../components/UI/Container";
import EventCard from "../../components/Events/EventCard";
import EventDetails from "../../components/Events/EventDetails";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  const [event, setEvent] = useState<EventType | null>(null);

  useEffect(() => {
    if (id) {
      const event = events.find((event) => event.id === id);
      setEvent(event || null);
    }
  }, [id]);

  if (!event) return <div>Event not found</div>;

  const similarGrid = events
    .filter((_event) => _event.category === event.category)
    .map((event) => (
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
    <Layout title={event.title}>
      <EventDetails
        id={event.id}
        title={event.title}
        description={event.description}
        category={event.category}
        date={event.date}
        location={event.location}
        image={event.image}
      />

      <Container
        title="Similar Events"
        description="Here are some events that you might be interested in"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-stretch"
        gridItems={similarGrid}
      />
    </Layout>
  );
};

export default Event;
