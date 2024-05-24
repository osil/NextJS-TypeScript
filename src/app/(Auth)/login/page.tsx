"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Inputs from "@/components/Inputs";

const FormSchema = z.object({
  email: z.string().email("กรุณากรอกอีเมล"),
  password: z
    .string()
    .min(6, "รหัสผ่าน 6 ตัวขึ้นไป")
    .max(20, "รหัสผ่านไม่เกิน 20 ตัว"),
});
type Props = {};
type FormSchemaType = z.infer<typeof FormSchema>;

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          name="email"
          type="text"
          placeholder="email"
          label="email"
          register={register}
          errorMessage={errors?.email?.message}
          disable={isSubmitting}
        />
        <Inputs
          name="password"
          type="password"
          placeholder="*******"
          label="Password"
          register={register}
          errorMessage={errors?.password?.message}
          disable={isSubmitting}
        />
        <Button
          type="submit"
          variant="outlined"
          color="blue"
          className="flex items-center gap-2 ml-5 mt-3"
        >
          <PlusCircleIcon className="h-4 w-4" />
          Button
        </Button>
      </form>
    </>
  );
};

export default Login;
