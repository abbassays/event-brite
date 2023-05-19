import React from "react";

import Container from "../UI/Container";

type Props = {};

const EventForm = (props: Props) => {
  return (
    <Container
      title="Create Event"
      description="Create a new event"
      className="grid grid-cols-1 md:grid-cols-2"
    ></Container>
  );
};

export default EventForm;
