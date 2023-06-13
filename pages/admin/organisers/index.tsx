import React, { useEffect, useState } from "react";

import allOrganisers from "../../../utils/all_organisers.json";
import { OrganiserType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import OrganiserCard from "../../../components/ListCards/OrganiserCard";

const AllOrganisersPage = () => {
  const [organisers, setOrganisers] = useState<OrganiserType[]>();

  const fetchOrganisers = () => {
    setOrganisers(allOrganisers);
  };

  useEffect(() => {
    fetchOrganisers();
  }, [allOrganisers]);

  const organisersList = organisers?.map((organiser) => (
    <OrganiserCard key={organiser.id} {...organiser} />
  ));

  return (
    <Layout title="All Organisers">
      <Container
        title="All Organisers"
        className="grid grid-cols-1"
        gridItems={organisersList}
      ></Container>
    </Layout>
  );
};

export default AllOrganisersPage;
