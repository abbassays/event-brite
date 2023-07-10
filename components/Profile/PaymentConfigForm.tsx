import { ProfileType } from "@/types";
import React from "react";
import Input from "../CustomUI/Input";
import ComponentContainer from "./ComponentContainer";
import { useForm } from "react-hook-form";
import Button from "../CustomUI/Button";

type Props = {};

const PaymentConfigForm = ({ user }: { user: ProfileType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      ...user,
    },
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <ComponentContainer title="User Profile">
      <div className="grid sm:grid-cols-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:col-span-2 order-2 sm:order-1"
        >
          <Input
            type="text"
            label="Stripe API Key"
            placeholder="Your Stripe API Key"
            name="stripeKey"
            register={register}
            errors={errors}
            rules={{ required: "Stripe API Key is required" }}
          />
          <Button type="submit" variant="primary" className="mt-6">
            Save
          </Button>
        </form>
      </div>
    </ComponentContainer>
  );
};

export default PaymentConfigForm;
