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
    <div className=" m-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          className="block w-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
