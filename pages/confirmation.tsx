import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import allItems from "../utils/all_items.json";
import Container from "../components/UI/Container";
import ItemCard from "../components/Cart/ItemCard";
import { ItemType } from "../types";
import ItemSummaryCard from "../components/Cart/ItemSummaryCard";
import Image from "next/image";

const Confirmation = () => {
  const shipping = 110;
  const [items, setItems] = useState<ItemType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchOrder = () => {
    /* Replace this code with your code to fetch order */
    setItems(allItems);
  };

  useEffect(() => {
    fetchOrder();
    setTotal(
      allItems.reduce(
        (acc, item) => acc + item.ticketPrice * item.ticketQuantity,
        0
      )
    );
  }, [allItems]);

  return (
    <Container>
      <div className="relative py-24 2xl:pb-44 bg-blueGray-100 rounded-b-9xl overflow-hidden">
        <div className="relative container px-4 mx-auto z-10">
          <BsFillCheckCircleFill className="bg-white rounded-full xl:mb-10 mx-auto text-green-500 text-7xl" />
          <h2 className="mb-5 xl:mb-10 text-7xl xl:text-10xl leading-normal font-heading font-medium text-center">
            Thanks for your order
          </h2>
          <p className="mb-14 xl:mb-20 text-lg text-darkBlueGray-400 font-heading text-center">
            We hope you enjoyed shopping with us.
          </p>
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-6 text-xl font-heading font-medium">
              What you ordered:
            </h3>

            {/* map start here */}
            {items.map((item) => (
              <div className="flex space-x-10 items-center rounded-xl bg-white my-1 px-6 py-2 shadow">
                <div className="relative h-16 aspect-square">
                  <Image
                    src={item.image}
                    alt={item.eventName}
                    fill
                    className="object-contain z-10"
                  />
                  <Image
                    src={item.image}
                    alt={item.eventName}
                    fill
                    className="object-cover blur-sm"
                  />
                </div>
                <h1 className="font-medium text-gray-800 ">
                  <span className="font-medium">{item.eventName}</span> -{" "}
                  {item.ticketName}
                </h1>
                <p className="">
                  <span className="font-bold">Qty: </span>
                  {item.ticketQuantity}
                </p>
              </div>
            ))}

            {/* map end here */}

            <div className="sm:max-w-max sm:ml-auto mt-10">
              <p className="flex items-center justify-between pb-1 mb-1 font-heading font-medium border-b border-black border-opacity-10">
                <span className="mr-16">Subtotal</span>
                <span className="flex items-center">
                  <span className="mr-2 text-sm">$</span>
                  <span className="text-xl">{total.toFixed(2)}</span>
                </span>
              </p>
              <p className="flex items-center justify-between font-heading font-medium">
                <span className="mr-16">Total</span>
                <span className="flex items-center">
                  <span className="mr-2 text-sm text-blue-500">$</span>
                  <span className="text-3xl text-blue-500">
                    {(total + shipping).toFixed(2)}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <img
          className="hidden sm:block absolute bottom-0 right-0 -mr-12 lg:-mr-24"
          src="uinel-assets/images/ecommerce-order/bg.png"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Confirmation;
