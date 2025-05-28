"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea"
import { Post } from "@/types/types";
import { FormEvent, useState } from "react";
import { toast } from "sonner";



interface SetiSOpen {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

}


export default function BlogPostCreator({
    setIsOpen,
}: SetiSOpen) {
    const [loading, setLoading] = useState(false)
    const [newPost, setNewPost] = useState<Post>({
        id:"",
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
        event.preventDefault()
        try {
            setLoading(true)
            const formData = new FormData(event.currentTarget)
            const response = await fetch('/api/blog', {
                method: 'POST',
                body: formData,
                next: { tags: ["posts"] },
            })
            const data = await response.json()
            toast("Success", {
                description: "Post added successfully",
            })
        } catch (error) {
            toast("error")
        } finally {
            setLoading(false)
            setIsOpen(false)
        }


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