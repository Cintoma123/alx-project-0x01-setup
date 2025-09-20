import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import UserCard from '@/components/common/UserCard';
import { UserData, UserProps } from '@/interfaces';
import UserModal from '@/components/common/UserModal';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    // In a real application, you would send this data to your API
    console.log("New user to add:", user);
    // For now, we'll just log it to the console.
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-4xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add User
        </button>
      </div>

      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users?.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}

        [post.map]((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
};

export default Users;