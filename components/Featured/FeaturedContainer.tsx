import React, { useState, useEffect } from "react";

import events from "../../utils/all_events.json";
import { EventType } from "../../types";

import Container from "../UI/Container";

import EventCard from "./EventCard";

const FeaturedContainer = () => {
  const [featuredEvents, setFeaturedEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const featured = events
      .sort(() => Math.random() - Math.random())
      .slice(0, 12);

    setFeaturedEvents(featured);
  }, [events]);

  return (
    <Container
      title="Featured Events"
      description="Check out some of our featured events"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-stretch"
    >
      {featuredEvents.map((event) => (
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
      ))}
    </Container>
  );
};

export default FeaturedContainer;
