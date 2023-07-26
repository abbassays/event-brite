import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { StaffMemberType } from "@/types";
import { allStaffMembers, getStaffMemberByOrganiserId } from "@/utils/json-database";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Button from "@/components/CustomUI/Button";
import Container from "@/components/CustomUI/Container";
import DeleteModal from "@/components/CustomUI/DeleteModal";
import Pagination from "@/components/CustomUI/Pagination";
import CustomSearchBar from "@/components/CustomUI/SearchBar";
import StaffCard from "@/components/ListCards/StaffCard";
import { useCustomSession } from "@/context/customSession";

const AllStaffMembersPage = () => {
  const router = useRouter();
  const itemsPerPage = 10;

  const { customSession, selectedOrg } = useCustomSession();

  const [staffMembers, setStaffMembers] = useState<StaffMemberType[]>([]);
  const [visibleStaffMembers, setVisibleStaffMembers] =
    useState<StaffMemberType[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const initializeStaff = () => {
    if (customSession?.role === "ADMIN") {
      setStaffMembers(allStaffMembers);
    } else if (customSession?.role === "ORGANISER") {
      setStaffMembers(getStaffMemberByOrganiserId(customSession.user.id));
    }
  };

  const fetchStaffMembers = () => {
    /* Replace this code with your code to fetch staff */
    const selectedStaffMember = staffMembers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setVisibleStaffMembers(selectedStaffMember);
  };

  useEffect(
    () => initializeStaff(),
    [allStaffMembers, customSession, selectedOrg]
  );

  useEffect(() => {
    fetchStaffMembers();
  }, [staffMembers, currentPage]);

  const handleDelete = (staffId: string) => {
    // Delete staff member from DB
    console.log("Deleting staff member with id: " + staffId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedWord = e.target.value?.toLowerCase();
    const searchedStaff = staffMembers.filter((staff) => {
      return (
        staff.firstName.toLowerCase().includes(searchedWord) ||
        staff.lastName.toLowerCase().includes(searchedWord) ||
        staff.organisations.some((org) =>
          org.name.toLowerCase().includes(searchedWord)
        )
      );
    });
    setVisibleStaffMembers(searchedStaff.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const staffMemberList = visibleStaffMembers?.map((staffMember) => (
    <StaffCard
      key={staffMember.id}
      setSelectedId={setSelectedId}
      setIsOpen={setIsOpen}
      {...staffMember}
    />
  ));

  const createButton = (
    <Button onClick={() => router.push("/dashboard/staff/create")}>
      Create
    </Button>
  );

  const searchBar = (
    <div className="flex justify-end">
      <CustomSearchBar
        placeholder="Search Staff by Name / Organiser"
        onChange={(e) => handleSearch(e)}
      />
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
        gridHeaders={searchBar}
      >
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={staffMembers.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </AdminLayout>
  );
};

export default AllStaffMembersPage;
