import React, { useEffect, useState } from "react";
import Image from "next/image";

import { BoughtTicketType, EventType } from "../../types";
import allEvents from "../../utils/all_events.json";

const ItemSummary = ({
  boughtQuantity,
  eventId,
  type,
  price,
}: BoughtTicketType) => {
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
    <div className="flex space-x-3 sm:space-x-10 items-center rounded sm:rounded-xl bg-slate-100 my-1  pr-2 sm:pr-6 sm:px-6 py-2 shadow">
      <div className="relative h-16 aspect-square hidden sm:block">
        {event && (
          <Image
            src={event?.image}
            alt={event?.name}
            fill
            className="object-cover z-10"
          />
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-medium text-gray-800 w-1/2">
          <span className="font-medium">{event?.name}</span> - {type}
        </h1>
        <div className="w-1/3  flex">
          <p className="w-1/2 hidden lg:block">
            $<span className="font-bold">{price.toFixed(2)}</span>
            &nbsp;× {boughtQuantity}
          </p>
          <p className="w-1/2">
            <span className="font-bold">
              ${(price * boughtQuantity).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemSummary;
