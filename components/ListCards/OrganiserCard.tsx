import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";

import { EventType, OrganiserType, TicketType } from "../../types";

interface OrganiserCardProps extends OrganiserType {
  setSelectedId?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrganiserCard = ({
  id,
  description,
  image,
  name,
  setSelectedId,
  setIsOpen,
}: OrganiserCardProps) => {
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
          alt={id}
          fill
          className="object-cover z-10"
          sizes="99vw"
        />
      </div>

      <div className="flex justify-between items-center w-full md:flex-row flex-col">
        <div className="flex flex-col space-y-1 lg:w-[320px]">
          <div className="flex space-x-2 items-center">
            <p className="text-xl font-medium">{name}</p>
          </div>
          <p className="text-sm text-gray-500 lg:flex hidden">
            {description.length < 90
              ? description
              : description.substring(0, 90) + "..."}
          </p>
        </div>

        <div className="w-full md:w-fit flex space-x-2">
          <p className="text-xl md:text-blue-500 md:hover:bg-blue-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white py-1 hover:bg-blue-600">
            <Link href={`/admin/organisers/${id}`}>
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

export default OrganiserCard;
