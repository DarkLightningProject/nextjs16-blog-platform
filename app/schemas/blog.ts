import z from "zod";


export const postSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters").max(50, "Title must be 50 characters or fewer"),
    content: z.string().min(10, "Content must be at least 10 characters"),
    image:z.instanceof(File),
});