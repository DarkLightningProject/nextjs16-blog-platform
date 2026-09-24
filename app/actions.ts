
"use server";

import z from "zod";
import { postSchema } from "./schemas/blog";
import { api } from "@/convex/_generated/api";
import { fetchAuthMutation, getToken } from "@/lib/auth-server";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createBlogAction(values:z.infer<typeof postSchema>){


  
try{
    const parsed = postSchema.safeParse(values);
    if(!parsed.success){

        throw new Error('something went wrong')

    }

    const token = await getToken();
    const imageUrl = await fetchMutation(api.posts.generateImageUploadUrl,{},{token});

    const uploadResult = await fetch(imageUrl,{
        method:'POST',
        headers:{
            "Content-Type":parsed.data.image.type,
        },
        body:parsed.data.image,
    });

    if(!uploadResult.ok){
        throw new Error('Image upload failed')
    }
     const {storageId} = await uploadResult.json();
     await fetchAuthMutation(api.posts.createPost,{
        body:parsed.data.content,
        title: parsed.data.title,
        imageStorageId:storageId,

    });
   
        }

   
catch{

  throw new Error('failed to create post')
};


    updateTag("blog");
    redirect("/blog");

}
