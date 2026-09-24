"use client";

import { Loader2, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { commentSchema } from "@/app/schemas/comment";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import { toast } from "sonner";
import z from "zod";
import { useTransition } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";




export function CommentsSection(props:{
  preloadedComments: Preloaded<typeof api.comments.getCommentsByPostId>;
}) {
  const params = useParams<{ postId: string }>();
  const data = usePreloadedQuery(props.preloadedComments);
  const postId = params.postId as Id<"posts">;

  const [isPending, startTransition] = useTransition();
  
  
  const createComment = useMutation(api.comments.createComment);
const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      postId,
      body: "",
    },
  });

  async function onSubmit(data: z.infer<typeof commentSchema>) {
    startTransition(async () => {
      try {
        await createComment(data);
        form.reset({
          postId,
          body: "",
        });
        toast.success("Comment posted");
      } catch {
        toast.error("failed to create post");
      }
    });
  }

  if (data === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 border-b">
        <MessageSquare className="mr-2 h-4 w-4" />
        <h3 className="text-lg font-semibold">{data?.length ?? 0} Comments</h3>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <Controller
            name="body"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Comment</FieldLabel>
                <Textarea
                  aria-invalid={fieldState.invalid}
                  placeholder="share your thoughts"
                  {...field}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? <Loader2 className="size-4 animate-spin" /> : <span>Comment</span>}
          </Button>

          <div className="border-t border-border pt-4" />

          <section className="space-y-6">
            {data?.map((comment) => (
              <div key={comment._id} className="flex gap-4">
                <Avatar className="size-10 shrink-0">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${comment.authorName}`}
                    alt={comment.authorName}
                  />
                  <AvatarFallback>{comment.authorName.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                   
                <div className="flex w-full items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-medium">{comment.authorName}</p>
                    <p className="text-sm text-muted-foreground">{comment.body}</p>
                  </div>

                  <p className="whitespace-nowrap text-xs text-muted-foreground">
                    {new Date(comment._creationTime).toLocaleDateString("en-US")}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </form>
      </CardContent>
    </Card>
  );
}