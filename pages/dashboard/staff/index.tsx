import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { allStaffMembers } from "@/utils/json-database";
import { StaffMemberType } from "@/types";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";
import DeleteModal from "@/components/CustomUI/DeleteModal";
import Pagination from "@/components/CustomUI/Pagination";
import Button from "@/components/CustomUI/Button";
import StaffCard from "@/components/ListCards/StaffCard";

const AllStaffMembersPage = () => {
  const router = useRouter();
  const itemsPerPage = 10;
  const [staffMembers, setStaffMembers] = useState<StaffMemberType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchStaffMembers = () => {
    /* Replace this code with your code to fetch staff */
    const selectedStaffMember = allStaffMembers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setStaffMembers(selectedStaffMember);
  };

  useEffect(() => {
    fetchStaffMembers();
  }, [allStaffMembers, currentPage]);

  const handleDelete = (eventId: string) => {
    // Delete staff member from DB
    console.log("Deleting staff member with id: " + eventId);
  };

  const staffMemberList = staffMembers?.map((staffMember) => (
    <StaffCard
      key={staffMember.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...staffMember}
    />
  ));

  const createButton = (
    <div>
      <Button onClick={() => router.push("/dashboard/staff/create")}>
        Create
      </Button>
    </div>
  );

  return (
    <AdminLayout title="All Staff Members">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
      <Container
        title="All Staff Members"
        className="grid grid-cols-1"
        gridItems={staffMemberList}
        actionButton={createButton}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={allStaffMembers.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllStaffMembersPage;
