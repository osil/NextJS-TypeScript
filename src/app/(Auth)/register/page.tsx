"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import Inputs from "@/components/Inputs";

const FormSchema = z
  .object({
    name: z.string().min(2, "กรุณาระบุชื่อผู้ใช้"),
    email: z.string().email("กรุณากรอกอีเมล"),
    password: z
      .string()
      .min(6, "รหัสผ่าน 6 ตัวขึ้นไป")
      .max(20, "รหัสผ่านไม่เกิน 20 ตัว"),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );
type FormSchemaType = z.infer<typeof FormSchema>;

type Props = {};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => console.log(data);

  return (
    <div>
      <div>Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          name="name"
          type="text"
          placeholder="fullname"
          label="name"
          register={register}
          errorMessage={errors?.name?.message}
          disable={isSubmitting}
        />
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
          type="text"
          placeholder="*******"
          label="Password"
          register={register}
          errorMessage={errors?.password?.message}
          disable={isSubmitting}
        />
        <Inputs
          name="confirmPassword"
          type="password"
          placeholder="*******"
          label="Confirm Password"
          register={register}
          errorMessage={errors?.confirmPassword?.message}
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
    </div>
  );
};

export default Register;
