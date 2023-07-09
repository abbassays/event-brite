import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { TbTicketOff } from "react-icons/tb";

import { EventType, TicketType } from "../../types";
import allEvents from "../../utils/all_events.json";
import CustomToolTip from "../ui/tooltip";

interface TicketCardProps extends TicketType {
  setSelectedId?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketCard = ({
  id,
  eventId,
  image,
  soldQuantity,
  price,
  quantity,
  type,
  organiserName,
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
    <div className="flex gap-3 md:gap-5 lg:gap-10 items-center rounded md:rounded-xl bg-white px-6 py-2 shadow">
      <div className="relative max-h-20 h-full md:h-16 aspect-square xs:block hidden">
        <Image
          src={image}
          alt={id}
          fill
          className="object-cover z-10"
          sizes="99vw"
        />
      </div>

      <div className="flex justify-between items-center w-full gap-5 lg:gap-10">
        <div className="flex justify-between md:items-center w-full md:flex-row flex-col gap-1 md:gap-2">
          <div className="flex items-center gap-2 md:items-start md:flex-col md:gap-0">
            <p className="text-xl font-medium">{event?.name}</p>
            <p className="text-sm text-gray-500">{type}</p>
          </div>

          <div className="flex gap-2 md:gap-1 md:flex-col items-center text-center">
            <p className="font-medium text-sm">${price.toFixed(2)}</p>
            <CustomToolTip message="Max Tickets">
              <div className="bg-gray-200 text-gray-700 py-1 px-2 rounded-lg flex gap-2">
                <TbTicketOff />
                <p className="text-xs font-medium">{quantity}</p>
              </div>
            </CustomToolTip>
          </div>

          <div className="flex gap-2 md:gap-1 md:flex-col items-center text-center">
            <p className="font-medium text-sm">{soldQuantity} sold</p>
            <CustomToolTip message="Revenue">
              <div className="bg-green-100 text-green-800 py-1 px-2 rounded-lg flex gap-2">
                <BiSolidDollarCircle />
                <p className="text-xs font-medium">
                  {(price * soldQuantity).toFixed(2)}
                </p>
              </div>
            </CustomToolTip>
          </div>

          <div className="font-medium text-sm md:text-base">
            {organiserName}
          </div>
        </div>

        <div className=" md:w-fit flex gap-2 md:flex-row flex-col">
          <p className="text-xl md:text-blue-500 md:hover:bg-blue-500 p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white hover:bg-blue-600">
            <Link href={`/admin/tickets/${id}`}>
              <MdEdit className="mx-auto" />
            </Link>
          </p>
          <p
            onClick={openModal}
            className="text-xl md:text-red-500 md:hover:bg-red-500 p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-red-500 w-full text-white hover:bg-red-600"
          >
            <MdDelete className="mx-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
