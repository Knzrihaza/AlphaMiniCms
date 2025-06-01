export interface GalleryImage {
    _id: string;
    title: string;
    description: string;
    filename: string;
    url: string;
    createdAt: string;
}

export type WebsiteSettings = {

    allowDownload: boolean;
    darkMode: boolean;
    disableRightClick: boolean;
    enableComments: boolean;
    enableFavorites: boolean;
    isPrivate: boolean;
    maintenanceMode: boolean;
    metaDescription: string;
    metaKeywords: string;
    passwordProtected: boolean;
    showMetadata: boolean;
    siteTitle: string;
    socialSharing: boolean;
    watermarkEnabled: boolean;
};


export interface Post {
    _id?: string
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    image: string;
}


export type ActivityType =
    | "blog:create"
    | "blog:publish"
    | "blog:edit"
    | "gallery:upload"
    | "gallery:delete"
    | "system:backup"
    | "system:settings"
    | "team:assign"
    | "team:comment"
    | "settings:edit";

export interface Activity {
    id: number;
    type: ActivityType;
    title: string;
    timestamp: Date;
}
