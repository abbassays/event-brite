import React, { useState } from "react";
import Image from "next/image";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";

import { EventType } from "../../types";

import Container from "../UI/Container";
import ImageContainer from "../UI/ImageContainer";
import { getDateTimeString } from "../../utils/DateFunctions";
import TicketModal from "../Ticket/TicketModal";
import CategoryIcon from "../../utils/CategoryIcon";

const EventDetails = ({
  id,
  name,
  description,
  category,
  startDate,
  endDate,
  location,
  image,
}: EventType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(isOpen);
  return (
    <Container>
      <TicketModal eventId={id} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ImageContainer link={image} alt={name} />

      <div className="flex flex-col justify-between space-y-6 my-10">
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-medium ">
          {name}
        </h1>

        <p className="text-gray-500 text-base md:text-xl">{description}</p>
      </div>

      <div className="flex flex-col sm:flex-row w-full mt-4">
        <div className="flex flex-col space-y-10 w-3/5">
          <h2 className="text-2xl md:text-3xl font-medium">Event Details</h2>
          <div className="flex w-fit space-x-6 text-gray-500 text-base md:text-xl">
            <div className="bg-slate-200 rounded-lg p-3 h-fit">
              <IoCalendar className="text-blue-600" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-black">Date</h3>
              <p className="text-gray-600 text-sm">
                <span className="block">{getDateTimeString(startDate)} to</span>
                <span className="block">
                  {" " + getDateTimeString(endDate)}
                </span>
              </p>
            </div>
          </div>

          <div className="flex w-fit space-x-6 text-gray-500 text-base md:text-xl">
            <div className="bg-slate-200 rounded-lg p-3 h-fit">
              <p className="text-blue-600">
                <CategoryIcon category={category} />
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-black">Category</h3>
              <p className="text-sm">{category}</p>
            </div>
          </div>

          <div className="flex w-fit space-x-6 text-gray-500 text-base md:text-xl">
            <div className="bg-slate-200 rounded-lg p-3 h-fit">
              <IoLocationSharp className="text-blue-600" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-black">Location</h3>
              <p className="text-sm">{location}</p>
            </div>
          </div>
        </div>

        <div className="w-2/5">
          <div className="rounded-xl border border-slate-300 shadow p-10 space-y-6 flex flex-col items-center">
            <p className="font-medium text-xl text-gray-600">
              See exciting ticket options here
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 transition-all font-medium text-white rounded-lg px-4 py-2 w-full h-12"
            >
              Tickets
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventDetails;
