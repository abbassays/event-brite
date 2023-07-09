import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

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
  const itemsPerPage = 10;
  const [events, setEvents] = useState<EventType[]>(allEvents);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [searchedWord, setSearchedWord] = useState<string>("");

  const fetchEvents = () => {
    /* Replace this code with your code to fetch events */
    const selectedEvents = allEvents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setEvents(selectedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [allEvents, currentPage]);

  const handleDelete = (eventId: string) => {
    // Delete event from DB
    console.log("Deleting event with id: " + eventId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedWord = e.target.value?.toLowerCase();
    const searchedEvents = allEvents.filter((event) => {
      return event.name.toLowerCase().includes(searchedWord.toLowerCase());
    });
    setEvents(searchedEvents);
    setCurrentPage(0);
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

  const searchBar = (
    <div className="flex justify-end">
      <div className="flex justify-end border rounded-lg overflow-hidden w-full max-w-xs">
        <input
          className="p-2 w-full text-gray-500 font-medium leading-tight focus:outline-blue-500 focus:shadow-outline"
          type="text"
          placeholder="Search Organizers"
          onChange={(e) => handleSearch(e)}
        />
        <div className="text-blue-500 bg-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
          <FaSearch />
        </div>
      </div>
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
        gridItems={eventsList}
        actionButton={createButton}
        gridHeaders={searchBar}
      >
        {/* <EventsTable data={events} columns={eventsColumn} showFilter /> */}

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allEvents.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllEventsPage;
