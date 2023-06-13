import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { OrganiserType } from "../../types";
import allOrganisers from "../../utils/all_organisers.json";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";

const OrganiserForm = ({ organiserId }: { organiserId: string }) => {
  const [organiser, setOrganiser] = useState<OrganiserType>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganiserType>();

  const onSubmit = (data: OrganiserType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  const fetchOrganiser = () => {
    /* This will be a dynamic route with organiser id, organiser will be fetched here from organiser id */
    const fetchedOrganiser = allOrganisers.find(
      (organiser) => organiser.id === organiserId
    );
    setOrganiser(fetchedOrganiser);
  };

  useEffect(() => {
    if (organiserId) fetchOrganiser();
  }, [allOrganisers, organiserId]);

  const formItems = (
    <>
      <Input
        type="text"
        label="Name"
        placeholder="Organiser Name"
        name="name"
        register={register}
        errors={errors}
        rules={{ required: "Name is required" }}
        defaultValue={organiser?.name}
      />
      <div className="row-span-2">
        <Textarea
          label="Description"
          placeholder="Organiser Description"
          name="description"
          register={register}
          errors={errors}
          defaultValue={organiser?.description}
        />
      </div>
      <Input
        type="file"
        label={"Upload Image"}
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
        title={`${organiser ? "Edit" : "Create"} Organiser`}
        description={`${
          organiser ? "Edit details of a" : "Create a new"
        } organiser`}
        className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3"
        gridItems={formItems}
      >
        <div className="mt-10">
          <Button type="submit" variant="primary">
            {organiser ? "Edit " : "Create "}
            Organiser
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default OrganiserForm;
