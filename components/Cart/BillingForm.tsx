import React from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";

import countryList from "../../utils/countryList";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BillingAddressType } from "../../types";

type BillingFormProps = {
  isUser?: boolean;
  register: any;
  errors: any;
};

const BillingForm = ({
  isUser = false,
  register,
  errors,
}: BillingFormProps) => {
  return (
    <div className="">
      <div className="grid">
        {!isUser && (
          <>
            <Input
              type="text"
              label="Name"
              placeholder="Your Name"
              name="name"
              register={register}
              errors={errors}
              rules={{ required: "Name is required" }}
            />

            <Input
              type="text"
              label="Username"
              placeholder="Your Username"
              name="username"
              register={register}
              errors={errors}
              rules={{ required: "Username is required" }}
            />
          </>
        )}

        <Input
          type="text"
          label="Address"
          placeholder="Your Address"
          name="address"
          register={register}
          errors={errors}
          rules={{ required: "Address is required" }}
        />

        <Select
          label="Country"
          name="country"
          register={register}
          errors={errors}
          rules={{ required: "Country is required" }}
          placeholder="Select an option"
          size={1}
          options={countryList.map((country) => ({
            id: country,
            name: country,
          }))}
        />

        <Input
          type="text"
          label="State"
          placeholder="Your State"
          name="state"
          register={register}
          errors={errors}
          rules={{ required: "State is required" }}
        />

        <Input
          type="text"
          label="Postal Code"
          placeholder="Your Postal Code"
          name="postalCode"
          register={register}
          errors={errors}
          rules={{ required: "Postal Code is required" }}
        />
      </div>
    </div>
  );
};

export default BillingForm;
