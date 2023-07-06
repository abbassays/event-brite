import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { OrganiserType } from "../../types";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Textarea from "../UI/Textarea";
import ImagePreview from "../UI/ImagePreview";
import { defaultCommission } from "../../utils/AppDefaults";
import Toggle from "../UI/Toggle";

const OrganiserForm = ({ organiser }: { organiser?: OrganiserType }) => {
  const [uploadedImage, setUploadedImage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganiserType>({
    defaultValues: {
      ...organiser,
    },
  });

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
        name="name"
        register={register}
        errors={errors}
        rules={{ required: "Name is required" }}
        // defaultValue={organiser?.name}
      />
      <Input
        type="number"
        label="Commission (%)"
        placeholder="Organiser Commission"
        name="commission"
        register={register}
        errors={errors}
        rules={{
          required: "Commission is required",
          min: { value: 0, message: "Commission cannot be negative" },
        }}
        // defaultValue={defaultCommission}
      />

      <Toggle register={register} name="isEnabled" label="Enabled" />

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
          // defaultValue={organiser?.description}
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
        <Button className="mt-10" type="submit" variant="primary">
          {organiser ? "Save " : "Create "}
          Organiser
        </Button>
      </Container>
    </form>
  );
};

export default OrganiserForm;
