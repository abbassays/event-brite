import React from "react";

import { allEvents } from "@/utils/json-database";

import Layout from "@/components/CustomUI/Layout";
import TicketForm from "@/components/AdminForms/TicketForm";
import PageLoader from "@/components/CustomUI/PageLoader";

const CreateEvent = () => {
  if (!allEvents) return <PageLoader />;

  return (
    <Layout title="Create Ticket">
      <TicketForm eventsList={allEvents} />
    </Layout>
  );
};

export default CreateEvent;
