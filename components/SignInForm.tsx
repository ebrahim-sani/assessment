"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ImSpinner9 } from "react-icons/im";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignInForm({ className, ...props }: AuthFormProps) {
   const [isLoading, setIsLoading] = React.useState<boolean>(false);

   async function onSubmit(event: React.SyntheticEvent) {
      event.preventDefault();
      setIsLoading(true);

      setTimeout(() => {
         setIsLoading(false);
      }, 3000);
   }

   return (
      <div className={cn("grid gap-6", className)} {...props}>
         <form onSubmit={onSubmit}>
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
               <Button disabled={isLoading}>
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
