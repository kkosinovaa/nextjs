import {Comment} from "@/app/comments/page";

export default async function CommentPage({params,}: { params: Promise<{ id: number }>; }) {
    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);

    const comment:  Comment = await response.json();

    return (
        <main>
            <h1>{comment.name}</h1>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </main>
    );
}