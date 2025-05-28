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
    id: string
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    image: string;
}