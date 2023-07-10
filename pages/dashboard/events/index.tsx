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
import CustomSearchBar from "@/components/CustomUI/SearchBar";

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
      return event.organiserName
        .toLowerCase()
        .includes(searchedWord.toLowerCase());
    });
    setEvents(searchedEvents.slice(0, itemsPerPage));
    setCurrentPage(1);
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
      <Button onClick={() => router.push("/dashboard/events/create")}>
        Create Event
      </Button>
    </div>
  );

  const searchBar = (
    <div className="flex justify-end">
      <CustomSearchBar
        placeholder="Search Organiser"
        onChange={(e) => handleSearch(e)}
      />
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
        className="grid grid-cols-1 gap-2"
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