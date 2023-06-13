import React from "react";

import Layout from "../../../components/UI/Layout";
import TicketForm from "../../../components/AdminForms/TicketForm";

const CreateEvent = () => {
  return (
    <Layout title="Create Ticket">
      <TicketForm />
    </Layout>
  );
};

export default CreateEvent;
