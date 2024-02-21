import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FrontPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl md:text-6xl text-center text-zinc-100 mb-6">
          Bring all your tasks and tools
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-pink-600 to-blue-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          together
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-12" size="xl" asChild>
        <Link href="/sign-up">
          Get Taskify for free
        </Link>
      </Button>
    </div>
  );
}
