import React from "react";
import { useForm } from "react-hook-form";

import categories from "../../utils/categories";
import { EventType } from "../../types";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";

const EventForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventType>();

  const onSubmit = (data: EventType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };
  const handleTickets = () => {
    console.log("Errors are", errors);
  };

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
      />
      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Event Description"
          name="Description"
          register={register}
          errors={errors}
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
      />
      <Select
        label="Category"
        name="Categories"
        register={register}
        errors={errors}
        rules={{ required: "Category is required" }}
        placeholder="Select an option"
        options={categories.map((item) => {
          return { id: item.category, name: item.category };
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
      />
      <Input
        type="datetime-local"
        label="Event Ends at"
        placeholder="Date & Time"
        name="EndDate"
        register={register}
        errors={errors}
        rules={{ required: "End Date is required" }}
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
            Create Event
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default EventForm;
