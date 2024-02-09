"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ImSpinner9 } from "react-icons/im";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignInForm({ className, ...props }: AuthFormProps) {
   const [isLoading, setIsLoading] = React.useState<boolean>(false);
   const router = useRouter();

   const signin = async (data: any): Promise<void> => {
      setIsLoading(true);

      const email = data.get("email");
      const password = data.get("password");

      if (!email || !password) {
         // throw new Error("Invalid form data");
         toast.error("Invalid form data!");
      }

      try {
         const response: Response = await fetch(
            "https://devapi.omacart.com/login",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  email,
                  password,
               }),
            },
         );
         if (response.ok) {
            setIsLoading(false);

            const res = await response.json();
            console.log(res);
            router.push("/dashboard");
         }
      } catch (error) {
         console.error(error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className={cn("grid gap-6", className)} {...props}>
         <form action={signin}>
            <div className="grid gap-4">
               <div className="grid gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     name="email"
                     placeholder="me@example.com"
                     type="email"
                     autoCapitalize="none"
                     autoComplete="email"
                     autoCorrect="off"
                     disabled={isLoading}
                  />
               </div>
               <div className="grid gap-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                     name="password"
                     type="password"
                     autoCapitalize="none"
                     disabled={isLoading}
                  />
               </div>

               <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                     <Checkbox id="remember-password" />
                     <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     >
                        Remember for 30 days
                     </label>
                  </div>

                  <p className="text-blue-800 text-sm font-medium cursor-pointer hover:underline">
                     Forgot password?
                  </p>
               </div>
               <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                     <ImSpinner9 className="mr-2 h-3 w-3 animate-spin" />
                  )}
                  Login
               </Button>
            </div>
         </form>
      </div>
   );
}
