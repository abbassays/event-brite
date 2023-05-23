import React, { useEffect, useState } from "react";
import Image from "next/image";

import { BoughtTicketType, EventType } from "../../types";
import allEvents from "../../utils/all_events.json";

const ItemSummaryCard = ({
  image,
  boughtQuantity,
  type,
  eventId,
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
    <div className="relative flex flex-wrap items-center space-x-10 -mx-4 border-b border-gray-400 border-opacity-40">
      <div className="relative w-24 aspect-square px-4 mb-6 xl:mb-0 border mx-auto lg:mx-0">
        <Image className="object-cover" src={image} alt="" fill />
      </div>

      <div className="w-full md:w-auto px-4 mb-6 xl:mb-0">
        <p className="block mb-2 text-xl font-heading font-medium hover:underline">
          {event?.name} - <span className="text-lg text-gray-700">{type}</span>
        </p>
        <div className="flex items-center text-sm">
          <span className="font-medium mr-1">Qty:</span>
          {boughtQuantity}
        </div>
      </div>
    </div>
  );
};

export default ItemSummaryCard;
