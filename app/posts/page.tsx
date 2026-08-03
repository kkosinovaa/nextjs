import Link from "next/link";

export interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;

}
export default async function PostsPage(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();

    return (
        <main>
            <h1>Posts</h1>
            {posts.map((post: Post) => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            ))}
        </main>
    )
}