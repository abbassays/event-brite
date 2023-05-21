import React from "react";

import { AiOutlineDoubleRight } from "react-icons/ai";

type WizardProps = {
  selected: string;
  setSelected: (selected: string) => void;
  wizardItems: string[];
};

const Wizard = ({ selected, setSelected, wizardItems }: WizardProps) => {
  return (
    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-basesm:p-4 sm:space-x-4">
      {wizardItems.map((item, index) => (
        <li
          className={`flex items-center cursor-pointer ${
            wizardItems.indexOf(selected) >= wizardItems.indexOf(item)
              ? "text-blue-600 border-blue-600"
              : "text-gray-500 border-gray-200"
          }`}
          key={item}
          onClick={() => setSelected(item)}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0
              ${
                wizardItems.indexOf(selected) >= wizardItems.indexOf(item)
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 border-gray-200"
              }`}
          >
            {index + 1}
          </span>
          {item}
          {wizardItems.length !== index + 1 && (
            <AiOutlineDoubleRight className="hidden sm:inline-flex ml-4 cursor-default" />
          )}
        </li>
      ))}
    </ol>
  );
};

export default Wizard;
