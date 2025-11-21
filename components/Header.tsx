import { HomeIcon,File,UsersRound, UserRound,LogOut } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

export default function Header() {
    return <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
        <div className="flex h-8 items-center justify-between w-full"
        >
            <div className="flex items-center gap-2">
                <NavButton icon={HomeIcon} label="Home" href="/home" />

                <Link href="/home" className="flex items-center justify-center gap-2 ml-0" title="Home">
                <h1 className="hidden sm:block text-xl font-bold m-0">Computer Repair Shop</h1>
                </Link>
            </div>


            <div className="flex items-center">
                 <NavButton icon={File} label="Tickets" href="/tickets" />
                  <NavButton icon={UsersRound} label="Customers" href="/customers" />
                  <ModeToggle/>
                  <Button size="icon" variant="ghost" aria-label="Logout" title="Logout" className="rounded-full" asChild><LogoutLink><LogOut></LogOut></LogoutLink></Button>
            </div>
        </div>
    </header>;
}