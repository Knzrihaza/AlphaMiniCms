export interface GalleryImage {
    _id: string;
    title: string;
    description: string;
    isSlider: boolean;
    category: string
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



export interface FetchOptions {
    sort?: Record<string, 1 | -1>;
    filter?: Record<string, any>;
    limit?: number;
}


export type LandingPageData = {
    hero: {
        headline: string;
        description: string;
        cta: {
            text: string;
            link: string;
        };
    };
    features: Array<{
        title: string;
        description: string;
    }>;
    pricing_section: {
        title: string;
        subtitle: string;
        plans: Array<{
            name: string;
            audience: string;
            price: number | null;
            currency: string;
            billing_cycle: 'monthly' | 'custom';
            features: string[];
            is_free: boolean;
            custom_pricing?: boolean;
            contact_sales?: boolean;
        }>;
    };
    testimonials: Array<{
        name: string;
        quote: string;
        role: string;
    }>;
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
