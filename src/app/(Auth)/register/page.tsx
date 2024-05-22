"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Inputs from "@/components/Inputs";

const FormSchema = z.object({
  username: z.string().min(2, "กรุณาระบุชื่อผู้ใช้"),
  password: z
    .string()
    .min(6, "รหัสผ่าน 6 ตัวขึ้นไป")
    .max(20, "รหัสผ่านไม่เกิน 20 ตัว"),
});
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
  console.log(errors);

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          name="username"
          type="text"
          placeholder="Username"
          label="Username"
          register={register}
          error={errors?.username?.message}
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
        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
