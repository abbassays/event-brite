import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { OrganiserType } from "../../types";
import allOrganisers from "../../utils/all_organisers.json";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";
import ImagePreview from "../UI/ImagePreview";

/* 
  in my react typescript app there is a container component that maps some cards, each card is a component, inside each card there is a delete modal, 
  when a delete button on a card is clicked, the modal of the card opens asking for confirmation, the problem is that there are many modals.
  I want to remodel this in a way that there is one single modal inside the container componenent, and when delete button is pressed on a card, the modal opens and it gets card's id via which it deletes a specific card.
  how can this be done?
 */

const OrganiserForm = ({ organiserId }: { organiserId?: string }) => {
  const [organiser, setOrganiser] = useState<OrganiserType>();
  const [uploadedImage, setUploadedImage] = useState<string>();
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
      <div className="md:h-auto md:row-span-5 order-last md:order-none sm:mb-6 relative">
        <label className="block mb-1 font-medium text-gray-900">
          Organiser Image
        </label>
        <div className="bg-white border rounded-lg overflow-hidden p-2">
          <ImagePreview
            name="image"
            link={organiser?.image}
            register={register}
            errors={errors}
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
        </div>
      </div>

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
