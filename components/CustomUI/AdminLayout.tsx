import React, { ReactNode, useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import DashboardSidebar from "./DashboardSidebar";
import { useCustomSession } from "@/context/customSession";

type Props = {
  children?: ReactNode;
  title?: string;
};

const staffSideBar = [
  {
    name: "Dashboard",
    route: "/admin",
  },
  {
    name: "Event",
    route: "/dashboard/events",
  },
  {
    name: "Ticket",
    route: "/dashboard/tickets",
  },
];

const adminSideBarItems = [
  ...staffSideBar,
  {
    name: "Organiser",
    route: "/dashboard/organisers",
  },
  {
    name: "Staff Members",
    route: "/dashboard/staff",
  },
];

const organiserSideBar = [
  ...staffSideBar,
  {
    name: "Staff Members",
    route: "/dashboard/staff",
  },
];

const AdminLayout = ({
  children,
  title = "This is the default title",
}: Props) => {
  const { customSession } = useCustomSession();

  return (
    <div>
      <Head>
        <title>{"Website | " + title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="flex justify-start">
        <DashboardSidebar
          items={
            customSession?.role === "ADMIN"
              ? adminSideBarItems
              : customSession?.role === "ORGANISER"
              ? organiserSideBar
              : staffSideBar
          }
        />
        <div className="min-h-screen w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
