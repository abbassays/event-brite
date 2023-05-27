import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoChevronDownOutline } from "react-icons/io5";

import { BoughtTicketType, ItemType, OrderType } from "../../types";
import allTickets from "../../utils/all_tickets.json";

import ItemSummary from "../Confirmation/ItemSummary";

type Props = {};

const OrderCard = ({
  billingAddress,
  date,
  id,
  items,
  paymentMethod,
}: OrderType) => {
  const [tickets, setTickets] = useState<BoughtTicketType[]>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const fetchTickets = () => {
    /* Replace this code with your code to fetch tickets */
    let fetchedTickets: BoughtTicketType[] = [];
    items.forEach((cartTicket: ItemType) => {
      const foundTicket = allTickets.find(
        (ticket) => ticket.id === cartTicket?.ticketId
      );
      fetchedTickets.push({
        ...foundTicket,
        boughtQuantity: cartTicket?.quantity,
      });
    });
    setTickets(fetchedTickets);

    let totalPrice = 0;
    fetchedTickets.forEach((ticket) => {
      totalPrice += ticket.price * ticket.boughtQuantity;
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    if (allTickets) fetchTickets();
  }, [allTickets]);

  const getLine = (name: string, value: string) => (
    <p className="">
      <span className="font-bold">{name}: </span>
      {value}
    </p>
  );

  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex flex-col my-2 p-2 sm:p-4 md:p-8 rounded sm:rounded-lg lg:rounded-xl bg-white">
          <Disclosure.Button>
            <div className="flex items-center justify-between ">
              <p>
                <span className="font-bold">Order ID: </span>
                {id}
              </p>

              <IoChevronDownOutline
                className={`${
                  open ? "transform rotate-180" : ""
                } transition-transform duration-300`}
              />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel>
            <div className="flex flex-col mt-4 text-xs sm:text-sm md:text-base">
              <div className="mb-4">
                {getLine("Date", new Date(date).toDateString())}
                {getLine("Payment Method", paymentMethod)}
                {getLine("Billing Address", billingAddress)}
                {getLine(
                  "Items",
                  `${tickets?.reduce(
                    (acc, item) => acc + item.boughtQuantity,
                    0
                  )} items`
                )}
              </div>
              <div className="flex flex-col space-y-4"></div>
              {tickets?.map((item) => (
                <ItemSummary key={item.id} {...item} />
              ))}

              <div className="flex justify-end mt-4">
                <p className="">
                  Total: $
                  <span className="font-bold text-base sm:text-lg">
                    {totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default OrderCard;
