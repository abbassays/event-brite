import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import countryList from "../../utils/countryList";

import Container from "../UI/Container";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";

const BillingPaymentForm = ({
  setSelected,
}: {
  setSelected?: (selected: string) => void;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Replace this code with your code to submit form to backend */

    router.push("/checkout");
    /* Create Event on backend */
  };

  const billingForm = (
    <div className="">
      <div>
        <h1 className="text-2xl text-gray-500">Billing Info</h1>
      </div>
      <hr />
      <div className="grid mt-6">
        <Input
          type="text"
          label="Name"
          placeholder="Your Name"
          name="Name"
          register={register}
          errors={errors}
          rules={{ required: "Name is required" }}
        />

        <Input
          type="text"
          label="Username"
          placeholder="Your Username"
          name="Username"
          register={register}
          errors={errors}
          rules={{ required: "Username is required" }}
        />

        <Input
          type="text"
          label="Address"
          placeholder="Your Address"
          name="Address"
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
          name="State"
          register={register}
          errors={errors}
          rules={{ required: "State is required" }}
        />

        <Input
          type="text"
          label="Postal Code"
          placeholder="Your Postal Code"
          name="Postal Code"
          register={register}
          errors={errors}
          rules={{ required: "Postal Code is required" }}
        />
      </div>
    </div>
  );

  const paymentForm = (
    <div>
      <div>
        <h1 className="mt-10 md:mt-0 text-2xl text-gray-500">Payment Info</h1>
      </div>
      <hr />

      <div className="flex flex-col justify-between h-full">
        <div className="grid mt-6">
          <Input
            type="text"
            label="Credit Card Number"
            placeholder="Card Number (without dashes)"
            name="Card Number"
            register={register}
            errors={errors}
            rules={{
              required: "Credit Card Number is required",
              pattern: {
                value: /^[0-9]{16,19}$/,
                message: "Invalid Credit Card Number",
              },
            }}
          />

          <Input
            type="month"
            label="Expiration"
            placeholder="MM/YY"
            name="Expiration"
            register={register}
            errors={errors}
            rules={{ required: "Expiration is required" }}
          />

          <Input
            type="text"
            label="CVV"
            placeholder="123X"
            name="CVV"
            register={register}
            errors={errors}
            rules={{
              required: "CVV is required",
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: "Invalid CVV",
              },
            }}
          />
        </div>
        <div className="flex justify-end mb-14 space-x-6">
          <div>
            <Button
              onClick={() => {
                if (setSelected) {
                  setSelected("Your Cart");
                }
              }}
              type="button"
              variant="secondary"
            >
              Back
            </Button>
          </div>
          <div>
            <Button type="submit" variant="primary">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const forms = (
    <>
      {billingForm}
      {paymentForm}
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        title="Billing & Payment"
        gridItems={forms}
        className="md:grid-cols-2 rounded-lg bg-white p-10 gap-x-20"
      ></Container>
    </form>
  );
};

export default BillingPaymentForm;
