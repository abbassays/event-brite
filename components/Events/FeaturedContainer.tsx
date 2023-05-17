import React, { useState, useEffect } from "react";
import Link from "next/link";

import events from "../../utils/all_events.json";
import { EventType } from "../../types";

import Container from "../UI/Container";
import EventCard from "./EventCard";
import Button from "../UI/Button";

const FeaturedContainer = () => {
  const [featuredEvents, setFeaturedEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const featured = events
      .sort(() => Math.random() - Math.random())
      .slice(0, 12);

    setFeaturedEvents(featured);
  }, [events]);

  const featuredGrid = featuredEvents.map((event) => (
    <EventCard
      key={event.id}
      name={event.name}
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
      title="Featured Events"
      description="Check out some of our featured events"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-stretch"
      gridItems={featuredGrid}
    >
      <div className="flex">
        <Button className="mx-auto mt-16" variant="secondary">
          <Link href="/events">See More</Link>
        </Button>
      </div>
    </Container>
  );
};

export default FeaturedContainer;
