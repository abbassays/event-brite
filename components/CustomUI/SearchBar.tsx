import React, { InputHTMLAttributes, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  }
  
  const CustomSearchBar: React.FC<InputProps> = ({
    ...rest
  }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div
      className={`flex justify-end border rounded-lg overflow-hidden w-full max-w-xs
    ${focus && "outline-blue-500"}`}
    >
      <input
        className="p-2 w-full text-gray-500 font-medium leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...rest}
        onFocus={() => setFocus(true)}
      />
      <div className="text-blue-500 bg-white font-bold py-2 px-4">
        <FaSearch />
      </div>
    </div>
  );
};

export default CustomSearchBar;
