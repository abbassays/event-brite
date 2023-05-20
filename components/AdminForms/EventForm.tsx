import React from "react";
import { useForm } from "react-hook-form";

import categories from "../../utils/categories";
import { EventType } from "../../types";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Select from "../UI/Select";
import Button from "../UI/Button";

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
      <Input
        type="text"
        label="Description"
        placeholder="Event Description"
        name="Description"
        register={register}
        errors={errors}
        rules={{ required: "Description is required" }}
      />
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
        label="Date & Time"
        placeholder="Date & Time"
        name="Date"
        register={register}
        errors={errors}
        rules={{ required: "Date is required" }}
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
