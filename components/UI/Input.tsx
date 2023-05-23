import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: any;
  errors: any;
  isFile?: boolean;
  rules?: Record<string, any>;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  errors,
  isFile,
  rules,
  ...rest
}) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-900">
        {label}
        {rules?.required && <span className="text-red-400"> *</span>}
      </label>
      <input
        {...register(name, rules)}
        className={`
        ${!isFile ? `` : `py-0 file:py-3.5`}
        ${errors[name] ? `border-red-500` : `border-gray-300`}
      bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:border-0 file:border-solid file:border-inherit file:bg-blue-600 file:px-3 file:duration-150 
          file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-700 hover:file:cursor-pointer file:text-white file:transition file:text-base
      `}
        {...rest}
      />
      <div className="h-6">
        {errors[name] && (
          <p className="text-red-500">{errors[name]?.message}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
