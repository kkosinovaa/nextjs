import {User} from '@/app/users/page'
export default async function UserPage({params,}:{params:Promise<{id: number}>}) {
    const {id} = await params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user: User = await response.json();


    return (
        <main>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </main>
    )
}