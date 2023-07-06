import React, { useState, useEffect } from "react";
import { UseFormRegister } from "react-hook-form";

type ToggleProps = {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: Record<string, any>;
  defaultChecked: boolean;
};

const Toggle = ({
  name,
  register,
  rules,
  label,
  defaultChecked,
  ...rest
}: ToggleProps) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (defaultChecked !== undefined) setEnabled(defaultChecked);
  }, [defaultChecked]);

  return (
    <div className="flex items-center gap-4">
      <label className="block mb-1 font-medium text-gray-900">
        {label}
        {rules?.required && <span className="text-red-400"> *</span>}
      </label>
      <label className="inline-flex relative items-center mr-5 cursor-pointer">
        <input
          {...register(name, rules)}
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={() => {
            setEnabled(!enabled);
          }}
          className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  
          peer-checked:after:translate-x-full peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white 
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
          peer-checked:bg-blue-500"
        ></div>
      </label>
    </div>
  );
};

export default Toggle;
