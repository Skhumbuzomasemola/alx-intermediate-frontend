import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="font-bold text-lg">MyApp</a>
        </Link>
        <div>
          <Link href="/posts"><a className="mr-4">Posts</a></Link>
          <Link href="/users"><a>Users</a></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

