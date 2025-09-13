import HeaderOptions from "@/types/homePage";
import SidebarOptions from "@/types/Sidebar";

export const headerList: HeaderOptions[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Help", url: "/help" }
]


export const SidebarList: SidebarOptions[] = [
    { id: 1, title: "+ New Content", url: "/add-blog" },
    { id: 2, title: "Templates", url: "/templates" },
    { id: 3, title: "English", url: "/english" }
]

export const PointerList: { id: number, title: string }[] = [
    { id: 1, title: 'Write Blogs , emails in seconds' },
    { id: 2, title: 'Support Multi Language' }
]