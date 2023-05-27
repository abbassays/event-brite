import React from "react";
import Image from "next/image";

import { UserType } from "../../types";

import ComponentContainer from "./ComponentContainer";

type Props = {};

const Profile = ({ name, email, phone, avatar }: UserType) => {
  return (
    <ComponentContainer title="User Profile">
      <div className="flex flex-col sm:flex-row sm:space-x-5 lg:space-x-10 sm:space-y-0 space-y-5 items-center sm:items-start">
        <div className="relative h-40 aspect-square">
          <Image fill className="object-contain" alt={name} src={avatar} />
        </div>
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-xl">{email}</p>
          <p className="text-xl">{phone}</p>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default Profile;
