import Account from "@/components/Account/Account";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Account page="sign-in" />
    </div>
  );
};

export default page;
