import React, { useEffect, useState } from "react";

import allOrganisers from "../../../utils/all_organisers.json";
import { OrganiserType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import OrganiserCard from "../../../components/ListCards/OrganiserCard";
import DeleteModal from "../../../components/UI/DeleteModal";

const AllOrganisersPage = () => {
  const [organisers, setOrganisers] = useState<OrganiserType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const fetchOrganisers = () => {
    setOrganisers(allOrganisers);
  };

  useEffect(() => {
    fetchOrganisers();
  }, [allOrganisers]);

  const handleDelete = (eventId: string) => {
    // Delete organiser from DB
    console.log("Deleting organiser with id: " + eventId);
  };

  const organisersList = organisers?.map((organiser) => (
    <OrganiserCard
      key={organiser.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...organiser}
    />
  ));

  return (
    <Layout title="All Organisers">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
      <Container
        title="All Organisers"
        className="grid grid-cols-1"
        gridItems={organisersList}
      ></Container>
    </Layout>
  );
};

export default AllOrganisersPage;
