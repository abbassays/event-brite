import React from "react";
import { RxCalendar } from "react-icons/rx";
import { FaSackDollar } from "react-icons/fa6";
import { GiTicket, GiPartyFlags, GiTick } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi";

import { SaleType } from "@/types";
import { getTicketById } from "@/utils/json-database";
import CustomToolTip from "../ui/tooltip";

const SaleCard = ({
  id,
  date,
  eventName,
  organiserName,
  price,
  quantity,
  ticketId,
}: SaleType) => {
  const ticket = getTicketById(ticketId);
  
  return (
    <div
      className="rounded lg:rounded-xl bg-white px-6 lg:py-6 py-2 shadow 
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center"
    >
      <div className="font-medium gap-2 flex items-baseline justify-center w-fit lg:justify-start order-1 sm:place-self-start">
        <p>{eventName}</p>
        <p className="text-sm text-gray-500">by</p>
        <p className="">{organiserName}</p>
      </div>

      <CustomToolTip message="Date Purchased">
        <div className="bg-gray-100 text-gray-800 py-1 px-2 rounded-md flex gap-2 h-fit w-fit order-2">
          <RxCalendar />
          <p className="text-xs font-medium">{new Date(date).toDateString()}</p>
        </div>
      </CustomToolTip>

      <div className="bg-gray-100 text-gray-800 py-1 px-2 rounded-md flex h-fit w-fit order-4 lg:order-3">
        <p className="text-xs font-medium">{ticket?.type}</p>
      </div>

      <div className="flex text-xs lg:text-sm items-center order-3 lg:order-4 sm:place-self-start lg:place-self-center">
        <CustomToolTip message="Revenue">
          <div className="bg-green-100 text-green-900 py-1 px-2 gap-2 rounded-lg flex w-fit items-center">
            <div className="flex items-center justify-center gap-1">
              <GiTicket className="text-sm lg:text-base" />
              <p>{quantity}</p>
            </div>
            <p>×</p>
            <div className="flex items-center justify-center gap-1">
              <HiCurrencyDollar className="text-sm lg:text-base" />
              <p>{price.toFixed(2)} </p>
            </div>
            <p>=</p>
            <div className="flex items-center justify-center gap-1">
              <FaSackDollar className="text-sm lg:text-base" />
              <p className="font-medium">{(price * quantity).toFixed(2)}</p>
            </div>
          </div>
        </CustomToolTip>
      </div>
    </div>
  );
};

export default SaleCard;
