import React from 'react';

const UsersPage = () => {
  // Example users data
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id} className="mb-2">{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default UsersPage;

