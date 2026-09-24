"use client"
import { postSchema } from "@/app/schemas/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import {   useForm,Controller } from "react-hook-form";
import z from "zod";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { createBlogAction } from "@/app/actions";



export default function CreateRoute(){

  const [isPending, startTransition] = useTransition();


      const form = useForm({
        resolver: zodResolver(postSchema),
        defaultValues: {
         content:"",
         title:"",
         image: undefined,
        },
      });

    function onSubmit(values:z.infer<typeof postSchema>){
      startTransition(async () => {
        await createBlogAction(values);
      });
    }


return(
    
  <div className ="py-12">

    <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Create Post
        </h1>
        <p className="text-xl text-muted-foreground pt-4">Share your thought with big world</p>
    </div>
    <Card className="w-full max-w-xl mx-auto">
        <CardHeader>
            <CardTitle>Create Blog Article</CardTitle>
            <CardDescription>Create a new blog article</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup className="gap-y-4">
                      <Controller name="title" control={form.control} render={({field,fieldState})=>(
             <Field>
              <FieldLabel> Title </FieldLabel>
              <Input aria-invalid={fieldState.invalid} placeholder="get yor feelings express" {...field} />
              {fieldState.invalid &&(
                <FieldError errors={[fieldState.error]} />
              )}
              </Field>

             
            )

            }/>
            <Controller name="content" control={form.control} render={({field,fieldState})=>(
             <Field>
              <FieldLabel> Content  </FieldLabel>
              <Textarea aria-invalid={fieldState.invalid} placeholder="are you ready?" {...field} />
              {fieldState.invalid &&(
                <FieldError errors={[fieldState.error]} />
              )}
              </Field>

             
            )

            }/>
             <Controller name="image" control={form.control} render={({field,fieldState})=>(
             <Field>
              <FieldLabel> Image  </FieldLabel>
              <Input aria-invalid={fieldState.invalid} placeholder="are you ready?" type="file" accept="image/*" 
              onChange={(event)=>{
                const file = event.target.files?.[0]
                field.onChange(file)

              }}/>
              {fieldState.invalid &&(
                <FieldError errors={[fieldState.error]} />
              )}
              </Field>

             
            )

            }/>

            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Creating...</span>
                </>
              ) : (
                <span>Create Post</span>
              )}
            </Button>

                </FieldGroup>

            </form>
        </CardContent>
        </Card>


    </div>


)

}

