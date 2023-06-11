import React from "react";

import Layout from "../../../components/UI/Layout";
import EventForm from "../../../components/AdminForms/EventForm";

const CreateEvent = () => {
  return (
    <Layout title="Create Event">
      <EventForm />
    </Layout>
  );
};

export default CreateEvent;
