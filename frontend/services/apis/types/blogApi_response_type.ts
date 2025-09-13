import AddBlogPayload from "./blogApi_type";

export default interface AddBlogResponse {
   success: boolean,
   message: string,
   blog: AddBlogPayload | {}
}