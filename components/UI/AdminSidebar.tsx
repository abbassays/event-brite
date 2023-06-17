import React from "react";
import { useRouter } from "next/router";

import SidebarIcon from "../../utils/SidebarIcon";

type SideBarProps = {
  items: {
    name: string;
    route: string;
  }[];
};

const AdminSidebar = ({ items }: SideBarProps) => {
  const router = useRouter();
  return (
    <div
      id="default-sidebar"
      className="z-40 w-fit sm:w-64 transition-transform flex"
      aria-label="Sidebar"
    >
      <div className="h-full py-4 overflow-y-auto bg-slate-200 w-full">
        <ul className="space-y-2 font-medium">
          {items.map((item) => (
            <li onClick={() => router.push(item.route)} key={item.name}>
              <div
                className={`flex items-center transition-all duration-500 p-2 hover:bg-gray-100 hover:cursor-pointer px-3
                    ${
                      router.pathname === item.route
                        ? "bg-slate-100 text-blue-500"
                        : "text-gray-600"
                    }`}
              >
                <p className="text-xl sm:text-base">
                  <SidebarIcon item={item.name} />
                </p>
                <span className="ml-3 sm:block hidden">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
