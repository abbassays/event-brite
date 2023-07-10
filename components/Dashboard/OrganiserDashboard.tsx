import React from "react";

import {
  getEventByOrganiserId,
  getTicketsByOrganiserId,
  getStaffMemberByOrganiserId,
} from "@/utils/json-database";

import CountCard from "@/components/Dashboard/CountCard";
import EventCard from "@/components/ListCards/EventCard";
import TicketCard from "@/components/ListCards/TicketCard";
import StaffCard from "../ListCards/StaffCard";
import { useCustomSession } from "@/context/customSession";

const OrganiserDashboard = () => {
  const { customSession } = useCustomSession();

  const sections = [
    {
      title: "Recent Events",
      list: getEventByOrganiserId(customSession.user.id)
        .sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        )
        .slice(0, 5)
        .map((event) => <EventCard key={event.id} {...event} />),
    },
    {
      title: "Top-Priced Tickets",
      list: getTicketsByOrganiserId(customSession.user.id)
        .sort((a, b) => b.price - a.price)
        .slice(0, 5)
        .map((ticket) => <TicketCard key={ticket.id} {...ticket} />),
    },
    {
      title: "Organisers",
      list: getStaffMemberByOrganiserId(customSession.user.id)
        .slice(0, 5)
        .map((organiser) => <StaffCard key={organiser.id} {...organiser} />),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CountCard
          type="Event"
          count={getEventByOrganiserId(customSession.user.id).length}
        />
        <CountCard
          type="Ticket"
          count={getTicketsByOrganiserId(customSession.user.id).length}
        />
        <CountCard
          type="Staff Member"
          count={getStaffMemberByOrganiserId(customSession.user.id).length}
        />
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

export default OrganiserDashboard;
