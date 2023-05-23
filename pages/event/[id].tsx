import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import events from "../../utils/all_events.json";
import { EventType } from "../../types";

import Layout from "../../components/UI/Layout";
import EventsContainer from "../../components/Events/EventsContainer";
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

  if (!event) return <div>Loading...</div>;

  const similarGrid = events.filter(
    (_event) => _event.category === event.category && _event.id !== event.id
  );

  return (
    <Layout title={event.name}>
      <EventDetails {...event} />

      <EventsContainer
        events={similarGrid}
        title="Similar Events"
        description="Here are some events that you might be interested in"
      />
    </Layout>
  );
};

export default Event;
