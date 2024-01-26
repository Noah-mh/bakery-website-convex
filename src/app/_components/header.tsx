"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";


const Header = () => {
    return (
        <div className="border-b">
            <div className="h-16 container flex justify-between items-center">
                <div>Laroti Bakery</div>
                <div className="flex gap-4 items-center">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Header