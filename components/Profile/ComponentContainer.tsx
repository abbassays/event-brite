import React from "react";
import Container from "../CustomUI/Container";

type Props = {};

const ComponentContainer = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Container>
      <div>
        <h1 className="text-2xl text-gray-500">{title}</h1>
      </div>
      <hr className="mb-6" />
      <div className="p-2 md:p-6 lg:p-8 rounded sm:rounded-lg lg:rounded-xl bg-gray-100 shadow">
        {children}
      </div>
    </Container>
  );
};

export default ComponentContainer;
