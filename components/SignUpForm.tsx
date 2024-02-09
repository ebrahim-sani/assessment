"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ImSpinner9 } from "react-icons/im";
import { Input } from "./ui/input";
import { toast } from "sonner";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: AuthFormProps) {
   const [isLoading, setIsLoading] = React.useState<boolean>(false);

   const signup = async (data: any): Promise<void> => {
      setIsLoading(true);

      const firstname = data.get("firstName");
      const lastname = data.get("lastName");
      const email = data.get("email");
      const password = data.get("password");

      if (!firstname || !lastname || !email || !password) {
         // throw new Error("Invalid form data");
         toast.error("Invalid form data!");
      }

      try {
         const response: Response = await fetch(
            "https://devapi.omacart.com/signup",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  firstname,
                  lastname,
                  email,
                  password,
               }),
            },
         );
         if (response.ok) {
            setIsLoading(false);
            const res = await response.json();
            toast.success("Account created successfully 👌");
            console.log(res);
         }
      } catch (error) {
         console.error(error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className={cn("grid gap-6", className)} {...props}>
         <form action={signup}>
            <div className="grid gap-5">
               <div className="grid gap-1">
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                     name="firstName"
                     placeholder="Enter your first name"
                     type="text"
                     autoCapitalize="none"
                     disabled={isLoading}
                  />
               </div>
               <div className="grid gap-1">
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                     name="lastName"
                     placeholder="Enter your last name"
                     type="text"
                     autoCapitalize="none"
                     disabled={isLoading}
                  />
               </div>
               <div className="grid gap-1">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                     name="email"
                     placeholder="Enter your email"
                     type="email"
                     autoCapitalize="none"
                     autoComplete="email"
                     autoCorrect="off"
                     disabled={isLoading}
                  />
               </div>
               <div className="grid gap-1">
                  <Label htmlFor="password">Password*</Label>
                  <Input
                     name="password"
                     type="password"
                     autoCapitalize="none"
                     disabled={isLoading}
                  />
               </div>

               <Button disabled={isLoading}>
                  {isLoading && (
                     <ImSpinner9 className="mr-2 h-3 w-3 animate-spin" />
                  )}
                  Get Started
               </Button>
            </div>
         </form>
      </div>
   );
}
