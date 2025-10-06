import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout: React.FC<Readonly<{ children: React.ReactNode }>> = async ({
  children,
}) => {
  // const session = await auth.api.getSession({
  //   headers: await headers(), // you need to pass the headers object.
  // });
  // //   redirect immediately when the user is logged from the server
  // if (session) {
  //   redirect("/");
  // }
  return <>{children}</>;
};

export default AuthLayout;
