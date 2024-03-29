import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdEdit,
  MdDelete,
  MdLocationPin,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { EventType } from "../../types";

import CategoryIcon from "../../utils/CategoryIcon";
import CustomToolTip from "../ui/tooltip";
import { getDateTimeString } from "@/utils/DateFunctions";

interface EventCardProps extends EventType {
  setSelectedId?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventCard = ({
  id,
  name,
  image,
  category,
  location,
  startDate,
  endDate,
  organiserName,
  ticketsSold,
  setSelectedId,
  setIsOpen,
}: EventCardProps) => {
  const openModal = () => {
    setIsOpen(true);
    setSelectedId(id);
    console.log("Opening modal for: ", id, name);
  };

  return (
    <div className="flex gap-3 md:gap-5 lg:gap-10 items-center rounded md:rounded-xl bg-white px-6 py-2 shadow">
      <div className="relative max-h-20 h-full md:h-16 aspect-square xs:block hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover z-10"
          sizes="99vw"
        />
      </div>

      <div className="flex justify-between items-center w-full gap-5 lg:gap-10">
        <div className="flex justify-between md:items-center w-full md:flex-row flex-col md:gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium">{name}</p>

            <div className="flex gap-2 text-xs lg:text-sm">
              <p className="">{location}</p>
              <p className="text-blue-500">
                <CategoryIcon category={category} />
              </p>
            </div>
          </div>

          <div className="">
            <p className="text-xs lg:text-sm font-medium">
              {getDateTimeString(startDate)}
              <span className="font-normal text-gray-500"> to </span>
            </p>
            <p className="text-xs lg:text-sm font-medium">
              {getDateTimeString(endDate)}
            </p>
          </div>

          <CustomToolTip message="Tickets Sold">
            <div className="bg-blue-50 text-blue-600 py-1 px-2 rounded-md flex gap-2 w-fit">
              <MdOutlineShoppingCart />
              <p className="text-xs font-medium">{ticketsSold}</p>
            </div>
          </CustomToolTip>

          <div className="font-medium md:text-base lg:text-base">
            {organiserName}
          </div>
        </div>

        <div className=" md:w-fit flex gap-2 md:flex-row flex-col">
          <p className="text-xl md:text-green-500 md:hover:bg-green-500 p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-green-500 w-full text-white hover:bg-green-600">
            <Link href={`/dashboard/events/${id}/check-in`}>
              <MdLocationPin className="mx-auto" />
            </Link>
          </p>
          <p className="text-xl md:text-blue-500 md:hover:bg-blue-500 p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white hover:bg-blue-600">
            <Link href={`/dashboard/events/${id}`}>
              <MdEdit className="mx-auto" />
            </Link>
          </p>
          {setIsOpen && (
            <p
              onClick={openModal}
              className="text-xl md:text-red-500 md:hover:bg-red-500 p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-red-500 w-full text-white hover:bg-red-600"
            >
              <MdDelete className="mx-auto" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
