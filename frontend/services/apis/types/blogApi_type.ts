export default interface AddBlogPayload {
    title: string;
    blogType: string;
    tone: string;
    language: string;
    keywords?: string[]
}
