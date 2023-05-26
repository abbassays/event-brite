import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { EventType, TicketType } from "../../types";
import allEvents from "../../utils/all_events.json";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";
import Textarea from "../UI/Textarea";

interface TicketFormProps {
  event?: EventType | undefined;
}

const TicketForm = ({ event }: TicketFormProps) => {
  const [events, setEvents] = useState<EventType[] | []>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TicketType>();

  const ticketOptions = ["Free", "Paid", "Donation"].map((option) => ({
    id: option,
    name: option,
  }));

  const numberRules = {
    min: {
      value: 0,
      message: "Must be greater than 0",
    },
    pattern: {
      value: /^[0-9]+(\.[0-9]{1,2})?$/,
    },
  };

  const selectedType = watch("type");

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
      <Select
        label="Ticket Type"
        name="type"
        register={register}
        errors={errors}
        rules={{ required: "Ticekt Type is required" }}
        placeholder="Select an option"
        size={1}
        options={ticketOptions}
      />

      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Organiser Description"
          name="description"
          register={register}
          errors={errors}
        />
      </div>

      <Input
        type="number"
        label="Price ($)"
        placeholder="Ticket Price"
        name="price"
        register={register}
        errors={errors}
        rules={
          selectedType === "Paid"
            ? {
                required: "Ticket Price is required",
                ...numberRules,
              }
            : {}
        }
      />

      <Input
        type="number"
        label="Max Quantity"
        placeholder="Ticket Max Quantity"
        name="quantity"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Max Quantity is required", ...numberRules }}
      />

      <Input
        type="datetime-local"
        label="Sale Starts at"
        placeholder="Date & Time"
        name="startDate"
        register={register}
        errors={errors}
        rules={{ required: "Sale Starts Date is required" }}
      />

      <Input
        type="datetime-local"
        label="Sale Ends at"
        placeholder="Date & Time"
        name="endDate"
        register={register}
        errors={errors}
        rules={{ required: "Sale End Date is required" }}
      />

      <Select
        label="Event"
        name="eventId"
        register={register}
        errors={errors}
        rules={{ required: "Event is required" }}
        placeholder="Select an option"
        size={1}
        options={events}
      />

      <Input
        type="file"
        label={"Upload Image"}
        placeholder={"Upload Image"}
        name="image"
        register={register}
        errors={errors}
        aria-describedby="file_input_help"
        isFile={true}
        accept="image/*"
      />
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        title={`Create Ticket for ${event?.name}`}
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
