'use client'

import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import MenuItems from "./MenuItems"
import UserMenu from "./UserMenu"

const NavSheet = () => {
    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-lg pr-6">
                <SheetHeader className="">
                    <SheetTitle className="">

                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-1">
                        <MenuItems />
                    </div>
                    <div className="">
                        <UserMenu />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavSheet
