import React from "react";

import categories from "@/utils/categories";

import Layout from "../../../components/CustomUI/Layout";
import EventForm from "../../../components/AdminForms/EventForm";

const CreateEvent = () => {
  const categoryList = categories.map((item) => {
    return {
      id: item.category,
      name: item.category,
    };
  });

  return (
    <Layout title="Create Event">
      <EventForm categoryList={categoryList} />
    </Layout>
  );
};

export default CreateEvent;
