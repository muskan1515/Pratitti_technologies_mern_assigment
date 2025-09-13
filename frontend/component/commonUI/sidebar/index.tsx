'use client'
import { SidebarList } from "@/utils/staticData/homePage"
import Link from "next/link";
import SidebarOptions from "@/types/Sidebar";
import { useMemo, useState } from "react";

export const Sidebar = () => {

    //to hide the header for other routes
    const showSidebar = useMemo(() => {
        if (window.location.pathname != '/')
            return true
        return false;
    }, [window.location])

    if(!showSidebar)
        return null

    const [selectedId, setSelectedId] = useState<number>(1)

    const updateSelectedOption = (id: number) => {
        setSelectedId(id)
    }
    return (
        <div className="bg-gray-200 w-50 h-124">
            <div className="p-2 flex flex-col">
                {SidebarList.map((sidebarOpt: SidebarOptions) =>
                    <div onClick={() => updateSelectedOption(sidebarOpt.id)} className={` p-2 ${selectedId == sidebarOpt.id ? "bg-gray-400 rounded-lg" : ""}`}>
                        <Link key={sidebarOpt.id} className={`p-1`} href={sidebarOpt.url}>{sidebarOpt.title}</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
