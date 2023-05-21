import React from "react";

import Layout from "../components/UI/Layout";
import CartContainer from "../components/Cart/CartContainer";
import BillingPaymentForm from "../components/Cart/BillingPaymentForm";
import Container from "../components/UI/Container";
import Wizard from "../components/Cart/Wizard";

const cart = () => {
  const wizardItems = ["Your Cart", "Billing & Payment"];
  const [selected, setSelected] = React.useState(wizardItems[0]); //

  return (
    <Layout title="Cart">
      <Container>
        <Wizard
          selected={selected}
          setSelected={setSelected}
          wizardItems={wizardItems}
        />
        {selected === "Your Cart" ? (
          <CartContainer setSelected={setSelected} />
        ) : (
          <BillingPaymentForm setSelected={setSelected} />
        )}
      </Container>
    </Layout>
  );
};

export default cart;
