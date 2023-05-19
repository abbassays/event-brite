import React from "react";
import { useForm } from "react-hook-form";

import { OrganiserType } from "../../types";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";

const OrganiserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganiserType>();

  const onSubmit = (data: OrganiserType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  const formItems = (
    <>
      <Input
        type="text"
        label="Name"
        placeholder="Organiser Name"
        name="Name"
        register={register}
        errors={errors}
        rules={{ required: "Name is required" }}
      />
      <Input
        type="text"
        label="Description"
        placeholder="Organiser Description"
        name="Description"
        register={register}
        errors={errors}
        rules={{ required: "Description is required" }}
      />
      <Input
        type="file"
        label={"Upload Image"}
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
        title="Create Organiser"
        description="Create a new organiser"
        className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3"
        gridItems={formItems}
      >
        <div className="mt-10">
          <Button type="submit" variant="primary">
            Create Organiser
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default OrganiserForm;
