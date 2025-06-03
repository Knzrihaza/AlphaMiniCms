// app/dashboard/page.tsx
"use server"

import DashboardClientPage from "./action";
import { getDashboardMetrics } from "../lib/getDashboardMetrics";









export interface DashboardMetrics {
    imageCount: number;
    BlogPostCount: number;
}



export default async function DashboardPage() {

    const number = await getDashboardMetrics()
    return (
        <DashboardClientPage metrics={number} />
    );
}
