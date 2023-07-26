import React from "react";

import {
  allEvents,
  allOrganisers,
  allStaffMembers,
  allTickets,
  allSales,
  allCheckIns,
} from "@/utils/json-database";

import CountCard from "@/components/Dashboard/CountCard";
import EventCard from "@/components/ListCards/EventCard";
import TicketCard from "@/components/ListCards/TicketCard";
import OrganiserCard from "@/components/ListCards/OrganiserCard";

type Props = {};

const AdminDashboard = (props: Props) => {
  const sections = [
    {
      title: "Recent Events",
      list: allEvents
        .sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        )
        .slice(0, 5)
        .map((event) => <EventCard key={event.id} {...event} />),
    },
    {
      title: "Top-Revenue Tickets",
      list: allTickets
        .sort((a, b) => b.price * b.soldQuantity - a.price * a.soldQuantity)
        .slice(0, 5)
        .map((ticket) => <TicketCard key={ticket.id} {...ticket} />),
    },
    {
      title: "Organisers",
      list: allOrganisers
        .slice(0, 5)
        .map((organiser) => (
          <OrganiserCard key={organiser.id} {...organiser} />
        )),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CountCard type="Event" count={allEvents.length} />
        <CountCard type="Ticket" count={allTickets.length} />
        <CountCard type="Organiser" count={allOrganisers.length} />
        <CountCard type="Staff Member" count={allStaffMembers.length} />
        <CountCard type="Sale" count={allSales.length} />
        <CountCard type="Check-In" count={allCheckIns.length} />
      </div>

      {/* Show recent events */}
      {sections.map((section) => (
        <div>
          <h1 className="text-3xl font-medium mt-8 mb-2">{section.title}</h1>
          <div className="flex flex-col space-y-4">{section.list}</div>
        </div>
      ))}
    </>
  );
};

export default AdminDashboard;
