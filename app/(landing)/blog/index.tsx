"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Post } from "@/types/types";

type BlogItemsProps = {
    blogPosts: Post[];
};
export default function BlogItems({ blogPosts }: BlogItemsProps) {


    const [posts, setPosts] = useState<Post[]>(blogPosts)

    console.log("ttttttttttttt", blogPosts)



    return (

        <div className="w-full grid gap-6">
            {posts?.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={400}
                            className="rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                        <Button asChild>
                            <a href={`/blog/${post.slug}`}>Read More</a>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>

    );
}
