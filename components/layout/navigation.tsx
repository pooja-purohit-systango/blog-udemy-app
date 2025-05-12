import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const MainNavigation = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          <Logo />
        </Link>

        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
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
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainNavigation
