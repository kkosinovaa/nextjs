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
        <nav>
            <ul>
                <li>
                    <Link href="/">HomePage</Link>
                </li>

                <li>
                    <Link href="/users">Users</Link>
                </li>

                <li>
                    <Link href="/posts">Posts</Link>
                </li>

                <li>
                    <Link href="/comments">Comments</Link>
                </li>
            </ul>
        </nav>

        {children}
        </body>
        </html>
    );
}