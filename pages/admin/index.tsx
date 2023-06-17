import React from "react";

import allEvents from "../../utils/all_events.json";
import allTickets from "../../utils/all_tickets.json";
import allOrganisers from "../../utils/all_organisers.json";

import Layout from "../../components/UI/Layout";
import Container from "../../components/UI/Container";
import CountCard from "../../components/AdminDashboard/CountCard";
import EventCard from "../../components/ListCards/EventCard";
import TicketCard from "../../components/ListCards/TicketCard";
import OrganiserCard from "../../components/ListCards/OrganiserCard";

const AdminOverviewPage = () => {
  return (
    <Layout title="Admin Dashboard">
      <Container
        title="Dashboard"
        description="Overview of all the Events, Tickets, & Organisers"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CountCard type="Event" count={allEvents.length} />
          <CountCard type="Ticket" count={allTickets.length} />
          <CountCard type="Organiser" count={allOrganisers.length} />
        </div>

        {/* Show recent events */}
        <div>
          <h1 className="text-3xl font-medium mt-8 mb-2">Recent Events</h1>
          <div className="flex flex-col space-y-4">
            {allEvents
              .sort(
                (a, b) =>
                  new Date(b.startDate).getTime() -
                  new Date(a.startDate).getTime()
              )
              .slice(0, 5)
              .map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
          </div>
        </div>

        {/* Show top priced tickets */}
        <div>
          <h1 className="text-3xl font-medium mt-8 mb-2">Top-Priced Tickets</h1>
          <div className="flex flex-col space-y-4">
            {allTickets
              .sort((a, b) => b.price - a.price)
              .slice(0, 5)
              .map((ticket) => (
                <TicketCard key={ticket.id} {...ticket} />
              ))}
          </div>
        </div>

        {/* Show 5 organisers */}
        <div>
          <h1 className="text-3xl font-medium mt-8 mb-2">Organisers</h1>
          <div className="flex flex-col space-y-4">
            {allOrganisers.slice(0, 5).map((organiser) => (
              <OrganiserCard key={organiser.id} {...organiser} />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AdminOverviewPage;
