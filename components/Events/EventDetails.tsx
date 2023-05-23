import React from "react";
import Image from "next/image";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";

import { EventType } from "../../types";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

import Container from "../UI/Container";
import ImageContainer from "../UI/ImageContainer";
import getDateString from "../../utils/getDateString";

const EventDetails = ({
  name,
  description,
  category,
  startDate,
  endDate,
  location,
  image,
}: EventType) => {
  const Icon = getCategoryIcon(category || null);

  return (
    <Container>
      <ImageContainer link={image} alt={name} />

      <div className="flex flex-col justify-between space-y-6 my-10">
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-medium ">
          {name}
        </h1>

        <p className="text-gray-500 text-base md:text-xl">{description}</p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-medium">Event Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex w-fit space-x-6 text-gray-500 text-base md:text-xl">
            <div className="bg-slate-200 rounded-lg p-3 h-fit">
              <IoCalendar className="text-blue-600" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-black">Date</h3>
              <p className="text-gray-600 text-sm">
                <span className="block">{getDateString(startDate)} to</span>
                <span className="block">{" " + getDateString(endDate)}</span>
              </p>
            </div>
          </div>

          <div className="flex w-fit space-x-6 text-gray-500 text-base md:text-xl">
            <div className="bg-slate-200 rounded-lg p-3 h-fit">
              {Icon && <Icon className="text-blue-600" />}
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
      </div>
    </Container>
  );
};

export default EventDetails;
