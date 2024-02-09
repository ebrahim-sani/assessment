import { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "@/components/SignInForm";

export const metadata: Metadata = {
   title: "Signin",
   description: "",
};

export default function page() {
   return (
      <>
         <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen">
            <div className="lg:p-8 flex h-full justify-center">
               <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:space-y-10 sm:w-[320px]">
                  <div className="flex flex-col space-y-2 text-center">
                     <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome back
                     </h1>
                     <p className="text-sm text-muted-foreground">
                        Welcome back! Please enter your details.
                     </p>
                  </div>
                  <SignInForm />
                  <p className="px-8 text-center text-sm text-muted-foreground">
                     Don't have account?{" "}
                     <Link
                        href="/signup"
                        className="underline underline-offset-4 hover:text-primary"
                     >
                        Signup
                     </Link>{" "}
                  </p>
               </div>
            </div>
            <div className="relative hidden h-screen flex-col bg-[url('/assets/cover-signin.jpeg')] bg-cover p-10 text-white lg:flex dark:border-r"></div>
         </div>
      </>
   );
}
