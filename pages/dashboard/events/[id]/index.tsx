import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { allEvents, allOrganisers } from "@/utils/json-database";
import categories from "@/utils/categories";

import Layout from "../../../../components/CustomUI/Layout";
import EventForm from "../../../../components/AdminForms/EventForm";
import { EventType, SelectItemType } from "@/types";
import PageLoader from "@/components/CustomUI/PageLoader";

const EditEventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<EventType>();

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

  const fetchEvent = () => {
    /* This will be a dynamic route with event id, event will be fetched here from event id */
    const fetchedEvent = allEvents.find((event) => event.id === id);
    setEvent(fetchedEvent);
  };

  useEffect(() => {
    if (router.isReady) fetchEvent();
  }, [router]);

  if (!event) return <PageLoader />;

  return (
    <Layout title="Edit Event">
      <EventForm
        event={event}
        categoryList={categoryList}
        organiserList={organisersList}
      />
    </Layout>
  );
};
export default EditEventPage;
