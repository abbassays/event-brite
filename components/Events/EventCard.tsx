import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import Button from "../CustomUI/Button";

import { EventType } from "../../types";
import Link from "next/link";
import { getDateTimeString } from "../../utils/DateFunctions";
import CategoryIcon from "../../utils/CategoryIcon";

const EventCard = (event: EventType) => {
  const { name, description, category, startDate, endDate, location, image } =
    event;

  if (!event) return <div>Event not found</div>;

  return (
    <div className="bg-white shadow-md rounded-md flex flex-col overflow-hidden max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-none">
      <div className="relative h-40">
        <Image src={image} alt={name} fill sizes="100%" className="object-cover border" />
      </div>

      <div className="flex justify-between flex-col p-4 flex-1">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>

        <div className="my-4 space-y-2">
          <div className="flex items-center">
            <FaCalendarAlt size={16} className="text-gray-600 mr-2" />
            <p className="text-gray-600 text-sm">
              <span className="block">{getDateTimeString(startDate)} to</span>
              <span className="block">{" " + getDateTimeString(endDate)}</span>
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-600 mr-2">
              <CategoryIcon category={category} />
            </p>
            <p className="text-gray-600 text-sm capitalize">{category}</p>
          </div>

          <div className="flex items-center">
            <IoLocationSharp size={16} className="text-gray-600 mr-2" />
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
        </div>

        <div>
          <Button className="mx-auto" variant="primary">
            <Link href={`/event/${event.id}`}>See Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
