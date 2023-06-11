import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/UI/Layout";
import EventForm from "../../../components/AdminForms/EventForm";

const EditEventPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Create Event">
      <EventForm eventId={id as string} />
    </Layout>
  );
};
export default EditEventPage;
