"use client";
import React from "react";
import Input from "../Input/Input";
import { useInput } from "@/hooks/inputHook";
import Link from "next/link";
interface AccountProps {
  page?: "sign-in" | "sign-up";
}

const Account = ({ page }: AccountProps) => {
  const email = useInput("");
  const password = useInput("");
  const username = useInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (page === "sign-in") {
      // Handle sign-in logic here
      console.log("Signing in with:", {
        email: email.value,
        password: password.value,
      });
    } else {
      // Handle sign-up logic here
      console.log("Signing up with:", {
        username: username.value,
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <div className="max-w-md w-full mx-auto py-10 px-10 border border-gray-300/10 bg-white/5 rounded-md shadow-md">
      <h2 className="text-[30px] font-bold mb-10 text-white/70 text-center">
        {page === "sign-in" ? "Sign In" : "Sign Up"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        autoComplete="off"
      >
        {page === "sign-up" && (
          <Input
            label="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            {...username}
          />
        )}
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          {...email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          {...password}
        />
        <button className="bg-purple-500/20 hover:bg-purple-800/30 text-white rounded-md p-2 cursor-pointer mt-4">
          {page === "sign-in" ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <div className="mt-4 text-sm text-white/50 text-center">
        {page === "sign-in" ? (
          <p>
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-purple-500 cursor-pointer">
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-purple-500 cursor-pointer">
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Account;
