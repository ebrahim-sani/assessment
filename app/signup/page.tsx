import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SignUpForm } from "@/components/SignUpForm";

export const metadata: Metadata = {
   title: "Signup",
   description: "",
};

export default function page() {
   return (
      <main className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen">
         <div className="relative hidden h-screen flex-col bg-[url('/assets/cover-signup.jpeg')] bg-cover bg-right p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-[#42307D] opacity-70">
               <div className="flex flex-col items-center space-y-3 h-full w-full justify-center">
                  <div className="flex flex-col items-start space-y-3 max-w-[470px]">
                     <Image
                        src="/assets/stars.svg"
                        width={100}
                        height={100}
                        alt=""
                     />
                     <h2 className="text-5xl font-semibold text-white leading-tight">
                        Start turning your ideas into reality.
                     </h2>
                     <p className="text-sm text-white font-semibold leading-normal">
                        Create a free account and get full access to all
                        features for 30-days. No credit card need. Trusted by
                        over 4,000 prefessionals.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="lg:p-8 flex h-full justify-center">
            <div className="mx-a flex w-full flex-col justify-center h-full space-y-6 sm:space-y-10 sm:w-[320px]">
               <div className="flex flex-col space-y-2 text-start">
                  <h1 className="text-2xl font-semibold tracking-tight">
                     Signup
                  </h1>
               </div>
               <SignUpForm />
               <p className="px-8 text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                     href="/signin"
                     className="underline underline-offset-4 hover:text-primary"
                  >
                     Login
                  </Link>{" "}
               </p>
            </div>
         </div>
      </main>
   );
}
