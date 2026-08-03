import Link from "next/link";

export interface Comment{
    id: number,
    name: string,
    email: string,
    body: string,
}

export default async function CommentsPage(){
    const response =  await fetch(
        'https://jsonplaceholder.typicode.com/comments'
    )
    const comments: Comment[] = await response.json();

    return(
        <main>
            <h1>Comments</h1>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <Link href={`/comments/${comment.id}`}>
                        <h2>{comment.name}</h2>
                    </Link>
                </div>
            ))}
        </main>
    )
}