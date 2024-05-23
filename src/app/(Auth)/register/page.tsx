"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@material-tailwind/react";

import Inputs from "@/components/Inputs";

const FormSchema = z
  .object({
    fullname: z.string().min(2, "กรุณาระบุชื่อผู้ใช้"),
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
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          name="fullname"
          type="text"
          placeholder="fullname"
          label="fullname"
          register={register}
          errorMessage={errors?.fullname?.message}
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
          type="password"
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
        <Button type="submit" variant="outlined" color="blue" className="m-5">
          Button
        </Button>
      </form>
    </>
  );
};

export default Register;
