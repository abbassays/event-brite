import React from "react";

import Layout from "../../../components/CustomUI/Layout";
import TicketForm from "../../../components/AdminForms/TicketForm";

const CreateEvent = () => {
  return (
    <Layout title="Create Ticket">
      <TicketForm />
    </Layout>
  );
};

export default CreateEvent;
