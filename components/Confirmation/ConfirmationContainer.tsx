import React, { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { BoughtTicketType, CartType, ItemType } from "../../types";
import allTickets from "../../utils/all_tickets.json";

import Button from "../UI/Button";
import ItemSummary from "./ItemSummary";

const ConfirmationContainer = ({ cart }: { cart: CartType }) => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [tickets, setTickets] = useState<BoughtTicketType[]>();

  const fetchTickets = () => {
    /* Replace this code with your code to fetch tickets */
    let fetchedTickets: BoughtTicketType[] = [];
    cart.items.forEach((cartTicket: ItemType) => {
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
    if (allTickets && cart) fetchTickets();
  }, [allTickets, cart]);

  return (
    <div className="relative py-12 2xl:pb-20 bg-blueGray-100 rounded-b-9xl overflow-hidden">
      <div className="relative container sm:px-4 mx-auto z-10">
        <BsFillCheckCircleFill className="bg-white mb-8 rounded-full mx-auto text-green-500 text-7xl" />
        <h2 className="mb-4 xl:mb-8 text-4xl md:text-5xl xl:text-7xl font-heading font-medium text-center">
          Thanks for your order
        </h2>
        <p className="mb-8 xl:mb-14 md:text-lg text-darkBlueGray-400 font-heading text-center">
          We hope you enjoyed shopping with us.
        </p>
        <div className="mx-auto max-w-2xl">
          <h3 className="md:mb-3 md:text-xl font-heading font-medium">
            What you ordered:
          </h3>

          {/* map start here */}
          {tickets?.map((item) => (
            <ItemSummary key={item.id} {...item} />
          ))}

          {!tickets ||
            (tickets.length === 0 && (
              <div className="flex justify-center items-center">
                <p className="text-2xl text-gray-500">No items in cart</p>
              </div>
            ))}
          {/* map end here */}

          <div className="sm:max-w-max sm:ml-auto mt-10">
            <p className="flex items-center justify-between font-heading font-medium border-t border-black border-opacity-10">
              <span className="mr-16">Total</span>
              <span className="flex items-center">
                <span className="mr-2 text-sm text-blue-500">$</span>
                <span className="text-xl sm:text-3xl text-blue-500">
                  {(totalPrice).toFixed(2)}
                </span>
              </span>
            </p>
          </div>

          <div className="mt-8 sm:mt-0">
            <Button variant="tertiary" onClick={() => router.push("/")}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationContainer;
