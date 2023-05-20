import Link from "next/link";
import React, { useState } from "react";

import { MdChevronRight } from "react-icons/md";

const AdminDropDown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);

  const createItems = [
    {
      name: "Event",
      link: "/admin/create-event",
    },
    {
      name: "Organiser",
      link: "/admin/create-organiser",
    },
    {
      name: "Ticket",
      link: "/admin/create-ticket",
    },
  ];

  return (
    <>
      {/* For large screens */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="px-6 py-2 text-lg text-blue-500 hover:text-blue-700 transition-colors cursor-pointer relative h-full lg:flex items-center hidden"
      >
        <p>Create</p>
        <MdChevronRight
          className={`inline-block ml-1 transform rotate-90 transition-transform duration-300`}
        />
        <div
          onMouseEnter={() => setOpenList(true)}
          onMouseLeave={() => setOpenList(false)}
          className={`${
            open || openList ? "absolute" : "hidden"
          } bg-white right-6 top-[64px] border-t rounded-b-lg z-20 flex flex-col px-2 pt-2 pb-3`}
        >
          {createItems.map((item, index) => (
            <p
              className="w-full px-3 pr-10 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-blue-100"
              key={index}
            >
              <Link href={item.link}>{item.name}</Link>
            </p>
          ))}
        </div>
      </div>
      {/* For small screens */}
      <div className=" border-t lg:hidden">
        {createItems.map((item, index) => (
          <p
            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            key={index}
          >
            <Link href={item.link}>Create {item.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default AdminDropDown;
