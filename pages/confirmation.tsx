import React, { useState, useEffect } from "react";

import { CartType } from "../types";
import { allCarts } from "@/utils/json-database";

import Container from "../components/CustomUI/Container";
import ConfirmationContainer from "../components/Confirmation/ConfirmationContainer";

const Confirmation = () => {
  const [cart, setCart] = useState<CartType>();

  const fetchCart = () => {
    /* Replace this code with your code to fetch user's cart*/
    setCart(allCarts[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    fetchCart();
  }, [allCarts]);

  return (
    <Container>
      <ConfirmationContainer cart={cart} />
    </Container>
  );
};

export default Confirmation;
