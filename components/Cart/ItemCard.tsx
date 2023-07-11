import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaQuestion } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import { BoughtTicketType, EventType } from "../../types";
import { allEvents } from "@/utils/json-database";
import { getDateString } from "../../utils/DateFunctions";
import CategoryIcon from "../../utils/CategoryIcon";

const ItemCard = ({
  image,
  boughtQuantity,
  description,
  endDate,
  id,
  price,
  startDate,
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
    <div className="relative flex flex-wrap items-center xl:justify-between -mx-4 mb-8 pb-8 border-b border-gray-400 border-opacity-40">
      <div className="relative w-32 aspect-square px-4 mb-6 xl:mb-0 border mx-auto lg:mx-0">
        {event && (
          <Image className="object-cover" src={event?.image} alt="" fill />
        )}
      </div>
      <div className="w-full md:w-auto px-4 mb-6 xl:mb-0">
        <p className="block mb-2 text-xl font-heading font-medium hover:underline">
          {event?.name} - <span className="text-lg text-gray-700">{type}</span>
        </p>
        <div className="flex flex-col flex-wrap font-medium text-gray-700">
          <div className="flex items-center">
            <FaCalendarAlt size={16} className="mr-2 text-blue-500" />
            <p>{"Starts " + getDateString(startDate)}</p>
          </div>

          <div className="flex items-center">
            <p className="mr-2 text-blue-500">
              <CategoryIcon category={event?.category} />
            </p>
            <p className=" capitalize">{event?.category}</p>
          </div>

          <div className="flex items-center">
            <IoLocationSharp size={16} className="mr-2 text-blue-500" />
            <p>{event?.location}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full xl:w-auto items-center">
        <div className="w-full xl:w-auto px-4 mb-6 xl:mb-0 mt-6 xl:mt-0">
          <div className="flex items-center">
            <h4 className="mr-4 font-heading font-medium">Qty:</h4>
            <div className="w-16 px-3 py-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
              {boughtQuantity}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-auto px-4">
          <span className="text-xl font-heading font-medium text-blue-500">
            <span className="text-sm">$</span>
            <span>{price?.toFixed(2)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
