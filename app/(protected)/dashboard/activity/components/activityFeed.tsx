import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import {
    Upload,
    Edit2,
    Trash2,
    BookOpen,
    ImagePlus,
    ShieldCheck,
    Users,
    Settings2,
} from "lucide-react";
import { JSX } from "react";

// Activity Type and Sample Data

export type ActivityType =
    | "blog:create"
    | "blog:publish"
    | "blog:edit"
    | "gallery:upload"
    | "gallery:delete"
    | "system:backup"
    | "system:settings"
    | "team:assign"
    | "team:comment";

interface Activity {
    id: number;
    type: ActivityType;
    title: string;
    timestamp: Date;
}

// Mapping types to icons and colors

const iconMap: Record<ActivityType, JSX.Element> = {
    "blog:create": <BookOpen className="w-4 h-4 text-blue-600" />,
    "blog:publish": <BookOpen className="w-4 h-4 text-green-600" />,
    "blog:edit": <Edit2 className="w-4 h-4 text-yellow-600" />,
    "gallery:upload": <ImagePlus className="w-4 h-4 text-purple-600" />,
    "gallery:delete": <Trash2 className="w-4 h-4 text-red-600" />,
    "system:backup": <ShieldCheck className="w-4 h-4 text-sky-600" />,
    "system:settings": <Settings2 className="w-4 h-4 text-gray-500" />,
    "team:assign": <Users className="w-4 h-4 text-pink-500" />,
    "team:comment": <Users className="w-4 h-4 text-indigo-500" />,
};

const readableType = (type: ActivityType) =>
    type
        .split(":")
        .map((word, i) => (i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join(" ");

const activities: Activity[] = [
    {
        id: 1,
        type: "blog:create",
        title: "Started draft for 'Shadcn UI Best Practices'",
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
        id: 2,
        type: "blog:publish",
        title: "Published 'Dark Mode Design Tips'",
        timestamp: new Date(Date.now() - 1000 * 60 * 25),
    },
    {
        id: 3,
        type: "gallery:upload",
        title: "Uploaded 5 new assets to 'Summer Collection'",
        timestamp: new Date(Date.now() - 1000 * 60 * 45),
    },
    {
        id: 4,
        type: "system:backup",
        title: "System backup completed successfully",
        timestamp: new Date(Date.now() - 1000 * 60 * 90),
    },
    {
        id: 5,
        type: "team:assign",
        title: "Assigned review task to @alex",
        timestamp: new Date(Date.now() - 1000 * 60 * 150),
    },
    {
        id: 6,
        type: "gallery:delete",
        title: "Deleted 'Old Banner Images' album",
        timestamp: new Date(Date.now() - 1000 * 60 * 190),
    },
];

// Page Component

export default function ActivityPage(props) {
    console.log(props.data)
    return (
        <main className="  px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Activity Feed from db
            </h1>

            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">Recent Tasks</h2>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {props.data.map((activity, index) => (
                            <li key={activity.id}>
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-muted flex items-center justify-center">
                                            {iconMap[activity.type]}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{activity.title}</p>
                                        <p className="text-xs text-muted-foreground">

                                        </p>
                                    </div>

                                    <Badge variant="outline" className="capitalize text-xs">
                                        {readableType(activity.type)}
                                    </Badge>
                                </div>

                                {index < activities.length - 1 && <Separator className="my-3" />}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Activity Feed
            </h1>

            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">Recent Tasks</h2>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {activities.map((activity, index) => (
                            <li key={activity.id}>
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarFallback className="bg-muted flex items-center justify-center">
                                            {iconMap[activity.type]}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{activity.title}</p>
                                        <p className="text-xs text-muted-foreground">

                                        </p>
                                    </div>

                                    <Badge variant="outline" className="capitalize text-xs">
                                        {readableType(activity.type)}
                                    </Badge>


                                </div>

                                {index < activities.length - 1 && <Separator className="my-3" />}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </main>
    );
}
