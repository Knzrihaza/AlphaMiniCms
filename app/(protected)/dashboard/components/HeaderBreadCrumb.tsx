import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

interface BreadcrumbItemType {
    label: string
    href?: string
    isCurrentPage?: boolean
}

export default function HeaderBreadCrumb() {



    const breadcrumbItems: BreadcrumbItemType[] = [
        { label: 'Dashboard', href: '/' },
        { label: 'Components', href: '/components' },
        { label: 'Breadcrumb', isCurrentPage: true }
    ]
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            {item.isCurrentPage ? (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink>
                                    <Link href={item.href!}>{item.label}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}