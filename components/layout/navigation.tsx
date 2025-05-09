import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const MainNavigation = () => {
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
              <Link
                href="/posts"
                className="hover:text-blue-600 transition-colors"
              >
                All Posts
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainNavigation
