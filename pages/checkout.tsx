import React from "react";

import Layout from "../components/UI/Layout";
import CartContainer from "../components/Cart/CartContainer";
import BillingPaymentForm from "../components/Cart/BillingPaymentForm";
import Container from "../components/UI/Container";

const cart = () => {
  return (
    <Layout title="Checkout">
      <Container>
        <CartContainer />
        <BillingPaymentForm />
      </Container>
    </Layout>
  );
};

export default cart;
