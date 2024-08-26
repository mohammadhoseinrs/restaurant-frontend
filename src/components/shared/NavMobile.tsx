import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Login from "./Auth";
const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-orange-500 text-md mt-3 tracking-widest ">
            Welcome to MearnEats.com
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <SheetFooter>
          <div className="bg-orange-500 hover:bg-orange-400 text-white text-center rounded-lg py-2">
            <Login />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
