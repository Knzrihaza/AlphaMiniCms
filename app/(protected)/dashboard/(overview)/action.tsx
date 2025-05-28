// app/dashboard/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import BlogPostCreator from '../components/blogPostCreator';
import ImageUploadCard from '../components/imageUploaderCard';
import { DashboardMetrics } from './page';
import StatsWidget from '../components/statsWidget';





interface DashboardClientPageProps {
    metrics: DashboardMetrics;
}

export default function DashboardClientPage({ metrics }: DashboardClientPageProps) {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button onClick={() => toast('Event has been created.')}>Download</Button>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        
                <div className="col-span-1">
                    <StatsWidget title={"Images"} value={metrics.imageCount} description='Images' />
                </div>
                <div className="col-span-1">
                    <StatsWidget title={"Posts"} value={metrics.BlogPostCount} description='Posts' />
                </div>
                <div className="col-span-4">
                    <ImageUploadCard   />
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {/* Overview content goes here */}
                    </CardContent>
                </Card>
                <div className="col-span-5">
                    <BlogPostCreator />
                </div>
            </div>

        </div>
    );
}
