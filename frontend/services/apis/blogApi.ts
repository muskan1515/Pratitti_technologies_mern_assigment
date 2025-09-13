import client from "../axiosInstance";
import AddBlogResponse from "./types/blogApi_response_type";
import AddBlogPayload from "./types/blogApi_type";
import AllBlogsResponse from "./types/get_blog_response";

export const addBlog = async (data: AddBlogPayload): Promise<AddBlogResponse> => {
    return await client.post("/apis/blog", data)
}


export const getBlogs = async (): Promise<AllBlogsResponse> => {
    return await client.get("/apis/blog")
}

