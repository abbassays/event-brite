import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { StaffMemberType } from "../../types";

import Button from "../CustomUI/Button";
import Container from "../CustomUI/Container";
import ImagePreview from "../CustomUI/ImagePreview";
import Input from "../CustomUI/Input";
import Textarea from "../CustomUI/Textarea";

const StaffForm = ({ staff }: { staff?: StaffMemberType }) => {
  const [uploadedImage, setUploadedImage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StaffMemberType>({
    defaultValues: {
      ...staff,
    },
  });

  const onSubmit = (data: StaffMemberType) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  const formItems = (
    <>
      <Input
        type="text"
        label="Name"
        placeholder="Staff Member Name"
        name="name"
        register={register}
        errors={errors}
        rules={{ required: "Name is required" }}
      />
      <Input
        type="text"
        label="Email"
        placeholder="Staff Member Email"
        name="email"
        register={register}
        errors={errors}
        rules={{ required: "Email is required" }}
      />

      <div className="md:h-auto md:row-span-5 order-last md:order-none sm:mb-6 relative">
        <label className="block mb-1 font-medium text-gray-900">
          Staff Member Image
        </label>
        <div className="bg-white border rounded-lg overflow-hidden p-2">
          <ImagePreview
            name="image"
            link={staff?.image}
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
          placeholder="Staff Member Description"
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
        title={`${staff ? "Edit" : "Create"} Staff Member`}
        description={`${staff ? "Edit details of a" : "Create a new"} staff`}
        className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3"
        gridItems={formItems}
      >
        <div className="mt-10 flex gap-4">
          <Link href={"/dashboard/staff"}>
            <Button type="button" variant="danger">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary">
            {staff ? "Save" : "Create"}
          </Button>
        </div>
      </Container>
    </form>
  );
};

export default StaffForm;
