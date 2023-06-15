import React, { useEffect, useState } from "react";

import allOrganisers from "../../../utils/all_organisers.json";
import { OrganiserType } from "../../../types";

import Layout from "../../../components/UI/Layout";
import Container from "../../../components/UI/Container";
import OrganiserCard from "../../../components/ListCards/OrganiserCard";
import DeleteModal from "../../../components/UI/DeleteModal";
import Pagination from "../../../components/UI/Pagination";

const AllOrganisersPage = () => {
  const itemsPerPage = 10;
  const [organisers, setOrganisers] = useState<OrganiserType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchOrganisers = () => {
    /* Replace this code with your code to fetch organisers */
    const selectedOrganisers = allOrganisers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setOrganisers(selectedOrganisers);
  };

  useEffect(() => {
    fetchOrganisers();
  }, [allOrganisers, currentPage]);

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
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allOrganisers.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </Layout>
  );
};

export default AllOrganisersPage;
