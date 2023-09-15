"use client";

import Login from "@/components/Login/Login";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Image from "next/image";
import MobileNav from "../MobileNav/MobileNav";

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center gap-x-[4px] " variant={"outline"}>
        <Image src="/images/egld.svg" alt="" width={22} height={22} />
        <Dot size={20} className="text-green-500" /> MultiversX
      </Button>

      <Login />

      <MobileNav />

      {/* <ModeToggle /> */}
    </div>
  );
};

export default NavbarActions;
