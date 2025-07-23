export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); // it works in server components
  const users = await res.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {" "}
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
