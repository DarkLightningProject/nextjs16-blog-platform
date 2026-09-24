import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/convex/_generated/api";
import { fetchQuery, preloadQuery } from "convex/nextjs";
import { Id } from "@/convex/_generated/dataModel";
import { Separator } from "@/components/ui/separator";
import { CommentsSection } from "@/components/web/CommentsSection";
import { Preloaded } from 'convex/react';
import { Metadata } from "next";
import { PostPresense } from "@/components/web/PostPresence";
import { getToken } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Suspense } from "react";


interface PostIdRouteProps {
    params:Promise<{
        postId: Id<"posts">;
    }>;
}
export async function generateMetadata({ params }: PostIdRouteProps): Promise<Metadata>{
const{postId}=await params

const post =  await fetchQuery(api.posts.getPostById, { postId });
if(!post){
    return{
        title:'Post not Found',
      
    }
}
return{
    title:post.title,
    description:post.body,
}



}

export default async function PostIdRoute({ params }: PostIdRouteProps) {
    const { postId } = await params;
    const token = await getToken();

    const [post, preloadedComments,userId] = await Promise.all([
       await fetchQuery(api.posts.getPostById, { postId }),
       await preloadQuery(api.comments.getCommentsByPostId, {
          postId:postId,
        }),
        await fetchQuery(api.presence.getUserId,{},{token}),
    ]);
    
    if(!userId){

  return redirect("/auth/login")
    }

    if(!post){
        return(
            

           
            <div className="max-w-3xl mx-auto py-8 px-4 animate-in fade-in duration-500 relative">
                <Link className={buttonVariants({ variant: "outline" })} href="/blog" >
                    <ArrowLeft className="size-4" />
                    Back to all Blog
                </Link>
                <h1 className="text-2xl font-bold mt-4">Post not found</h1>
            </div>
             
        )


    }

    return(
       <div className="max-w-3xl mx-auto py-8 px-4 animate-in fade-in duration-500 relative">

        <Link className={buttonVariants({ variant: "outline", className: "mb-4" })} href="/blog" >
        <ArrowLeft className="size-4" />
        Back to all Blog
</Link>

<div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden shadow-sm ">
<Image src={post.imageUrl ?? "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"} alt={post.title} fill className="object-cover hover:scale-105 transition-transform duration-300"/>
</div>

<div>
<div className="space-y-4 flex flex-col">
    <h1 className="text-3xl font-bold">{post.title}</h1>
   <div className="flex items-center gap-2">
     <p className="text-muted-foreground">
        Posted on: {new Date(post._creationTime).toLocaleDateString()}
    </p>
   {userId &&  <PostPresense roomId={post._id} userId={userId}/>}
   </div>
    <Separator className="my-8" />
    <p className="text-lg leading-relaxed text-foreground/90 white">{post.body}</p>
</div>
</div>

<Separator className="my-8" />

<CommentsSection preloadedComments={preloadedComments} />

        </div>
    )
}
  
