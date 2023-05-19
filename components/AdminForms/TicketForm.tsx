import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { EventType, TicketType } from "../../types";
import allEvents from "../../utils/all_events.json";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";

const TicketForm: React.FC = () => {
  const ticketTypes = ["Standard", "VIP", "Early Bird", "Group"];
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
      <Select
        label="Ticket Type"
        name="Type"
        register={register}
        errors={errors}
        rules={{ required: "Ticket type is required" }}
        placeholder="Select an option"
        options={ticketTypes.map((ticket) => {
          return { id: ticket, name: ticket };
        })}
      />
      <Input
        type="number"
        label="Price ($)"
        placeholder="Ticket Price"
        name="Ticket"
        register={register}
        errors={errors}
        rules={{ required: "Ticket Price is required" }}
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
