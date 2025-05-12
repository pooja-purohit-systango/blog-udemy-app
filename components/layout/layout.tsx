import React from 'react'
import MainNavigation from './navigation'

const Layout = ({children} : any) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <MainNavigation />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

export default Layout