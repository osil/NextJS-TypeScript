import * as React from "react";

interface IInputsProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

const Inputs: React.FunctionComponent<IInputsProps> = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="max-w-sm m-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="py-3 px-4 block w-full border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder={placeholder}
        aria-describedby="hs-input-helper-text"
      />
    </div>
  );
};

export default Inputs;
