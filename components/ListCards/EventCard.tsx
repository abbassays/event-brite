import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEdit, MdDelete, MdLocationPin } from "react-icons/md";

import { EventType } from "../../types";

import CategoryIcon from "../../utils/CategoryIcon";

interface EventCardProps extends EventType {
  setSelectedId?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventCard = ({
  id,
  name,
  image,
  description,
  category,
  location,
  startDate,
  endDate,
  setSelectedId,
  setIsOpen,
}: EventCardProps) => {
  const openModal = () => {
    setIsOpen(true);
    setSelectedId(id);
    console.log("Opening modal for: ", id, name);
  };

  return (
    <div className="flex space-x-3 md:space-x-10 items-center rounded md:rounded-xl bg-white my-2 pr-2 md:pr-6 md:px-6 py-2 shadow">
      <div className="relative h-16 aspect-square hidden md:block">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover z-10"
          sizes="99vw"
        />
      </div>

      <div className="flex justify-between items-center w-full md:flex-row flex-col">
        <div className="flex flex-col space-y-1 lg:w-[320px]">
          <div className="flex space-x-2 items-center">
            <p className="text-xl font-medium">{name} | </p>
            <p className="text-sm">{location}</p>
            <p className="text-blue-500">
              <CategoryIcon category={category} />
            </p>
          </div>
          <p className="text-sm text-gray-500 lg:flex hidden">
            {description.length < 90
              ? description
              : description.substring(0, 90) + "..."}
          </p>
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
           <p className="text-xl md:text-green-500 md:hover:bg-green-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white py-1 hover:bg-blue-600">
            <Link href={`/admin/events/${id}/check-in`}>
              <MdLocationPin className="mx-auto" />
            </Link>
          </p>
          <p className="text-xl md:text-blue-500 md:hover:bg-blue-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white py-1 hover:bg-blue-600">
            <Link href={`/admin/events/${id}`}>
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

export default EventCard;
