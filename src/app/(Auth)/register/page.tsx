import Inputs from "@/components/Inputs";
import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <>
      <div>Register</div>
      <Inputs
        name="username"
        type="text"
        placeholder="Username"
        label="Username"
      />
      <Inputs
        name="password"
        type="password"
        placeholder="*******"
        label="Password"
      />
    </>
  );
};

export default Register;
