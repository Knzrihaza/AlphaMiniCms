"use client";
import { useState, useEffect } from "react";

import BlogPostItem from "../components/blogPost";
import BlogPostCreator from "../components/blogPostCreator";
import { toast } from "sonner"
import { DialogButton } from "../components/dialogButton";
import { Post } from "@/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";




export default function BlogAdminPage() {
    const [loading, setLoading] = useState(true)
    const [loadingBar, setLoadingBar] = useState(0)
    const [open, setIsOpen] = useState(false)
    const [posts, setPosts] = useState<Post[]>([]);



    useEffect(() => {
        tsst()


    }, [])
    async function tsst() {
        try {
            setLoadingBar(33)
            const res = await fetch("/api/blog");
            const data: Post[] = await res.json();
            console.log(data)
            setPosts(data)
            setLoading(false)

            setLoadingBar(100)
            toast("sccess")
        } catch (error) {
            toast(error)
        }
    }

    return (
        <main className=" px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Activity Feed from db
            </h1>
            <Card>

                <CardHeader className="justify-between">
                    <CardTitle >Blog Admin</CardTitle>
                    <div className="">
                        <DialogButton showCloseButton={false}
                            open={open}
                            setIsOpen={setIsOpen}
                            description="Add a new Blog Post"
                            buttonLabel={"Add new Post"}
                            title={"Add new Post"}>
                            <BlogPostCreator setIsOpen={setIsOpen} />
                        </DialogButton>
                    </div>
                </CardHeader>
                <CardContent>


                    <div className="grid gap-6">
                        {loading ? (
                            <>
                                <div className="flex flex-col space-y-3 w-full">
                                    <Skeleton className="h-[225px] w-full rounded-xl" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-2xl" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3 w-full">
                                    <Skeleton className="h-[225px] w-full rounded-xl" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-2xl" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3 w-full">
                                    <Skeleton className="h-[225px] w-full rounded-xl" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-2xl" />
                                    </div>
                                </div>
                            </>

                        ) : (
                            posts.map((post, id) => (
                                <BlogPostItem
                                    key={id}
                                    title={post.title}
                                    summary={"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"}
                                    author={"uuuuuuuuuuuuuuuuuuuu"}
                                    date={post.title}
                                    imageUrl={post.image}
                                    id={post.id} />
                            ))
                        )}
                    </div>
                </CardContent>


            </Card>
        </main>
    );
}
