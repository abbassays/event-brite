import React from "react";

import Layout from "../../components/UI/Layout";
import EventForm from "../../components/AdminForms/EventForm";
import ImageContainer from "../../components/UI/ImageContainer";

const CreateEvent = () => {
  return (
    <Layout title="Create Event">
      <div className="mt-10 lg:mt-20">
        <ImageContainer
          link="/images/event-placeholder.jpg"
          alt="Create Event"
        />
      </div>
      <EventForm />
    </Layout>
  );
};

export default CreateEvent;
