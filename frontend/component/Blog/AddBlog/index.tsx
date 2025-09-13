import { getBlogs } from "@/services/apis/blogApi"
import AddBlogPayload from "@/services/apis/types/blogApi_type"
import { useEffect, useState } from "react"

const Blog = () => {

    const [fetchedBlogs, setFetchedBlogs] = useState<AddBlogPayload[]>([])

    const fetchAllBlogs = async () => {
        try {
            const { success, message, blogs } = await getBlogs()
            if (success) {
                console.log(message)
                setFetchedBlogs(blogs)
            }
        }
        catch (err) {
            console.error("Got error while fecthign the blogs")
        }
    }

    useEffect(() => { fetchAllBlogs }, [])

    return (
        <div className="flex items-center">
            <div className="bg-gray-400 ml-80 w-80 rounded-lg" style={{ fontSize: 20, padding: 20 }}><button>Generate new blog</button></div>

            {/**Content History */}

        </div>
    )
}

export default Blog