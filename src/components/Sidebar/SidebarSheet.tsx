'use client'

import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import Sidebar from "./Sidebar"

const SidebarSheet = () => {
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
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default SidebarSheet