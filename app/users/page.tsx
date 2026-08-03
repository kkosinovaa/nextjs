import Link from "next/link";

export interface User {
    id: number;
    name: string;
    username:  string;
    email: string;
}

export default async function UsersPage() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const users: User[] = await response.json();
    return (
        <main>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <h2>{user.name}</h2>
                    </Link>
                </div>
            ))}
        </main>
    );
}
