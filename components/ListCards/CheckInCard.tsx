import { HiCurrencyDollar } from "react-icons/hi";
import { RxCalendar } from "react-icons/rx";
import { FaSackDollar } from "react-icons/fa6";
import { GiTicket, GiPartyFlags, GiTick } from "react-icons/gi";
import { MdDelete, MdEdit } from "react-icons/md";
import { TbTicketOff } from "react-icons/tb";
import React, { useEffect, useState } from "react";

import { CheckInType, TicketType } from "@/types";
import CustomToolTip from "../ui/tooltip";
import { Link } from "lucide-react";
import { allTickets } from "@/utils/json-database";
import { getDateTimeString } from "@/utils/DateFunctions";
import { FaArrowRight } from "react-icons/fa";

interface TicketCardProps extends CheckInType {
  setSelectedId?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheckInCard = ({
  customerEmail,
  customerName,
  date,
  eventId,
  eventName,
  id,
  organiserId,
  organiserName,
  quantity,
  ticketId,
  setIsOpen,
  setSelectedId,
}: TicketCardProps) => {
  const [ticket, setTicket] = useState<TicketType>();

  const fetchEvent = () => {
    // Fetch event from DB
    const event = allTickets.find((event) => event.id === ticketId);
    setTicket(event);
  };

  const openModal = () => {
    setIsOpen(true);
    setSelectedId(id);
    // console.log("Opening modal for: ", id, type);
  };

  useEffect(() => {
    fetchEvent(); 
  }, [eventId, allTickets]);

  return (
    <div className="rounded xl:rounded-xl px-6 xl:py-6 py-2 shadow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 place-items-center">
      <div className=" w-fit xl:justify-start order-1 sm:place-self-start flex flex-col">
        <div className="font-medium gap-2 flex items-center">
          <p>{customerName}</p>
          <FaArrowRight className="text-xs" />
          <p className="">{eventName}</p>
        </div>
        <p className="font-light text-base">{customerEmail}</p>
      </div>

      <div className="bg-gray-100 text-gray-800 py-1 px-2 rounded-md flex h-fit w-28 xl:w-36 order-3 xl:order-2 justify-center items-center gap-1 text-xs xl:text-base sm:place-self-start xl:place-self-center">
        <p>{quantity}</p>
        <GiTicket className="text-sm" />
        <p>×</p>
        <p className="font-medium">{ticket?.type}</p>
      </div>

      <p className="flex text-sm xl:text-base items-center order-4 xl:order-3 xl:place-self-center">
        Organised by {organiserName}
      </p>

      <CustomToolTip message="Date Purchased">
        <div className="bg-gray-100 text-gray-800 py-1 px-2 rounded-md flex gap-2 h-fit w-fit order-2 xl:order-4">
          <RxCalendar />
          <p className="text-xs font-medium">{getDateTimeString(date)}</p>
        </div>
      </CustomToolTip>
    </div>
  );
};

export default CheckInCard;
