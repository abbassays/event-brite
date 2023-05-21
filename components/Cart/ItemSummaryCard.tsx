import React from "react";
import Image from "next/image";

import { ItemType } from "../../types";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

const ItemSummaryCard = ({
  id,
  eventCategory,
  eventDate,
  eventLocation,
  eventName,
  ticketName,
  ticketPrice,
  ticketQuantity,
  image,
}: ItemType) => {
  const Icon = getCategoryIcon(eventCategory);
  const dateString = new Date(eventDate).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="relative flex flex-wrap items-center space-x-10 -mx-4 border-b border-gray-400 border-opacity-40">
      <div className="relative w-24 aspect-square px-4 mb-6 xl:mb-0 border mx-auto lg:mx-0">
        <Image className="object-cover" src={image} alt="" fill />
      </div>

      <div className="w-full md:w-auto px-4 mb-6 xl:mb-0">
        <p className="block mb-2 text-xl font-heading font-medium hover:underline">
          {eventName} -{" "}
          <span className="text-lg text-gray-700">{ticketName}</span>
        </p>
        <div className="flex items-center text-sm">
          <span className="font-medium mr-1">Qty:</span>
          {ticketQuantity}
        </div>
      </div>
    </div>
  );
};

export default ItemSummaryCard;
