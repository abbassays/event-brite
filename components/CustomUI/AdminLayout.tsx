import React, { ReactNode, useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import DashboardSidebar from "./DashboardSidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const adminSideBarItems = [
  {
    name: "Dashboard",
    route: "/admin",
  },
  {
    name: "Event",
    route: "/admin/events",
  },
  {
    name: "Ticket",
    route: "/admin/tickets",
  },
  {
    name: "Organiser",
    route: "/admin/organisers",
  },
  {
    name: "Staff Members",
    route: "/dashboard/staff",
  },
];

const AdminLayout = ({
  children,
  title = "This is the default title",
}: Props) => {
  return (
    <div>
      <Head>
        <title>{"Website | " + title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="flex justify-start">
        <DashboardSidebar items={adminSideBarItems} />
        <div className="min-h-screen w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
