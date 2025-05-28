"use client"
// components/BlogPostItem.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BlogPostItemProps {
    id: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    imageUrl: string
}

export default function BlogPostItem({
    id,
    title,
    summary,
    author,
    date,
    imageUrl
}: BlogPostItemProps) {
    const [isEdit, setIsEdit] = useState(false)



    if (isEdit) {
        return (
            <Card className="rounded-2xl overflow-hidden shadow-lg transition hover:shadow-xl">
                <div className="relative w-full h-60">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <CardContent className="p-6 space-y-3">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white"> <Input type="text" defaultValue={title} /></h2>
                    <p className="text-gray-600 dark:text-gray-300"><Textarea defaultValue={summary} /></p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{date}</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="px-6 pb-6">
                    <div className="flex gap-4">
                        <Button onClick={() => console.log("delete")}>
                            Delete
                        </Button>
                        <Button onClick={() => { setIsEdit(false) }}>
                            Apply
                        </Button>
                        <Button onClick={() => console.log("read more")}>
                            Read More
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Card className="rounded-2xl overflow-hidden shadow-lg transition hover:shadow-xl">
            <div className="relative w-full h-60">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{summary}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{date}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="px-6 pb-6">
                <div className="flex gap-4">
                    <Button onClick={() => { console.log("first") }}>
                        Delete
                    </Button>
                    <Button onClick={() => { setIsEdit(true) }}>
                        Edit
                    </Button>
                    <Button onClick={() => { console.log("first") }}>
                        Read More
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
