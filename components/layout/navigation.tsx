// app/components/navigation.tsx or components/navigation.tsx
'use client';

import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Logo from './logo';

const MainNavigation = () => {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>

        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link href="/posts" className="hover:text-blue-600 transition-colors">
                All Posts
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contacts
              </Link>
            </li>

            {/* Conditional rendering based on session */}
            { session ? (
              <>
                <li>
                  <Link href="/profile" className="hover:text-blue-600 transition-colors">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="hover:text-blue-600 transition-colors"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/signin" className="hover:text-blue-600 transition-colors">
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
