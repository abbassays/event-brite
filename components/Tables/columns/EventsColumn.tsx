import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { MdEdit, MdDelete, MdLocationPin } from "react-icons/md";

import Button from "@/components/CustomUI/Button";
import { EventType } from "@/types";
import { getOrganiserById } from "@/utils/json-database";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const eventsColumn: ColumnDef<EventType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "startDate",
    header: "Starts on",
    cell: ({ row }) => {
      const dateString: string = row.getValue("startDate");
      const dateObj = new Date(dateString);

      return <div>{dateObj.toDateString()}</div>;
    },
  },
  {
    accessorKey: "endDate",
    header: "Ends on",
    cell: ({ row }) => {
      const dateString: string = row.getValue("endDate");
      const dateObj = new Date(dateString);

      return <div>{dateObj.toDateString()}</div>;
    },
  },
  {
    accessorKey: "organiserId",
    header: "Organiser",
    cell: ({ row }) => {
      const organiserId: string = row.getValue("organiserId");
      const organiser = getOrganiserById(organiserId);
      return <div>{organiser.name}</div>;
    },
  },
  {
    accessorKey: "checkedInCount",
    header: "Checked In",
  },
  {
    accessorKey: "id",
    header: "Actions",
    cell: ({ row }) => {
      const id: string = row.getValue("id");
      return (
        <div className="w-full md:w-fit flex space-x-2 p-1 bg-zinc-100 shadow-md rounded-md">
          <p className="text-xl text-green-500 hover:bg-green-500 p-1 rounded hover:text-white cursor-pointer transition-colors w-full">
            <Link href={`/admin/events/${id}/check-in`}>
              <MdLocationPin className="mx-auto" />
            </Link>
          </p>
          <p className="text-xl text-blue-500 hover:bg-blue-500 p-1 rounded hover:text-white cursor-pointer transition-colors w-full">
            <Link href={`/admin/events/${id}`}>
              <MdEdit className="mx-auto" />
            </Link>
          </p>
          <p
            className="text-xl text-red-500 hover:bg-red-500 p-1 rounded hover:text-white cursor-pointer transition-colors w-full"
            //  onClick={openModal}
          >
            <MdDelete className="mx-auto" />
          </p>
        </div>
      );
    },
  },
];
