import React from "react";
import { MdChevronRight } from "react-icons/md";

import AdminIcon from "../../utils/AdminIcon";
import Link from "next/link";

interface CountCardProps {
  type: "Event" | "Ticket" | "Organiser";
  count: number;
}

const CountCard = ({ type, count }: CountCardProps) => {
  return (
    <div className="flex flex-col justify-between p-4 md:p-8 rounded-lg bg-white sm:w-full max-w-sm shadow-md">
      <div className="flex justify-between">
        <div className=" p-2.5 lg:p-4 rounded-full lg:text-5xl text-4xl bg-slate-200 w-fit text-blue-600">
          <AdminIcon item={type} />
        </div>
        <Link href={`/dashboard/${type.toLowerCase()}s`}>
          <div className="flex justify-end text-blue-500 h-fit items-center hover:underline cursor-pointer font-semibold text-right">
            See More
            <MdChevronRight className="text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-6 lg:mt-10">
        <h1 className="font-bold lg:text-5xl text-4xl text-blue-900">
          {count}
        </h1>
        <p className="text-2xl text-gray-500">Total {type}s</p>
      </div>
    </div>
  );
};

export default CountCard;
