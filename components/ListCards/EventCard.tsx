import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";

import { EventType } from "../../types";

import CategoryIcon from "../../utils/CategoryIcon";
import DeleteModal from "../UI/DeleteModal";

const EventCard = ({
  id,
  name,
  image,
  description,
  category,
  location,
  startDate,
  endDate,
}: EventType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDelete = () => {
    // Delete event from DB
    console.log("Deleting event with name: " + name + " and id: " + id);
  };

  return (
    <div className="flex space-x-3 sm:space-x-10 items-center rounded sm:rounded-xl bg-white my-2 pr-2 sm:pr-6 sm:px-6 py-2 shadow">
      <div className="relative h-16 aspect-square hidden sm:block">
        <Image src={image} alt={name} fill className="object-cover z-10" />
      </div>

      <div className="flex justify-between items-center w-full sm:flex-row flex-col">
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

        <div className="sm:my-0 my-2">
          <p className="text-sm font-medium">
            {new Date(startDate).toDateString()}{" "}
            <span className="font-normal text-gray-500"> to </span>
          </p>
          <p className="text-sm font-medium">
            {new Date(endDate).toDateString()}
          </p>
        </div>

        <div className="w-full sm:w-fit flex space-x-2">
          <p className="text-xl sm:text-blue-500 sm:hover:bg-blue-500 sm:p-1 sm:bg-transparent rounded sm:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white py-1 hover:bg-blue-600">
            <Link href={`/admin/events/${id}`}>
              <MdEdit className="mx-auto" />
            </Link>
          </p>
          <p
            onClick={() => setIsOpen(true)}
            className="text-xl sm:text-red-500 sm:hover:bg-red-500 sm:p-1 sm:bg-transparent rounded sm:hover:text-white cursor-pointer transition-colors bg-red-500 w-full text-white py-1 hover:bg-red-600"
          >
            <MdDelete className="mx-auto" />
          </p>
        </div>
      </div>
      <DeleteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EventCard;
