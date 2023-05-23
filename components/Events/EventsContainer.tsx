import React from "react";

import { EventType } from "../../types";

import Container from "../UI/Container";
import EventCard from "./EventCard";

const EventsContainer = ({
  events,
  title,
  description,
}: {
  events: EventType[];
  title: string;
  description?: string;
}) => {
  const eventsGrid = events.map((event) => <EventCard {...event} />);

  return (
    <Container
      gridItems={eventsGrid}
      title={title}
      description={description}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-stretch"
    />
  );
};

export default EventsContainer;
