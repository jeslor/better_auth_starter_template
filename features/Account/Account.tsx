"use client";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { useInput } from "@/hooks/inputHook";
import { useRouter } from "next/navigation";
import Link from "next/link";
import authClient from "@/lib/auth-client";

interface AccountProps {
  page?: "sign-in" | "sign-up";
}

const Account: React.FC<AccountProps> = ({ page }) => {
  const Router = useRouter();
  const email = useInput("");
  const password = useInput("");
  const username = useInput("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (page === "sign-in") {
        const { data, error } = await authClient.signIn.email(
          {
            email: email.value,
            password: password.value,
          },
          {
            onRequest: (ctx) => {
              setIsLoading(true);
              //show loading
            },
            onSuccess: (ctx) => {
              Router.push("/");
              //redirect to the dashboard or sign in page
            },
            onError: (ctx) => {
              // display the error message
              alert(ctx.error.message);
            },
          }
        );
        if (error) console.error("Error during sign-in:", error);
        else console.log("Signed in:", data);
      } else {
        const { data, error } = await authClient.signUp.email(
          {
            email: email.value,
            password: password.value,
            name: username.value,
          },
          {
            onRequest: (ctx) => {
              setIsLoading(true);
              //show loading
            },
            onSuccess: (ctx) => {
              Router.push("/");
              //redirect to the dashboard or sign in page
            },
            onError: (ctx) => {
              // display the error message
              alert(ctx.error.message);
            },
          }
        );
        if (error) console.error("Error during sign-up:", error);
        else console.log("Sign-up successful:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setIsLoading(false);
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
        <button className="bg-purple-500/20 hover:bg-purple-800/30 text-white rounded-md p-2 cursor-pointer mt-4 flex items-center justify-center">
          {page === "sign-in" ? "Sign In" : "Sign Up"}
          {isLoading && (
            <span className="ml-2 h-[20px] w-[20px] animate-spin rounded-full border-2 border-purple-500 border-t-transparent"></span>
          )}
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
