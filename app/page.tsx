import SignOut from "@/components/SignOut/SignOut";
import React from "react";

const page = () => {
  return (
    <div className=" flex justify-center items-center h-screen flex-col gap-2">
      <h1 className="text-[50px] bg-gradient-to-r from-gray-600 via-white to-gray-600 bg-clip-text text-transparent font-bold">
        Better-auth starter template
      </h1>
      <p className="text-gray-500">
        This is a template for building better authentication flows.
      </p>
      <SignOut />
    </div>
  );
};

export default page;
