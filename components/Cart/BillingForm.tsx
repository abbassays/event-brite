import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";

import allUsers from "../../utils/all_users.json";
import countryList from "../../utils/countryList";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BillingAddressType, UserType } from "../../types";
type ProfileType = BillingAddressType & UserType;

type BillingFormProps = {
  userId?: string;
  register: any;
  errors: any;
};

const BillingForm = ({ userId, register, errors }: BillingFormProps) => {
  const [user, setUser] = useState<ProfileType>();

  const fetchUser = () => {
    /* function to fetch user details */
    const user = allUsers.find((user) => user.id === userId);
    setUser(user);
  };

  useEffect(() => {
    if (userId) fetchUser();
  }, [allUsers, userId]);

  return (
    <div className="">
      <div className="grid">
        {!userId && (
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
          defaultValue={user?.address}
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
            selected: country === user?.country,
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
          defaultValue={user?.state}
        />

        <Input
          type="text"
          label="Postal Code"
          placeholder="Your Postal Code"
          name="postalCode"
          register={register}
          errors={errors}
          rules={{ required: "Postal Code is required" }}
          defaultValue={user?.postalCode}
        />
      </div>
    </div>
  );
};

export default BillingForm;
