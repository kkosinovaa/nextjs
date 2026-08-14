import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "JSONPlaceholder",
    description: "Users, posts and comments",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
        <body>

        {children}
        </body>
        </html>
    );
}