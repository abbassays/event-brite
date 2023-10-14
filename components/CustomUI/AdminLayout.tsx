import React, { ReactNode, useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import DashboardSidebar from "./DashboardSidebar";
import { useCustomSession } from "@/context/customSession";
import { getDashboardSidebarItems } from "@/utils/GetListItems";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AdminLayout = ({
  children,
  title = "This is the default title",
}: Props) => {
  const { customSession } = useCustomSession();

  return (
    <div>
      <Head>
        <title>{"Events | " + title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="flex justify-start">
        <DashboardSidebar
          items={getDashboardSidebarItems(customSession?.role)}
        />
        <div className="w-full min-h-screen ">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
