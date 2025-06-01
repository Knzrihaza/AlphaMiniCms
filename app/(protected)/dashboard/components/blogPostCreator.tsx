"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea"
import { handleCreateItem } from "@/lib/functions";
import { Post } from "@/types/types";
import { FormEvent, useState } from "react";
import { toast } from "sonner";



interface SetiSOpen {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;

}


export function BlogPostCreator() {
    const [loading, setLoading] = useState(false)
    const [newPost, setNewPost] = useState<Post>({
        title: "",
        excerpt: "",
        date: new Date().toISOString().split("T")[0],
        slug: "",
        image: ""
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({ ...prev, [name]: value }));
    };



    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setLoading(true)
        const formData = new FormData(event.currentTarget)

        const response = await handleCreateItem(formData)
        setLoading(false)
        toast(response.toString())
    }





    return (
        <Card className="mb-10 border p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
            <form onSubmit={onSubmit} >
                <div className="grid gap-4">
                    <Input name="title" placeholder="Title" value={newPost.title} onChange={handleChange} />
                    <Textarea name="excerpt" placeholder="Excerpt" value={newPost.excerpt} onChange={handleChange} />
                    <Input name="slug" placeholder="Slug (e.g. my-new-post)" value={newPost.slug} onChange={handleChange} />
                    <Input name="image" placeholder="Image URL from Pexels" value={newPost.image} onChange={handleChange} />
                    {loading ? (
                        <Button disabled >   <Spinner size={"small"} className="text-black">

                        </Spinner> loading ...</Button>
                    ) : (
                        <Button>   Add Post</Button>
                    )}
                </div>
            </form>
        </Card>
    )
}