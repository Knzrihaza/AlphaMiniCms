'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import ImageUploadCard from '../components/imageUploaderCard';
import { DashboardMetrics } from './page';
import StatsWidget from '../components/statsWidget';
import { BlogPostCreator } from '../components/blogPostCreator';

interface DashboardClientPageProps {
    metrics: DashboardMetrics;
}

export default function DashboardClientPage({ metrics }: DashboardClientPageProps) {
    return (
        <div className="flex-1 space-y-6 p-4 sm:p-6 md:p-8 pt-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h2>

            </div>

            {/* Stats and Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="col-span-1">
                    <StatsWidget title="Images" value={metrics.imageCount} description="Images" />
                </div>
                <div className="col-span-1">
                    <StatsWidget title="Posts" value={metrics.BlogPostCount} description="Posts" />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                    <ImageUploadCard />
                </div>
            </div>

            {/* Overview and BlogPostCreator */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                <Card className="col-span-1 md:col-span-2">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {/* Overview content goes here */}
                    </CardContent>
                </Card>
                <div className="col-span-1 md:col-span-1 lg:col-span-5">
                    <BlogPostCreator />
                </div>
            </div>
        </div>
    );
}
