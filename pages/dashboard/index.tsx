import React, { useState } from "react";

import {
  allEvents,
  allOrganisers,
  allStaffMembers,
  allTickets,
} from "@/utils/json-database";
import { useCustomSession } from "@/context/customSession";

import AdminLayout from "@/components/CustomUI/AdminLayout";
import Container from "@/components/CustomUI/Container";

import DeleteModal from "@/components/CustomUI/DeleteModal";
import PageLoader from "@/components/CustomUI/PageLoader";
import { useRouter } from "next/router";
import AdminDashboard from "@/components/Dashboard/AdminDashboard";
import OrganiserDashboard from "@/components/Dashboard/OrganiserDashboard";

const AdminOverviewPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { customSession } = useCustomSession();
  const router = useRouter();

  React.useEffect(() => {
    if (customSession) {
      if (customSession.role === "CUSTOMER") {
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  }, [customSession]);

  const handleDelete = (eventId: string) => {
    // Delete event from DB
    console.log("Deleting event with id: " + eventId);
  };

  if (loading) return <PageLoader />;

  return (
    <AdminLayout title="Admin Dashboard">
      <DeleteModal
        selectedId={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />

      <Container
        title="Dashboard"
        description="Overview of all the Events, Tickets, & Organisers"
      >
        {customSession.role === "ADMIN" && <AdminDashboard />}
        {customSession.role === "ORGANISER" && <OrganiserDashboard />}
      </Container>
    </AdminLayout>
  );
};

export default AdminOverviewPage;
