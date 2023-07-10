import React from "react";
import { RxCalendar } from "react-icons/rx";
import { FaSackDollar } from "react-icons/fa6";

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
    <div className="flex gap-3 md:gap-5 lg:gap-10 items-center rounded md:rounded-xl bg-white px-6 md:py-6 py-2  shadow">
      <div className="flex justify-between items-center w-full flex-wrap gap-2 md:gap-0">
        <div className="font-medium gap-2 flex items-baseline md:w-1/2 justify-center md:justify-start w-full">
          <p>{eventName}</p>
          <p className="text-sm text-gray-500">by</p>
          <p className="">{organiserName}</p>
        </div>

        <div className="flex md:w-1/2 justify-center md:justify-between gap-4 w-full">
          <CustomToolTip message="Date Purchased">
            <div className="bg-gray-100 text-gray-800 py-1 px-2 rounded-md flex gap-2 w-fit">
              <RxCalendar />
              <p className="text-xs font-medium">
                {new Date(date).toDateString()}
              </p>
            </div>
          </CustomToolTip>

          <CustomToolTip message="Revenue">
            <div className="bg-green-100 text-green-800 py-1 px-2 rounded-lg flex gap-2 w-fit">
              <FaSackDollar />
              <p className="text-xs font-medium">
                {(price * quantity).toFixed(2)}
              </p>
            </div>
          </CustomToolTip>
        </div>
      </div>
    </div>
  );
};

export default SaleCard;
