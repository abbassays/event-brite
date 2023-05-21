import React from "react";
import Image from "next/image";

import { ItemType } from "../../types";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

const ItemCard = ({
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
    <div className="relative flex flex-wrap items-center xl:justify-between -mx-4 mb-8 pb-8 border-b border-gray-400 border-opacity-40">
      <div className="relative w-32 aspect-square px-4 mb-6 xl:mb-0 border mx-auto lg:mx-0">
        <Image className="object-cover" src={image} alt="" fill />
      </div>

      <div className="w-full md:w-auto px-4 mb-6 xl:mb-0">
        <p className="block mb-2 text-xl font-heading font-medium hover:underline">
          {eventName} -{" "}
          <span className="text-lg text-gray-700">{ticketName}</span>
        </p>
        <div className="flex flex-col flex-wrap font-medium text-gray-700">
          <div className="flex items-center">
            <FaCalendarAlt size={16} className="mr-2 text-blue-500" />
            <p>{dateString}</p>
          </div>

          <div className="flex items-center">
            <Icon size={16} className="mr-2 text-blue-500" />
            <p className=" capitalize">{eventCategory}</p>
          </div>

          <div className="flex items-center">
            <IoLocationSharp size={16} className="mr-2 text-blue-500" />
            <p>{eventLocation}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full xl:w-auto items-center">
        <div className="w-full xl:w-auto px-4 mb-6 xl:mb-0 mt-6 xl:mt-0">
          <div className="flex items-center">
            <h4 className="mr-4 font-heading font-medium">Qty:</h4>
            <div className="w-16 px-3 py-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
              {ticketQuantity}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-auto px-4">
          <span className="text-xl font-heading font-medium text-blue-500">
            <span className="text-sm">$</span>
            <span>{ticketPrice.toFixed(2)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
