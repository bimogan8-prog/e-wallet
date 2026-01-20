
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const firstName = user.fullName.split(' ')[0];

  return (
    <header className="flex justify-between items-center py-4 mb-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Halo, {firstName}</h1>
        <p className="text-sm text-gray-500">Selamat datang kembali!</p>
      </div>
      <img
        src={user.avatarUrl}
        alt="User Avatar"
        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
      />
    </header>
  );
};

export default Header;
