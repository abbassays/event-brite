import React, { useState, useEffect, ChangeEvent } from "react";
import { useForm } from "react-hook-form";

import categories from "../../utils/categories";
import { EventType } from "../../types";
import allEvents from "../../utils/all_events.json";

import Container from "../CustomUI/Container";
import Input from "../CustomUI/Input";
import Select from "../CustomUI/Select";
import Button from "../CustomUI/Button";
import Textarea from "../CustomUI/Textarea";
import Image from "next/image";
import ImagePreview from "../CustomUI/ImagePreview";

const EventForm = ({ eventId }: { eventId?: string }) => {
  const [event, setEvent] = useState<EventType>();
  const [uploadedImage, setUploadedImage] = useState<string | undefined>();

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
        name="name"
        register={register}
        errors={errors}
        rules={{ required: "Name is required" }}
        defaultValue={event?.name}
      />
      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Event Description"
          name="description"
          register={register}
          errors={errors}
          defaultValue={event?.description}
        />
      </div>
      <Input
        type="text"
        label="Location"
        placeholder="Event Location"
        name="location"
        register={register}
        errors={errors}
        rules={{ required: "Location is required" }}
        defaultValue={event?.location}
      />
      <Select
        label="Category"
        name="category"
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

      <div className="md:h-auto md:row-span-5 order-last md:order-none sm:mb-6 relative">
        <label className="block mb-1 font-medium text-gray-900">
          Event Image
        </label>
        <div className="bg-white border rounded-lg overflow-hidden p-2">
          <ImagePreview
            name="image"
            link={event?.image}
            register={register}
            errors={errors}
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
      </div>

      <Input
        type="datetime-local"
        label="Event Starts at"
        placeholder="Date & Time"
        name="startDate"
        register={register}
        errors={errors}
        rules={{ required: "Start Date is required" }}
        defaultValue={event?.startDate ? event.startDate.slice(0, 16) : ""}
      />
      <Input
        type="datetime-local"
        label="Event Ends at"
        placeholder="Date & Time"
        name="endDate"
        register={register}
        errors={errors}
        rules={{ required: "End Date is required" }}
        defaultValue={event?.endDate ? event.endDate.slice(0, 16) : ""}
      />
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        title={`${event ? "Edit" : "Create"} Event`}
        description={`${event ? "Edit details of a" : "Create a new"} event`}
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
