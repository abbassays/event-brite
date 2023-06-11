import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import categories from "../../utils/categories";
import { EventType } from "../../types";
import allEvents from "../../utils/all_events.json";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";

const EventForm = ({ eventId }: { eventId?: string }) => {
  const [event, setEvent] = useState<EventType>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventType>();

  const onSubmit = (data: EventType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  const fetchEvent = () => {
    /* This will be a dynamic route with event id, event will be fetched here from event id */
    const fetchedEvent = allEvents.find((event) => event.id === eventId);
    setEvent(fetchedEvent);
  };

  useEffect(() => {
    fetchEvent();
  }, [eventId]);

  console.log("Event is", event);

  const formItems = (
    <>
      <Input
        type="text"
        label="Name"
        placeholder="Event Name"
        name="Name"
        register={register}
        errors={errors}
        rules={{ required: "Name is required" }}
        defaultValue={event?.name}
      />
      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Event Description"
          name="Description"
          register={register}
          errors={errors}
          defaultValue={event?.description}
        />
      </div>
      <Input
        type="text"
        label="Location"
        placeholder="Event Location"
        name="Location"
        register={register}
        errors={errors}
        rules={{ required: "Location is required" }}
        defaultValue={event?.location}
      />
      <Select
        label="Category"
        name="Categories"
        register={register}
        errors={errors}
        rules={{ required: "Category is required" }}
        placeholder="Select an option"
        options={categories.map((item) => {
          return {
            id: item.category,
            name: item.category,
            selected: item.category === event?.category,
          };
        })}
      />
      <Input
        type="datetime-local"
        label="Event Starts at"
        placeholder="Date & Time"
        name="StartDate"
        register={register}
        errors={errors}
        rules={{ required: "Start Date is required" }}
        defaultValue={event?.startDate ? event.startDate.slice(0, 16) : ""}
      />
      <Input
        type="datetime-local"
        label="Event Ends at"
        placeholder="Date & Time"
        name="EndDate"
        register={register}
        errors={errors}
        rules={{ required: "End Date is required" }}
        defaultValue={event?.endDate ? event.endDate.slice(0, 16) : ""}
      />
      <Input
        type="file"
        label={"Upload Image"}
        placeholder={"Upload ImageEvent "}
        name="Image"
        register={register}
        errors={errors}
        rules={{ required: "Image is Required" }}
        aria-describedby="file_input_help"
        isFile={true}
        accept="image/*"
        defaultValue={event?.image}
      />
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        title="Create Event"
        description="Create a new event"
        className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3"
        gridItems={formItems}
      >
        <div className="mt-10">
          <Button type="submit" variant="primary">
            {event ? "Edit " : "Create "}
            Event
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default EventForm;
