import { useForm } from "react-hook-form";

import { BillingAddressType, ProfileType } from "@/types";

import BillingForm from "../Cart/BillingForm";
import Button from "../CustomUI/Button";
import ComponentContainer from "./ComponentContainer";

// fetch billing address from user id if needed
const BillingAddress = ({ user }: { user: ProfileType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingAddressType>({
    defaultValues: {
      ...user,
    },
  });

  const handleBillingAddress = (data: BillingAddressType) => {
    console.log("data", data);
  };

  return (
    <ComponentContainer title="Change Billing Address">
      <form onSubmit={handleSubmit(handleBillingAddress)}>
        <BillingForm register={register} errors={errors} userId={user.id} />

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
