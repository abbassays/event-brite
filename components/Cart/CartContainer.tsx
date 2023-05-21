import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ItemType } from "../../types";
import allItems from "../../utils/all_items.json";

import Container from "../UI/Container";
import Button from "../UI/Button";
import ItemCard from "./ItemCard";
import ItemSummaryCard from "./ItemSummaryCard";

const CartContainer = ({
  setSelected,
}: {
  setSelected?: (selected: string) => void;
}) => {
  const router = useRouter();
  const isCheckout = router.pathname.includes("checkout");
  const shipping = 100;
  const [total, setTotal] = useState<number>(0);
  const [items, setItems] = useState<ItemType[]>([]);

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
                  {items.length > 0
                    ? `You have ${items.reduce(
                        (acc, item) => acc + item.ticketQuantity,
                        0
                      )} items in your cart`
                    : `Your cart is empty`}
                </span>

                {/* container start */}
                <div className={`${isCheckout ? "xl:px-4" : "xl:px-10"}`}>
                  {items.map((item) => (
                    <React.Fragment key={item.id}>
                      {isCheckout ? (
                        <ItemSummaryCard {...item} />
                      ) : (
                        <ItemCard {...item} />
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
                <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-lg">
                  <span>Subtotal</span>
                  <span className="flex items-center text-xl">
                    <span className="mr-2 text-base">$</span>
                    <span>{total.toFixed(2)}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-lg">
                  <span>Shipping</span>
                  <span className="flex items-center text-xl">
                    <span className="mr-2 text-base">$</span>
                    <span>{shipping.toFixed(2)}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-4 px-10 mb-6 leading-8 bg-white font-heading font-medium rounded-lg">
                  <span>Total</span>
                  <span className="flex items-center text-xl text-blue-500">
                    <span className="mr-2 text-base">$</span>
                    <span>{(total + shipping).toFixed(2)}</span>
                  </span>
                </div>
                <Button onClick={() => setSelected("Billing & Payment")}>
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
