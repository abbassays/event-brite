import React, { useEffect, useState } from "react";

import { CartType } from "../types";
import allCarts from "../utils/all_carts.json";

import Layout from "../components/UI/Layout";
import CartContainer from "../components/Cart/CartContainer";
import BillingPaymentForm from "../components/Cart/BillingPaymentForm";
import Container from "../components/UI/Container";
import Wizard from "../components/Cart/Wizard";

const cart = () => {
  const wizardItems = ["Your Cart", "Billing & Payment"];
  const [selected, setSelected] = useState(wizardItems[0]);
  const [cart, setCart] = useState<CartType>();

  const fetchCart = () => {
    /* Replace this code with your code to fetch user's cart*/
    setCart(allCarts[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    fetchCart();
  }, [allCarts]);

  console.log("1. Cart is ", cart);

  return (
    <Layout title="Cart">
      <Container>
        <Wizard
          selected={selected}
          setSelected={setSelected}
          wizardItems={wizardItems}
        />
        {selected === "Your Cart" ? (
          <CartContainer cart={cart} setSelected={setSelected} />
        ) : (
          <BillingPaymentForm setSelected={setSelected} />
        )}
      </Container>
    </Layout>
  );
};

export default cart;
