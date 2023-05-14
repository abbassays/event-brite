import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";

import events from "../../utils/all_events.json";
import { EventType } from "../../types";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const [matchedEvents, setMatchedEvents] = useState<EventType[] | []>([]);
  const [resultsFound, setResultsFound] = useState<boolean | null>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searched = e.target.value;

    if (searched.length > 2) {
      const matchedEvents = events.filter(
        (event) =>
          event.title.toLowerCase().includes(searched.toLowerCase()) ||
          event.location.toLowerCase().includes(searched.toLowerCase()) ||
          event.category.toLowerCase().includes(searched.toLowerCase())
      );
      matchedEvents.length > 0 ? setResultsFound(true) : setResultsFound(false);
      setMatchedEvents(matchedEvents);
    } else {
      setMatchedEvents([]);
      setResultsFound(null);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(e.target as Node)
    ) {
      // Clicked outside of SearchBar, clear matchedEvents
      setMatchedEvents([]);
      setResultsFound(null);
    }
  };

  useEffect(() => {
    // Add event listener for clicks on window
    window.addEventListener("click", handleClickOutside);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full" ref={searchBarRef}>
      <div onSubmit={null} className="flex w-full">
        <form className="w-full flex flex-col relative">
          <div className="flex">
            <input
              className="border rounded-l-lg p-2 w-full text-gray-500 font-medium leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleSearchChange(e)
              }
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <FaSearch />
            </button>
          </div>

          {resultsFound === false && (
            <div className="flex h-20 justify-center items-center text-lg text-gray-500 font-medium w-full absolute top-[51px] z-10 bg-white shadow-md rounded-lg shadow-gray-600">
              <p>No Results Found</p>
            </div>
          )}

          {matchedEvents.length > 0 && (
            <div className="flex flex-col w-full absolute top-[51px] border border-b-0 z-10 bg-white shadow-lg shadow-gray-600">
              {matchedEvents.slice(0, 5).map((event: EventType) => (
                <Link key={event.id} href={`/event/${event.id}`}>
                  <div className="flex w-full overflow-hidden space-x-4 items-center hover:bg-blue-100 transition-colors border-b p-2">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-slate-600 flex flex-col space-y-1 flex-1">
                      <h3 className="text-xl font-medium">{event.title}</h3>

                      <div className="flex flex-col md:flex-row w-full text-xs md:space-x-3">
                        <div className="md:w-1/2">
                          <p>{new Date(event.date).toDateString()}</p>
                          <p>{event.location}</p>
                        </div>
                        <div className="md:w-1/2">
                          <p className="uppercase">{event.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
