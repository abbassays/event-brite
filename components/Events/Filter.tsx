import React from "react";

import { EventType } from "../../types";
import { setegid } from "process";

type FilterProps = {
  events: EventType[];
  allEvents: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Filter = ({
  events,
  allEvents,
  setEvents,
  setCurrentPage,
}: FilterProps) => {
  const handleFilterByDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      const resetEvents = allEvents;
      setEvents(resetEvents.slice(0, 12));
      return;
    }
    setCurrentPage(1);

    const selectedEvents = allEvents.filter(
      (event) =>
        new Date(event.startDate).toDateString() ===
        new Date(e.target.value).toDateString()
    );
    setEvents(selectedEvents);
  };

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "latest") {
      const sortedEvents = [...events].sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
      setEvents(sortedEvents);
    } else if (e.target.value === "oldest") {
      const sortedEvents = [...events].sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );
      setEvents(sortedEvents);
    } else {
      const resetEvents = allEvents;
      setEvents(resetEvents.slice(0, 12));
    }
  };

  return (
    <div className="flex space-x-10 justify-end font-medium text-gray-700 bg-slate-200 p-2 rounded-lg">
      <div className="flex items-center space-x-6 w-fit">
        <label htmlFor="date" className="">
          Date
        </label>
        <input
          onChange={(e) => handleFilterByDate(e)}
          type="date"
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          placeholder="Select date"
        />
      </div>
      <div className="flex items-center space-x-2 w-fit ">
        <label htmlFor="date" className="w-28 ">
          Sort by
        </label>
        <select
          onChange={(e) => handleSorting(e)}
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        >
          <option value="">Default</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
