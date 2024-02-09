import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Dashboard",
   description: "",
};

export default function page() {
   return (
      <main className="flex flex-col w-full h-screen justify-center items-center space-y-3">
         <h1>Login successfull!</h1>
         <Link href="/">
            <Button variant="outline" size="sm">
               Back Home
            </Button>
         </Link>
      </main>
   );
}
