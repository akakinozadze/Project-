import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "../components/SignInForm";
const SignIn = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>sign in</h1>
      {state?.succses && (
        <h2 style={{ color: "green" }}>
          Congratulations successfully register
        </h2>
      )}
      <SignInForm />
    </div>
  );
};

export default SignIn;
