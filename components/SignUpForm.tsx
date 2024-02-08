"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ImSpinner9 } from "react-icons/im";
import { Input } from "./ui/input";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: AuthFormProps) {
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
            <div className="grid gap-5">
               <div className="grid gap-1">
                  <Label htmlFor="email">Name*</Label>
                  <Input
                     name="name"
                     placeholder="Enter your name"
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
