import React from "react";

import {
  getEventByOrganiserId,
  getTicketsByOrganiserId,
  getStaffMemberByOrganiserId,
  getSalesData,
  getCheckInsData,
} from "@/utils/json-database";
import { useCustomSession } from "@/context/customSession";

import CountCard from "@/components/Dashboard/CountCard";
import EventCard from "@/components/ListCards/EventCard";
import TicketCard from "@/components/ListCards/TicketCard";
import StaffCard from "../ListCards/StaffCard";

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
      title: "Top-Revenue Tickets",
      list: getTicketsByOrganiserId(customSession.user.id)
        .sort((a, b) => b.price * b.soldQuantity - a.price * a.soldQuantity)
        .slice(0, 5)
        .map((ticket) => <TicketCard key={ticket.id} {...ticket} />),
    },
    {
      title: "Staff Members",
      list: getStaffMemberByOrganiserId(customSession.user.id)
        .slice(0, 5)
        .map((organiser) => <StaffCard key={organiser.id} {...organiser} />),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <CountCard type="Sale" count={getSalesData(customSession).length} />

        <CountCard
          type="Check-In"
          count={getCheckInsData(customSession).length}
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
