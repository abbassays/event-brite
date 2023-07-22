import React from "react";

import categories from "@/utils/categories";
import { allOrganisers } from "@/utils/json-database";
import { SelectItemType } from "@/types";

import Layout from "@/components/CustomUI/Layout";
import EventForm from "@/components/AdminForms/EventForm";

const CreateEventPage = () => {
  const categoryList: SelectItemType[] = categories.map((item) => {
    return {
      id: item.category,
      name: item.category,
    };
  });

  const organisersList: SelectItemType[] = allOrganisers.map((organiser) => ({
    id: organiser.id,
    name: organiser.name,
  }));

  return (
    <Layout title="Create Event">
      <EventForm categoryList={categoryList} organiserList={organisersList} />
    </Layout>
  );
};

export default CreateEventPage;
