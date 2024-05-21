import Inputs from "@/components/Inputs";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div>Login</div>
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

export default Login;
