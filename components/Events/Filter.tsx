import React from "react";

import { EventType } from "../../types";

type FilterProps = {
  events: EventType[];
  allEvents: EventType[];
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
};

const Filter = ({ events, allEvents, setEvents }: FilterProps) => {
  const handleFilterByDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setEvents(allEvents);
      return;
    }

    const selectedEvents = events.filter(
      (event) =>
        new Date(event.date).toDateString() ===
        new Date(e.target.value).toDateString()
    );
    setEvents(selectedEvents);
  };

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "latest") {
      const sortedEvents = [...events].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setEvents(sortedEvents);
    } else if (e.target.value === "oldest") {
      const sortedEvents = [...events].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setEvents(sortedEvents);
    } else {
      console.log("here");
      setEvents(allEvents);
    }
  };

  return (
    <div className="flex space-x-10 justify-end font-medium text-gray-700 bg-blue-100 p-2 rounded-lg">
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
