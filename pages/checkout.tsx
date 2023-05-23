import React, { useEffect, useState } from "react";

import allCarts from "../utils/all_carts.json";
import { CartType } from "../types";

import Layout from "../components/UI/Layout";
import CartContainer from "../components/Cart/CartContainer";
import BillingPaymentForm from "../components/Cart/BillingPaymentForm";
import Container from "../components/UI/Container";

const cart = () => {
  const [cart, setCart] = useState<CartType>();

  const fetchCart = () => {
    /* Replace this code with your code to fetch user's cart*/
    setCart(allCarts[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    fetchCart();
  }, [allCarts]);

  return (
    <Layout title="Checkout">
      <Container>
        <CartContainer cart={cart} />
        <BillingPaymentForm />
      </Container>
    </Layout>
  );
};

export default cart;
