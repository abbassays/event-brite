import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

import { StaffMemberType } from "../../types";
import { useCustomSession } from "@/context/customSession";

interface StaffCardProps extends StaffMemberType {
  setSelectedId?: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const StaffCard = ({
  id,
  image,
  organisations,
  name,
  setSelectedId,
  setIsOpen,
}: StaffCardProps) => {
  const { customSession } = useCustomSession();

  const openModal = () => {
    setIsOpen(true);
    setSelectedId(id);
    console.log("Opening modal for: ", id, name);
  };

  return (
    <div className="flex space-x-3 md:space-x-10 items-center rounded md:rounded-xl bg-white my-2 pr-2 md:pr-6 md:px-6 py-2 shadow">
      <div className="relative h-16 aspect-square hidden md:block">
        <Image
          src={image}
          alt={id}
          fill
          className="object-cover z-10"
          sizes="99vw"
        />
      </div>

      <div className="flex justify-between items-center w-full md:flex-row flex-col">
        <div className="flex flex-col">
          <p className="text-xl font-medium">{name}</p>
          <div className="flex gap-2 text-sm items-center">
            <p className="text-gray-700 text-base">Organisations:</p>
            {organisations
              ?.filter((org) =>
                customSession.role === "ORGANISER"
                  ? customSession.user.id === org.id
                  : true
              )
              .map((org, index) => (
                <p
                  className="text-gray-700 bg-gray-200 rounded-lg px-2 py-1"
                  key={index}
                >
                  {org?.name}
                </p>
              ))}
          </div>
        </div>

        <div className="w-full md:w-fit flex space-x-2">
          <p className="text-xl md:text-blue-500 md:hover:bg-blue-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-blue-500 w-full text-white py-1 hover:bg-blue-600">
            <Link href={`/dashboard/staff/${id}`}>
              <MdEdit className="mx-auto" />
            </Link>
          </p>
          <p
            onClick={openModal}
            className="text-xl md:text-red-500 md:hover:bg-red-500 md:p-1 md:bg-transparent rounded md:hover:text-white cursor-pointer transition-colors bg-red-500 w-full text-white py-1 hover:bg-red-600"
          >
            <MdDelete className="mx-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
