"use client";

import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                )}
            />
        </div>
    );
}