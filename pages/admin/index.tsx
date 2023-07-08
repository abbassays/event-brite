import React, { useState } from "react";

import allEvents from "../../utils/all_events.json";
import allTickets from "../../utils/all_tickets.json";
import allOrganisers from "../../utils/all_organisers.json";

import AdminLayout from "../../components/CustomUI/AdminLayout";
import Container from "../../components/CustomUI/Container";
import CountCard from "../../components/AdminDashboard/CountCard";
import EventCard from "../../components/ListCards/EventCard";
import TicketCard from "../../components/ListCards/TicketCard";
import OrganiserCard from "../../components/ListCards/OrganiserCard";
import DeleteModal from "@/components/CustomUI/DeleteModal";

const AdminOverviewPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const sections = [
    {
      title: "Recent Events",
      list: allEvents
        .sort(
          (a, b) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        )
        .slice(0, 5)
        .map((event) => <EventCard setIsOpen={setIsOpen} setSelectedId={setSelectedId} key={event.id} {...event} />),
    },
    {
      title: "Top-Priced Tickets",
      list: allTickets
        .sort((a, b) => b.price - a.price)
        .slice(0, 5)
        .map((ticket) => <TicketCard setIsOpen={setIsOpen} setSelectedId={setSelectedId} key={ticket.id} {...ticket} />),
    },
    {
      title: "Organisers",
      list: allOrganisers
        .slice(0, 5)
        .map((organiser) => (
          <OrganiserCard setIsOpen={setIsOpen} setSelectedId={setSelectedId} key={organiser.id} {...organiser} />
        )),
    },
  ];

  const handleDelete = (eventId: string) => {
    // Delete event from DB
    console.log("Deleting event with id: " + eventId);
  };

  return (
    <AdminLayout title="Admin Dashboard">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />

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
        {sections.map((section) => (
          <div>
            <h1 className="text-3xl font-medium mt-8 mb-2">{section.title}</h1>
            <div className="flex flex-col space-y-4">{section.list}</div>
          </div>
        ))}
      </Container>
    </AdminLayout>
  );
};

export default AdminOverviewPage;
