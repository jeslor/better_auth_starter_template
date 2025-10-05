"use client";
import authClient from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut = () => {
  const Router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          Router.push("/sign-in"); // redirect to login page
        },
      },
    });
  };
  return session ? (
    <button
      onClick={handleSignOut}
      className="bg-purple-500/20 hover:bg-purple-800/30 text-white rounded-md p-2 cursor-pointer mt-4 flex items-center justify-center"
    >
      Sign out
    </button>
  ) : null;
};

export default SignOut;
