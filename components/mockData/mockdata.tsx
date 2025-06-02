import { IconDashboard, IconListDetails, IconCamera, IconFileDescription, IconFileAi, IconSettings, IconHelp, IconSearch, IconDatabase, IconFileWord, IconHome, IconInfoCircle, IconMail, IconPhoto, IconActivity, IconArticle, IconLayoutDashboard, IconWorld } from "@tabler/icons-react";

export const data = {

    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconLayoutDashboard,
        },
        {
            title: "Landing Page",
            url: "/dashboard/landing",
            icon: IconWorld,
        },
        {
            title: "Activity",
            url: "/dashboard/activity",
            icon: IconActivity,
        },
        {
            title: "Blog",
            url: "/dashboard/blog",
            icon: IconArticle,
        },
        {
            title: "Gallery",
            url: "/dashboard/gallery",
            icon: IconPhoto,
        },



    ],
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: IconSearch,
        },
    ],
    documents: [
        {
            name: "Data Library",
            url: "/lifecyclefsaf",
            icon: IconDatabase,
        },

    ],
}


export const landingData = {

    navMain: [
        {
            title: "Home",
            url: "/",
            icon: IconHome,
        },
        {
            title: "About",
            url: "/about",
            icon: IconInfoCircle,
        },
        {
            title: "Blog",
            url: "/blog",
            icon: IconPhoto,
        },
        {
            title: "Contact",
            url: "/contact",
            icon: IconMail,
        },

    ],

    navSecondary: [
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: IconSearch,
        },
    ],
    documents: [
        {
            name: "Data Library",
            url: "/lifecyclefsaf",
            icon: IconDatabase,
        },

    ],
}

export interface Album {
    name: string
    artist: string
    cover: string
}

export type Playlist = (typeof playlists)[number]

export const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
    "Top Albums",
    "Top Artists",
    "Logic Discography",
    "Bedtime Beats",
    "Feeling Happy",
    "I miss Y2K Pop",
    "Runtober",
    "Mellow Days",
    "Eminem Essentials",
]

export const listenNowAlbums: Album[] = [
    {
        name: "React Rendezvous",
        artist: "Ethan Byte",
        cover:
            "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    },
    {
        name: "Async Awakenings",
        artist: "Nina Netcode",
        cover:
            "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    },
    {
        name: "The Art of Reusability",
        artist: "Lena Logic",
        cover:
            "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
    },
    {
        name: "Stateful Symphony",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    },
]

export const madeForYouAlbums: Album[] = [
    {
        name: "Thinking Components",
        artist: "Lena Logic",
        cover:
            "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
    },
    {
        name: "Functional Fury",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
    },
    {
        name: "React Rendezvous",
        artist: "Ethan Byte",
        cover:
            "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
    },
    {
        name: "Stateful Symphony",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
    },
    {
        name: "Async Awakenings",
        artist: "Nina Netcode",
        cover:
            "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    },
    {
        name: "The Art of Reusability",
        artist: "Lena Logic",
        cover:
            "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    },
]