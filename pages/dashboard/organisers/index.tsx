import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { allOrganisers } from "@/utils/json-database";
import { OrganiserType } from "@/types";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";
import OrganiserCard from "@/components/ListCards/OrganiserCard";
import DeleteModal from "@/components/CustomUI/DeleteModal";
import Pagination from "@/components/CustomUI/Pagination";
import Button from "@/components/CustomUI/Button";

const AllOrganisersPage = () => {
  const router = useRouter();
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
    setOrganisers(selectedOrganisers.slice(0, itemsPerPage));
  };

  useEffect(() => {
    fetchOrganisers();
  }, [allOrganisers, currentPage]);

  const handleDelete = (organiserId: string) => {
    // Delete organiser from DB
    console.log("Deleting organiser with id: " + organiserId);
  };

  const organisersList = organisers?.map((organiser) => (
    <OrganiserCard
      key={organiser.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...organiser}
    />
  ));

  const createButton = (
    <Button onClick={() => router.push("/dashboard/organisers/create")}>
      Create Organiser
    </Button>
  );

  return (
    <AdminLayout title="All Organisers">
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
        actionButton={createButton}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allOrganisers.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllOrganisersPage;
