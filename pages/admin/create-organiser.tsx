import React from "react";

import Layout from "../../components/UI/Layout";
import OrganiserForm from "../../components/AdminForms/OrganiserForm";
import ImageContainer from "../../components/UI/ImageContainer";

const CreateEvent = () => {
  return (
    <Layout title="Create Organiser">
      <div className="mt-10 lg:mt-20">
        <ImageContainer
          link="/images/organiser-placeholder.jpeg"
          alt="Create Organiser"
        />
      </div>

      <OrganiserForm />
    </Layout>
  );
};

export default CreateEvent;
