import React, { useState, useEffect } from "react";
import Link from "next/link";

import allEvents from "../utils/all_events.json";
import { EventType } from "../types";

import Layout from "../components/UI/Layout";
import CategoryContainer from "../components/Category/CategoryContainer";
import EventsContainer from "../components/Events/EventsContainer";
import Button from "../components/UI/Button";

const Home = () => {
  const [featuredEvents, setFeaturedEvents] = useState<EventType[]>([]);

  const fetchEvents = () => {
    /* Replace this code with your code to fetch events */
    const featured = allEvents
      .sort(() => Math.random() - Math.random())
      .slice(0, 12);

    setFeaturedEvents(featured);
  };

  useEffect(() => {
    fetchEvents();
  }, [allEvents]);

  return (
    <Layout title="Home">
      <CategoryContainer />
      <EventsContainer
        title="Featured Events"
        description="Check out some of our featured events."
        events={featuredEvents}
      />
      <div className="flex my-8">
        <Button className="mx-auto" variant="secondary">
          <Link href="/events">See More</Link>
        </Button>
      </div>
    </Layout>
  );
};
export default Home;
