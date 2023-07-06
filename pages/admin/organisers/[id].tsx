import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import allOrganisers from "../../..//utils/all_organisers.json";

import Layout from "../../../components/CustomUI/Layout";
import OrganiserForm from "../../../components/AdminForms/OrganiserForm";
import { OrganiserType } from "../../../types";
import PageLoader from "../../../components/CustomUI/PageLoader";

const EditTicketPage = () => {
  const [organiser, setOrganiser] = useState<OrganiserType>();
  const router = useRouter();
  const { id } = router.query;

  const fetchOrganiser = () => {
    /* This will be a dynamic route with organiser id, organiser will be fetched here from organiser id */
    const fetchedOrganiser = allOrganisers.find(
      (organiser) => organiser.id === id
    );
    setOrganiser(fetchedOrganiser);
  };

  useEffect(() => {
    if (id) fetchOrganiser();
  }, [allOrganisers, id]);

  if (!organiser) return <PageLoader />;

  return (
    <Layout title="Edit Ticket">
      <OrganiserForm organiser={organiser} />
    </Layout>
  );
};
export default EditTicketPage;
