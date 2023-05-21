import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

import Button from "../UI/Button";

import { getCategoryIcon } from "../../utils/getCategoryIcon";
import { EventType } from "../../types";
import Link from "next/link";

const EventCard = (event: EventType) => {
  const { name, description, category, date, location, image } = event;
  const dateString = new Date(date).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const Icon = getCategoryIcon(category);

  if (!event) return <div>Event not found</div>;

  return (
    <div className="bg-white shadow-md rounded-md flex flex-col overflow-hidden">
      <div className="relative h-40">
        <Image src={image} alt={name} fill className="object-cover border" />
      </div>

      <div className="flex justify-between flex-col p-4 flex-1">
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>

        <div className="my-4 space-y-2">
          <div className="flex items-center">
            <FaCalendarAlt size={16} className="text-gray-600 mr-2" />
            <p className="text-gray-600 text-sm">{dateString}</p>
          </div>

          <div className="flex items-center">
            <Icon size={16} className="text-gray-600 mr-2" />
            <p className="text-gray-600 text-sm capitalize">{category}</p>
          </div>

          <div className="flex items-center">
            <IoLocationSharp size={16} className="text-gray-600 mr-2" />
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
        </div>

        <div>
          <Button className="mx-auto" variant="primary">
            <Link href={`/event/${event.id}`}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
