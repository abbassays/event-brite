import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { EventType, TicketType } from "@/types";

import Button from "@/components//CustomUI/Button";
import Container from "@/components//CustomUI/Container";
import ImagePreview from "@/components//CustomUI/ImagePreview";
import Input from "@/components//CustomUI/Input";
import Select from "@/components//CustomUI/Select";
import Textarea from "@/components//CustomUI/Textarea";

interface TicketFormProps {
  ticket?: TicketType;
  eventsList: EventType[];
}

const TicketForm = ({ ticket, eventsList }: TicketFormProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TicketType>({
    defaultValues: {
      ...ticket,
      startDate: ticket?.startDate.slice(0, 16),
      endDate: ticket?.endDate.slice(0, 16),
      eventId: ticket?.eventId,
      price: Number(ticket?.price.toFixed(0)),
    },
  });

  const ticketOptions = ["Free", "Paid", "Donation"].map((option) => ({
    id: option,
    name: option,
  }));

  const eventOptions = eventsList.map((event) => ({
    id: event.id,
    name: event.name,
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
          placeholder="Ticket Description"
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
        options={eventOptions}
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
          <Link href={"/dashboard/tickets"}>
            <Button type="button" variant="danger">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary">
            {ticket ? "Edit" : "Create"}
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default TicketForm;
