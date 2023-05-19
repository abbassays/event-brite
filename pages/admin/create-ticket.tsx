import React from "react";

import Layout from "../../components/UI/Layout";
import TicketForm from "../../components/AdminForms/TicketForm";
import ImageContainer from "../../components/UI/ImageContainer";

const CreateEvent = () => {
  return (
    <Layout title="Create Ticket">
      <div className="mt-10 lg:mt-20">
        <ImageContainer
          link="/images/ticket-placeholder.jpeg"
          alt="Create Organiser"
        />
      </div>
      <TicketForm />
    </Layout>
  );
};

export default CreateEvent;
