import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";

import { EventType, TicketType } from "../../types";
import allEvents from "../../utils/all_events.json";

interface TicketCardProps extends TicketType {
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketCard = ({
  id,
  eventId,
  image,
  description,
  price,
  quantity,
  type,
  startDate,
  endDate,
  setSelectedId,
  setIsOpen,
}: TicketCardProps) => {
  const [event, setEvent] = useState<EventType>();

  const fetchEvent = () => {
    // Fetch event from DB
    const event = allEvents.find((event) => event.id === eventId);
    setEvent(event);
  };

  const openModal = () => {
    setIsOpen(true);
    setSelectedId(id);
    console.log("Opening modal for: ", id, type);
  };

  useEffect(() => {
    fetchEvent();
  }, [eventId, allEvents]);

  return (
    <div className="flex space-x-3 md:space-x-10 items-center rounded md:rounded-xl bg-white my-2 pr-2 md:pr-6 md:px-6 py-2 shadow">
      <div className="relative h-16 aspect-square hidden md:block">
        <Image
          src={image}
          alt={id}
          fill
          className="object-cover z-10"
          sizes="99vw"
        />
      </div>

      <div className="flex justify-between items-center w-full md:flex-row flex-col">
        <div className="flex flex-col space-y-1 lg:w-[320px]">
          <div className="flex space-x-2 items-center">
            <p className="text-xl font-medium">{event?.name} | </p>
            <p>Max: {quantity}</p>
          </div>
          <p className="text-sm text-gray-500 lg:flex hidden">
            {description.length < 90
              ? description
              : description.substring(0, 90) + "..."}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-lg font-medium">${price.toFixed(2)} | </p>
          <p className="text-sm">{type}</p>
        </div>

        <div className="md:my-0 my-2">
          <p className="text-sm font-medium">
            {new Date(startDate).toDateString()}{" "}
            <span className="font-normal text-gray-500"> to </span>
          </p>
          <p className="text-sm font-medium">
            {new Date(endDate).toDateString()}
          </p>
        </div>

        <div className="w-full md:w-fit flex space-x-2">
          <p className="text-xl md:text-blue-500 md:hover:bg-blue-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white py-1 hover:bg-blue-600">
            <Link href={`/admin/tickets/${id}`}>
              <MdEdit className="mx-auto" />
            </Link>
          </p>
          <p
            onClick={openModal}
            className="text-xl md:text-red-500 md:hover:bg-red-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-red-500 w-full text-white py-1 hover:bg-red-600"
          >
            <MdDelete className="mx-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
