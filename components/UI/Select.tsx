import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  register: any;
  errors: any;
  options: {
    id: string;
    name: string;
  }[]; // Array of options
  rules?: Record<string, any>;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  register,
  errors,
  options,
  rules,
  ...rest
}) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-900">{label}</label>
      <select
        {...register(name, rules)}
        className={`
          bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:border-0 file:border-solid file:border-inherit file:bg-blue-600 file:px-3 file:py-[0.32rem] file:duration-150 
          file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-700 hover:file:cursor-pointer file:text-white file:transition file:text-base
        `}
        {...rest}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="h-6">
        {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
      </div>
    </div>
  );
};

export default Select;
