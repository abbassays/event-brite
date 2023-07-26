import { useForm } from "react-hook-form";

import { PaymentConfigType } from "@/types";

import Button from "../CustomUI/Button";
import Input from "../CustomUI/Input";
import ComponentContainer from "./ComponentContainer";

const PaymentConfigForm = ({GST,commission}: PaymentConfigType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentConfigType>({
    defaultValues: {
      GST,
      commission,
    },
  });

  const onSubmit = (data: PaymentConfigType) => {
    console.log("data", data);
  };

  return (
    <ComponentContainer title="Default Payment Configurations">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Commission (%)"
            placeholder="Default Commission"
            name="commission"
            register={register}
            errors={errors}
            rules={{ required: "Commission is required" }}
          />
          <Input
            type="text"
            label="GST (%)"
            placeholder="Default GST"
            name="GST"
            register={register}
            errors={errors}
            rules={{ required: "GST is required" }}
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
