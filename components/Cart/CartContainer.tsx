import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CartType, BoughtTicketType, ItemType } from "../../types";
import allTickets from "../../utils/all_tickets.json";

import Container from "../CustomUI/Container";
import Button from "../CustomUI/Button";
import ItemCard from "./ItemCard";
import ItemSummaryCard from "./ItemSummaryCard";

const CartContainer = ({
  setSelected,
  cart,
}: {
  setSelected?: (selected: string) => void;
  cart: CartType;
}) => {
  const router = useRouter();
  const isCheckout = router.pathname.includes("checkout");
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
    <Container title="Your Cart" description="Items that you have bought">
      <section className=" overflow-hidden bg-blueGray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div
              className={`w-full px-4 mb-14 md:mb-0
              ${isCheckout ? "md:w-1/2" : "md:w-8/12 xl:w-9/12"}
            `}
            >
              <div className="py-12 px-8 md:px-12 bg-white rounded-3xl">
                <span className="inline-block mb-16 text-darkBlueGray-300 font-medium">
                  {tickets?.length > 0
                    ? `You have ${tickets?.reduce((acc, cur) => {
                        return acc + cur.boughtQuantity;
                      }, 0)} tickets in your cart`
                    : `Your cart is empty`}
                </span>

                {/* container start */}
                <div className={`${isCheckout ? "xl:px-4" : "xl:px-10"}`}>
                  {tickets?.map((ticket) => (
                    <React.Fragment key={ticket.id}>
                      {isCheckout ? (
                        <ItemSummaryCard {...ticket} key={ticket.eventId} />
                      ) : (
                        <ItemCard {...ticket} key={ticket.eventId} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* container end */}
              </div>
            </div>
            <div
              className={`w-full px-4
              ${isCheckout ? "md:w-1/2" : "md:w-4/12 xl:w-3/12"}
            `}
            >
              {/* Bill starts here */}
              <div className="mb-14">
                <h2 className="mb-7 md:mt-6 text-3xl font-heading font-medium">
                  Cart totals
                </h2>
                <div className="flex text-xl items-center justify-between py-4 px-10 mb-6 leading-8 bg-white font-heading font-medium rounded-lg">
                  <span>Total</span>
                  <span className="flex items-center text-xl text-blue-500">
                    <span className="mr-2 text-base">$</span>
                    <span>{totalPrice.toFixed(2)}</span>
                  </span>
                </div>
                <Button
                  onClick={() => {
                    isCheckout
                      ? router.push("/confirmation")
                      : setSelected("Billing & Payment");
                  }}
                >
                  Checkout
                </Button>
              </div>
              {/* Bill ends here */}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CartContainer;
