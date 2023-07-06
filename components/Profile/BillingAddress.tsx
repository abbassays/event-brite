import React from "react";
import { useForm } from "react-hook-form";

import { BillingAddressType } from "../../types";

import Button from "../CustomUI/Button";
import Container from "../CustomUI/Container";
import BillingForm from "../Cart/BillingForm";
import ComponentContainer from "./ComponentContainer";

// fetch billing address from user id if needed
const BillingAddress = ({ userId }: { userId: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingAddressType>();

  const handleBillingAddress = (data: any) => {
    console.log("Change Password", data);
  };

  return (
    <ComponentContainer title="Change Billing Address">
      <form onSubmit={handleSubmit(handleBillingAddress)}>
        <BillingForm register={register} errors={errors} userId={userId} />

        <div className="mt-6 ">
          <Button type="submit" variant="primary">
            Change Address
          </Button>
        </div>
      </form>
    </ComponentContainer>
  );
};

export default BillingAddress;
