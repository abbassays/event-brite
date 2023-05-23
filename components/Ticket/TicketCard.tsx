import React, { Dispatch, SetStateAction, useState } from "react";

import { CartType, TicketType } from "../../types";

import { FaPlus, FaMinus } from "react-icons/fa";
import { getDateString } from "../../utils/DateFunctions";

interface CardProps extends TicketType {
  name: string;
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>;
}

const TicketCard = ({
  id,
  type,
  price,
  quantity,
  image,
  startDate,
  endDate,
  name,
  cart,
  setCart,
}: CardProps) => {
  const [boughtQuantity, setBoughtQuantity] = useState<number>(0);

  const addToCart = () => {
    const ticketIndex = cart.items.findIndex((item) => item.ticketId === id);
    if (boughtQuantity < 10) {
      if (ticketIndex !== -1) {
        // Ticket is already in the cart, update quantity
        const updatedItems = [...cart.items];
        updatedItems[ticketIndex].quantity += 1;
        setCart({ ...cart, items: updatedItems });
      } else {
        // Ticket is not in the cart, add it
        setCart({
          ...cart,
          items: [...cart.items, { ticketId: id, quantity: 1 }],
        });
      }
      setBoughtQuantity(boughtQuantity + 1);
    }
  };

  const removeFromCart = () => {
    if (boughtQuantity > 0) {
      const ticketIndex = cart.items.findIndex((item) => item.ticketId === id);
      if (ticketIndex !== -1) {
        // Ticket is already in the cart, update quantity
        const updatedItems = [...cart.items];
        updatedItems[ticketIndex].quantity -= 1;
        setCart({ ...cart, items: updatedItems });
      }
      setBoughtQuantity(boughtQuantity - 1);
    }
  };

  return (
    <div className="flex flex-col border py-2 p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-medium text-lg">
          {name}
          <span className="text-base text-gray-600"> {type}</span>
        </p>
        <div className="flex justify-between items-center text-center space-x-2">
          <button
            className={`
                rounded p-2 transition-all
                ${
                  boughtQuantity > 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }
            `}
            onClick={removeFromCart}
          >
            <FaMinus />
          </button>
          <div className="w-4">{boughtQuantity}</div>
          <button
            className={`
                rounded p-2 transition-all
                ${
                  boughtQuantity < 10
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }
            `}
            onClick={addToCart}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col">
        <p className="text-lg font-medium">$ {price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">
          Sales end on {getDateString(endDate)}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
