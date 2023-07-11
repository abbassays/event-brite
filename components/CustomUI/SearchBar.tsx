import React, { InputHTMLAttributes, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const CustomSearchBar: React.FC<InputProps> = ({ ...rest }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div
      className={`flex justify-between border rounded-md overflow-hidden w-[240px] shadow-sm text-xs lg:text-base lg:w-[300px]
    ${focus ? "border-blue-500" : "border-slate-200"}`}
    >
      <input
        className="p-2 w-full text-gray-500 font-medium leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className="text-blue-500 bg-white font-bold py-2 px-4">
        <FaSearch />
      </div>
    </div>
  );
};

export default CustomSearchBar;
