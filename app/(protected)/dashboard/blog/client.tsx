"use client";
import { useState, useEffect, use } from "react";

import BlogPostItem from "../components/blogPost";
import { toast } from "sonner"
import { DialogButton } from "../components/dialogButton";
import { Post } from "@/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogPostCreator } from "../components/blogPostCreator";




export default function BlogAdminPage({
    posts
}: { posts: Post[] }) {
    const [open, setIsOpen] = useState(false)

    console.log(posts)




    return (
        <main className=" px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Blog
            </h1>
            <Card>

                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle >Blog Admin</CardTitle>
                    <div className="">
                        <DialogButton showCloseButton={false}
                            open={open}
                            setIsOpen={setIsOpen}
                            description="Add a new Blog Post"
                            buttonLabel={"Add new Post"}
                            title={"Add new Post"}>
                            <BlogPostCreator />
                        </DialogButton>
                    </div>
                </CardHeader>
                <CardContent>


                    <div className="grid gap-6">
                        {posts && posts.length > 0 ? (
                            posts.map((post, id) => (
                                <BlogPostItem
                                    key={id}
                                    title={post.title}
                                    summary={post.slug}
                                    author={"uuuuuuuuuuuuuuuuuuuu"}
                                    date={post.title}
                                    imageUrl={post.image}
                                    id={post._id}
                                />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500 animate-fade-in">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 mb-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                <p className="text-lg font-medium">No posts yet</p>
                                <p className="text-sm text-gray-400 mt-1">Once posts are available, they'll show up here.</p>
                            </div>
                        )}
                    </div>
                </CardContent>


            </Card>
        </main>
    );
}
