'use client'
import HeaderOptions from "@/types/homePage"
import { headerList } from "@/utils/staticData/homePage"
import Link from "next/link"
import { useMemo } from "react"

export const Header = () => {

    //to hide the header for other routes
    const showBasicHeader = useMemo(() => {
        if (window.location.pathname == '/')
            return true
        return false;
    }, [window.location])

    
    return (
        <div className="flex justify-between item-center p-2">
            <div><h2 className="font-bold">HO</h2></div>

            <div className="p-2">
                {headerList.map((headerOpt: HeaderOptions) =>
                    <Link key={headerOpt.title} className="p-1" href={headerOpt.url}>{headerOpt.title}</Link>
                )}
            </div>
        </div>
    )
}