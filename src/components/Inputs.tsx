//tsrstc
import { Input, Typography } from "@material-tailwind/react";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
interface IInputsProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  register: any;
  errorMessage: any;
  disable: any;
}

const Inputs: React.FunctionComponent<IInputsProps> = (props) => {
  const { name, label, type, placeholder, register, errorMessage, disable } =
    props;
  return (
    <div className="w-[32rem] m-5">
      <Input
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        error={errorMessage}
        {...register(name)}
      />
      {errorMessage && (
        <Typography
          variant="small"
          color="red"
          className="mt-2 flex items-center gap-1 font-normal"
        >
          <ExclamationCircleIcon className="h-3 w-3 text-red-500" />
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default Inputs;
