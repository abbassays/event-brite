import React from "react";
import { useForm } from "react-hook-form";

import { ContactUs } from "../../types";

import Input from "../CustomUI/Input";
import Textarea from "../CustomUI/Textarea";
import Button from "../CustomUI/Button";

/* 
  in my react typescript app there is a container component that maps some cards, each card is a component, inside each card there is a delete modal, 
  when a delete button on a card is clicked, the modal of the card opens asking for confirmation, the problem is that there are many modals.
  I want to remodel this in a way that there is one single modal inside the container componenent, and when delete button is pressed on a card, the modal opens and it gets card's id via which it deletes a specific card.
  how can this be done?
 */

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUs>();

  const onSubmit = (data: ContactUs) => {
    console.log("Submitting data", data, "\nErrors are", errors);
    /* Create Event on backend */
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        label="Email"
        placeholder="Your Email"
        name="email"
        register={register}
        errors={errors}
        rules={{
          required: "Name is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <div className="row-span-2">
        <Textarea
          label="Message"
          placeholder="Your Message"
          name="message"
          register={register}
          errors={errors}
          rules={{ required: "Message is required" }}
        />
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
