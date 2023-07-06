import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../../components/CustomUI/Layout";
import EventForm from "../../../../components/AdminForms/EventForm";

const EditEventPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Edit Event">
      <EventForm eventId={id as string} />
    </Layout>
  );
};
export default EditEventPage;
