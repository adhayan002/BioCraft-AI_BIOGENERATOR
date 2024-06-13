import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "BioCraft",
  description: `Elevate your Twitter profile with BioCraft, the AI tool that creates captivating and personalized bios in seconds. Perfect for influencers, entrepreneurs, and anyone looking to stand out. Try BioCraft today and make an unforgettable online impression!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable,"font-sans")}>
        <GridPattern width={60} height={60} className="-z-10 opacity-70 h-[100vh]"/>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
