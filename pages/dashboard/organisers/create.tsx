import React from "react";

import Layout from "../../../components/CustomUI/Layout";
import OrganiserForm from "../../../components/AdminForms/OrganiserForm";

const CreateEvent = () => {
  return (
    <Layout title="Create Organiser">
      <OrganiserForm />
    </Layout>
  );
};

export default CreateEvent;
