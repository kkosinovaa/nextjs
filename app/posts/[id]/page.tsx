import {Post} from "@/app/posts/page";

export default async function PostPage({params,}:{params:Promise<{id: number}>}){
    const {id} = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post: Post = await response.json();

    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );

}