import React from "react";
import SignupForm from "../../components/forms/SignupForm";
import Header from "../../components/commen/Header";

const Signup = () => {
  return (
    <>
    <div className="container-fluid">
    <div>
        <Header />
      </div>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-xl">Signup</h1>
        <SignupForm />
      </div>
    </div>
    </>
  );
};

export default Signup;
