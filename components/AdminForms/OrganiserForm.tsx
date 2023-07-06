import { useState } from "react";
import { useForm } from "react-hook-form";

import { OrganiserType } from "../../types";
import { defaultCommission, defaultGST } from "../../utils/AppDefaults";

import Button from "../CustomUI/Button";
import Container from "../CustomUI/Container";
import ImagePreview from "../CustomUI/ImagePreview";
import Input from "../CustomUI/Input";
import Textarea from "../CustomUI/Textarea";
import Toggle from "../CustomUI/Toggle";

const OrganiserForm = ({ organiser }: { organiser?: OrganiserType }) => {
  const [uploadedImage, setUploadedImage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganiserType>({
    defaultValues: {
      ...organiser,
      commission: organiser?.commission || defaultCommission,
      GST: organiser?.GST || defaultGST,
    },
  });

  const onSubmit = (data: OrganiserType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  const formItems = (
    <>
      <div className="col-span-3">
        <Input
          type="text"
          label="Name"
          placeholder="Organiser Name"
          name="name"
          register={register}
          errors={errors}
          rules={{ required: "Name is required" }}
        />
      </div>
      <div className="col-span-3 sm:col-span-1 md:col-span-3 xl:col-span-1">
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
        />
      </div>
      <div className="col-span-3 sm:col-span-1 md:col-span-3 xl:col-span-1">
        <Input
          type="number"
          label="GST (%)"
          placeholder="General Sales Tax on Organiser"
          name="GST"
          register={register}
          errors={errors}
          rules={{
            min: { value: 0, message: "Commission cannot be negative" },
          }}
        />
      </div>
      <div className="col-span-3 sm:col-span-1 md:col-span-3 xl:col-span-1">
        <Toggle register={register} name="isEnabled" label="Enabled" />
      </div>

      <div className="md:h-auto col-span-3 md:row-span-5 order-last md:order-none sm:mb-6 relative">
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

      <div className="row-span-2 col-span-3">
        <Textarea
          label="Description"
          placeholder="Organiser Description"
          name="description"
          register={register}
          errors={errors}
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
        className="grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-3"
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
