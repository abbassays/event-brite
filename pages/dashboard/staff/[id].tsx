import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { allStaffMembers } from "@/utils/json-database";

import Layout from "@/components/CustomUI/Layout";
import StaffForm from "@/components/AdminForms/StaffForm";
import { StaffMemberType } from "@/types";
import PageLoader from "@/components/CustomUI/PageLoader";

const EditStaffMemberPage = () => {
  const [staffMember, setStaffMember] = useState<StaffMemberType>();
  const router = useRouter();
  const { id } = router.query;

  const fetchStaffMember = () => {
    /* This will be a dynamic route with Staff Member id, Staff Member will be fetched here from Staff Member id */
    const fetchedStaffMember = allStaffMembers.find(
      (staffMember) => staffMember.id === id
    );
    setStaffMember(fetchedStaffMember);
  };

  useEffect(() => {
    if (id) fetchStaffMember();
  }, [allStaffMembers, id]);

  if (!staffMember) return <PageLoader />;

  return (
    <Layout title="Edit Ticket">
      <StaffForm staff={staffMember} />
    </Layout>
  );
};

export default EditStaffMemberPage;
