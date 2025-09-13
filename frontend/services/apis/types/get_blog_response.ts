import AddBlogPayload from "./blogApi_type";

export default interface AllBlogsResponse {
   success: boolean,
   message: string,
   blogs: AddBlogPayload[] | []
}