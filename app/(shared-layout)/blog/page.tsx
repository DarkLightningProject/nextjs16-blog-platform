// "use client"  use when using use useQuery

import Image from "next/image";
import { connection } from "next/server";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { buttonVariants } from "@/components/ui/button";
import { fetchQuery } from "convex/nextjs";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";


// export const dynamic = "force-static";

// export const revalidate=30;
import type { Metadata } from 'next'
import { cacheLife, cacheTag } from "next/cache";
 
export const metadata: Metadata = {
  title: 'Blog|Next.js Practice',
  description: 'Read Our Latest articles insight',
  category: 'web development',
  authors: [{ name: 'Ripudaman Singh Multani' }]
}


export default async function BlogPage() {


  // const data = useQuery(api.posts.getPosts);

  return (
    <div className="py-12">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Blog</h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Insights, thoughs and trends from our team!
        </p>
      </div>


      {/* <Suspense fallback={<SkeletonLoadingUi />}> */}
        <LoadBlogList />
      {/* </Suspense> */}
    </div>
  );
}

async function LoadBlogList(){
    
  "use cache";
  cacheLife("hours");
  cacheTag("blog");
  const data = await fetchQuery(api.posts.getPosts)
  return(

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
          <Card key={post._id} className="pt-0" >
            <div className="relative h-48 w-full overflow-hidden">
              <Image src={post.imageUrl ?? "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}
                alt="image"
                fill
                
                className="round-t-lg"
              />
            </div>
            <CardContent>
              <Link href={`/blog/${post._id}`}>
              <h1 className="text-2xl font-bold hover:text-primary">{post.title}</h1>
              
              </Link>
              <p className="text-muted-foreground line-clamp-3">{post.body}</p>
</CardContent>
<CardFooter>
  <Link className={buttonVariants({
    className:'w-full',
    
  })} href={`/blog/${post._id}`}>
  Read more
  </Link>
</CardFooter>
          </Card>
        ))}


      </div>

  )

}

function SkeletonLoadingUi(){


  return(

    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">{[...Array(6)].map((_, i) => <div key={i} className="flex flex-col space-y-3">

      <Skeleton className="h-48 w-full rounded-xl"/>
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-6 w-3/4"/>
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-4 w-2/"/>
        </div>
    </div>)}</div>
    
  )
}