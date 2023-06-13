import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/UI/Layout";
import OrganiserForm from "../../../components/AdminForms/OrganiserForm";

const EditTicketPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Edit Ticket">
      <OrganiserForm organiserId={id as string} />
    </Layout>
  );
};
export default EditTicketPage;
