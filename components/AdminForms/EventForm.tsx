import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { EventType } from "../../types";

import Button from "../CustomUI/Button";
import Container from "../CustomUI/Container";
import ImagePreview from "../CustomUI/ImagePreview";
import Input from "../CustomUI/Input";
import Select from "../CustomUI/Select";
import Textarea from "../CustomUI/Textarea";

const EventForm = ({
  event,
  categoryList,
}: {
  event?: EventType;
  categoryList: any;
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventType>({
    defaultValues: {
      ...event,
      startDate: event?.startDate.slice(0, 16),
      endDate: event?.endDate.slice(0, 16),
    },
  });

  const onSubmit = (data: EventType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

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
      />
      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Event Description"
          name="description"
          register={register}
          errors={errors}
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
      />
      <Select
        label="Category"
        name="category"
        register={register}
        errors={errors}
        rules={{ required: "Category is required" }}
        placeholder="Select an option"
        options={categoryList}
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
      />
      <Input
        type="datetime-local"
        label="Event Ends at"
        placeholder="Date & Time"
        name="endDate"
        register={register}
        errors={errors}
        rules={{ required: "End Date is required" }}
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
        <div className="mt-10 flex gap-4">
          <Link href={"/dashboard/events"}>
            <Button type="button" variant="danger">
              Cancel
            </Button>
          </Link>
          {event && (
            <Button type="button" variant="tertiary">
              Publish
            </Button>
          )}
          <Button type="submit" variant="primary">
            {event ? "Save" : "Create"}
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default EventForm;
