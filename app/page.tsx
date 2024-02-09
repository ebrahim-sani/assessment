import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <main className="flex min-h-screen p-4">
         <div className="flex flex-col items-center w-full">
            <div className="max-w-5xl w-full items-center justify-between text-sm flex">
               <Link href="/signin">
                  <Button>Signin</Button>
               </Link>
               <Link href="/signup">
                  <Button>Signup</Button>
               </Link>
            </div>

            <div className="flex h-full flex-1 justify-center">
               <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
               />
            </div>
         </div>
      </main>
   );
}
