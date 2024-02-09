import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
   return (
      <main className="flex min-h-screen w-full items-center justify-center bg-white">
         <ImSpinner9 className="h-4 w-4 animate-spin text-primary" />
      </main>
   );
}
