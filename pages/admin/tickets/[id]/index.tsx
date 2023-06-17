import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../../components/UI/Layout";
import TicketForm from "../../../../components/AdminForms/TicketForm";

const EditTicketPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Edit Ticket">
      <TicketForm ticketId={id as string} />
    </Layout>
  );
};
export default EditTicketPage;
