import React from "react";

import SidebarIcon from "@/utils/SidebarIcon";

type SideBarProps = {
  items: string[];
  selected: string;
  setselected: (value: string) => void;
};

const SettingsSidebar = ({ items, selected, setselected }: SideBarProps) => {
  return (
    <div
      id="default-sidebar"
      className="w-fit sm:w-64 transition-transform h-screen"
      aria-label="Sidebar"
    >
      <div className="h-full py-4 overflow-y-auto bg-slate-200">
        <ul className="space-y-2 font-medium">
          {items.map((item) => (
            <li onClick={() => setselected(item)} key={item}>
              <div
                className={`flex items-center transition-all duration-500 p-2 hover:bg-gray-100 hover:cursor-pointer px-3
                    ${
                      selected === item
                        ? "bg-slate-100 text-blue-500"
                        : "text-gray-600"
                    }`}
              >
                <p className="text-xl sm:text-base">
                  <SidebarIcon item={item} />
                </p>
                <span className="ml-3 sm:block hidden">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingsSidebar;
