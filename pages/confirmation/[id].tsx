import React from "react";
import { useRouter } from "next/router";
const order = {
  date: "May 20, 2023",
  shippingAddress: "123 Main St, City, State",
  paymentMethod: "Credit Card",
  items: [
    { name: "Item 1", quantity: 2, price: 10 },
    { name: "Item 2", quantity: 1, price: 15 },
    { name: "Item 3", quantity: 3, price: 5 },
  ],
  total: 45,
};
const Confirmation = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p className="mb-4">Thank you for your order! Here are the details:</p>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-2">Order ID: {id}</h2>
        <p className="mb-2">Order Date: {order.date}</p>
        <p className="mb-2">Shipping Address: {order.shippingAddress}</p>
        <p className="mb-2">Payment Method: {order.paymentMethod}</p>

        <h3 className="text-lg font-bold mt-4 mb-2">Order Items:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index} className="mb-1">
              {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold mt-4">Total: ${order.total}</h3>
      </div>
    </div>
  );
};

export default Confirmation;
