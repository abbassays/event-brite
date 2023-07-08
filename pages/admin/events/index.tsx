import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { allEvents } from "@/utils/json-database";
import { EventType } from "../../../types";

import AdminLayout from "../../../components/CustomUI/AdminLayout";
import Container from "../../../components/CustomUI/Container";
import EventCard from "../../../components/ListCards/EventCard";
import DeleteModal from "../../../components/CustomUI/DeleteModal";
import Pagination from "../../../components/CustomUI/Pagination";
import Button from "../../../components/CustomUI/Button";
import { EventsTable } from "@/components/Tables/EventsTable";
import { eventsColumn } from "@/components/Tables/columns/EventsColumn";

const AllEventsPage = () => {
  const router = useRouter();
  // const itemsPerPage = 10;
  const [events, setEvents] = useState<EventType[]>(allEvents);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const fetchEvents = () => {
  //   /* Replace this code with your code to fetch events */
  //   const selectedEvents = allEvents.slice(
  //     (currentPage - 1) * itemsPerPage,
  //     currentPage * itemsPerPage
  //   );
  //   setEvents(selectedEvents);
  // };

  // useEffect(() => {
  //   fetchEvents();
  // }, [allEvents, currentPage]);

  const handleDelete = (eventId: string) => {
    // Delete event from DB
    console.log("Deleting event with id: " + eventId);
  };

  const eventsList = events?.map((event) => (
    <EventCard
      key={event.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...event}
    />
  ));

  const createButton = (
    <div>
      <Button onClick={() => router.push("/admin/events/create")}>
        Create Event
      </Button>
    </div>
  );

  return (
    <AdminLayout title="All Events">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
      <Container
        title="All Events"
        className="grid grid-cols-1"
        // gridItems={eventsList}
        actionButton={createButton}
      >
        <EventsTable data={events} columns={eventsColumn} showFilter />

        {/* <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allEvents.length}
          itemsPerPage={itemsPerPage}
        /> */}
      </Container>
    </AdminLayout>
  );
};

export default AllEventsPage;
