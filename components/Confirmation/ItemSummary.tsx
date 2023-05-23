import React, { useEffect, useState } from "react";
import Image from "next/image";

import { BoughtTicketType, EventType } from "../../types";
import allEvents from "../../utils/all_events.json";

const ItemSummary = ({ boughtQuantity, eventId, type }: BoughtTicketType) => {
  const [event, setEvent] = useState<EventType>();

  const fetchEvent = () => {
    /* Replace this code with your code to fetch event */
    const fetchedEvent = allEvents.find((event) => event.id === eventId);
    setEvent(fetchedEvent);
  };

  useEffect(() => {
    fetchEvent();
  }, [eventId]);

  return (
    <div className="flex space-x-3 sm:space-x-10 items-center rounded-xl bg-white my-1 pr-2 sm:pr-6 sm:px-6 sm:py-2 shadow">
      <div className="relative h-16 aspect-square">
        <Image
          src={event?.image}
          alt={event?.name}
          fill
          className="object-contain z-10"
        />
        <Image
          src={event?.image}
          alt={event?.name}
          fill
          className="object-cover blur-sm"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-medium text-gray-800 ">
          <span className="font-medium">{event?.name}</span> - {type}
        </h1>
        <p className="">
          <span className="font-bold">Qty: </span>
          {boughtQuantity}
        </p>
      </div>
    </div>
  );
};

export default ItemSummary;
