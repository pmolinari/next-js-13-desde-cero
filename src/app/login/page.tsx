import React from "react";
import AuthButton from "../../components/Button/AuthButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <AuthButton />
    </div>
  );
};

export default Login;
