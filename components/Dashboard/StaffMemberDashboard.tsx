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

const StaffMemberDashboard = () => {
  const { customSession, selectedOrg } = useCustomSession();

  const sections = [
    {
      title: "Recent Events",
      list: getEventByOrganiserId(selectedOrg?.id)
        .sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        )
        .slice(0, 5)
        .map((event) => <EventCard key={event.id} {...event} />),
    },
    {
      title: "Top-Revenue Tickets",
      list: getTicketsByOrganiserId(selectedOrg?.id)
        .sort((a, b) => b.price * b.soldQuantity - a.price * a.soldQuantity)
        .slice(0, 5)
        .map((ticket) => <TicketCard key={ticket.id} {...ticket} />),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CountCard
          type="Event"
          count={getEventByOrganiserId(selectedOrg?.id).length}
        />
        <CountCard
          type="Ticket"
          count={getTicketsByOrganiserId(selectedOrg?.id).length}
        />
        <CountCard
          type="Sale"
          count={getSalesData(customSession, selectedOrg?.id).length}
        />

        <CountCard
          type="Check-In"
          count={getCheckInsData(customSession, selectedOrg?.id).length}
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

export default StaffMemberDashboard;
