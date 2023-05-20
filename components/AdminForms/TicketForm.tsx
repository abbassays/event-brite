import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { EventType, TicketType } from "../../types";
import allEvents from "../../utils/all_events.json";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";

const TicketForm: React.FC = () => {
  const [events, setEvents] = useState<EventType[] | []>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketType>();

  const onSubmit = (data: TicketType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  const fetchEvents = () => {
    /* fetch events from backend here to map in dropdown */
    setEvents(allEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, [allEvents]);

  const formItems = (
    <>
      <Input
        type="text"
        label="Name"
        placeholder="Ticket Name"
        name="Name"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Name is required" }}
      />

      <Input
        type="text"
        label="Description"
        placeholder="Ticket Description"
        name="Description"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Description is required" }}
      />

      <Input
        type="number"
        label="Price ($)"
        placeholder="Ticket Price"
        name="Price"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Price is required" }}
      />

      <Input
        type="number"
        label="Max Quantity"
        placeholder="Ticket Max Quantity"
        name="MaxQuantity"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Max Quantity is required" }}
      />

      <Input
        type="text"
        label="Location"
        placeholder="Ticket Location"
        name="Location"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Location is required" }}
      />

      <Input
        type="datetime-local"
        label="Start Date & Time"
        placeholder="Date & Time"
        name="StartDate"
        register={register}
        errors={errors}
        rules={{ required: "Start Date is required" }}
      />

      <Input
        type="datetime-local"
        label="End Date & Time"
        placeholder="Date & Time"
        name="EndDate"
        register={register}
        errors={errors}
        rules={{ required: "End Date is required" }}
      />

      <Input
        type="file"
        label={"Upload Image"}
        placeholder={"Upload Image"}
        name="Image"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Image is Required" }}
        aria-describedby="file_input_help"
        isFile={true}
        accept="image/*"
      />

      <Select
        label="Event"
        name="EventId"
        register={register}
        errors={errors}
        rules={{ required: "Event is required" }}
        placeholder="Select an option"
        size={1}
        options={events.map((event: EventType) => {
          return { id: event.id, name: event.name };
        })}
      />
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        title="Create Ticket"
        description="Create a new ticket"
        className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3"
        gridItems={formItems}
      >
        <div className="mt-10">
          <Button type="submit" variant="primary">
            Create Ticket
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default TicketForm;
