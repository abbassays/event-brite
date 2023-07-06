import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { EventType, TicketType } from "../../types";
import allEvents from "../../utils/all_events.json";
import allTickets from "../../utils/all_tickets.json";

import Container from "../CustomUI/Container";
import Input from "../CustomUI/Input";
import Button from "../CustomUI/Button";
import Select from "../CustomUI/Select";
import Textarea from "../CustomUI/Textarea";
import ImagePreview from "../CustomUI/ImagePreview";

interface TicketFormProps {
  ticketId?: string | undefined;
}

const TicketForm = ({ ticketId }: TicketFormProps) => {
  const [events, setEvents] = useState<EventType[] | []>([]);
  const [ticket, setTicket] = useState<TicketType | undefined>();
  const [uploadedImage, setUploadedImage] = useState<string | undefined>();
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

  const fetchTicket = () => {
    const fetchedTicket = allTickets.find((ticket) => ticket.id === ticketId);
    setTicket(fetchedTicket);
  };

  useEffect(() => {
    fetchEvents();
    if (ticketId) fetchTicket();
  }, [allEvents, ticketId]);

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
        options={
          !ticket
            ? ticketOptions
            : ticketOptions.map((option) => {
                if (option.id === ticket.type) {
                  return { ...option, selected: true };
                }
                return option;
              })
        }
      />

      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Ticket Description"
          name="description"
          register={register}
          errors={errors}
          defaultValue={ticket?.description}
        />
      </div>

      <Input
        type="number"
        label="Price ($)"
        placeholder="Ticket Price"
        name="price"
        register={register}
        errors={errors}
        defaultValue={ticket?.price}
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
        defaultValue={ticket?.quantity}
        rules={{ required: "Ticket Max Quantity is required", ...numberRules }}
      />

      <div className="md:h-auto md:row-span-5 order-last md:order-none sm:mb-6 relative">
        <label className="block mb-1 font-medium text-gray-900">
          Ticket Image
        </label>
        <div className="bg-white border rounded-lg overflow-hidden p-2">
          <ImagePreview
            name="image"
            link={ticket?.image}
            register={register}
            errors={errors}
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
      </div>

      <Input
        type="datetime-local"
        label="Sale Starts at"
        placeholder="Date & Time"
        name="startDate"
        register={register}
        errors={errors}
        defaultValue={ticket?.startDate ? ticket.startDate.slice(0, 16) : ""}
        rules={{ required: "Sale Starts Date is required" }}
      />

      <Input
        type="datetime-local"
        label="Sale Ends at"
        placeholder="Date & Time"
        name="endDate"
        register={register}
        errors={errors}
        defaultValue={ticket?.endDate ? ticket.endDate.slice(0, 16) : ""}
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
        options={
          !ticket
            ? events
            : events.map((event) => {
                if (event.id === ticket.eventId) {
                  return { ...event, selected: true };
                }
                return event;
              })
        }
      />
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        title={`${ticket ? "Edit" : "Create"} Ticket`}
        description={`${ticket ? "Edit details of a" : "Create a new"} ticket`}
        className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3"
        gridItems={formItems}
      >
        <div className="mt-10">
          <Button type="submit" variant="primary">
            {ticket ? "Edit " : "Create "} Ticket
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default TicketForm;
