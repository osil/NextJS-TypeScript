"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
          error={errors?.fullname?.message}
          disable={isSubmitting}
        />
        <Inputs
          name="email"
          type="text"
          placeholder="email"
          label="email"
          register={register}
          error={errors?.email?.message}
          disable={isSubmitting}
        />
        <Inputs
          name="password"
          type="password"
          placeholder="*******"
          label="Password"
          register={register}
          error={errors?.password?.message}
          disable={isSubmitting}
        />
        <Inputs
          name="confirmPassword"
          type="password"
          placeholder="*******"
          label="Confirm Password"
          register={register}
          error={errors?.confirmPassword?.message}
          disable={isSubmitting}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
