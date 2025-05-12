import React from 'react'
import MainNavigation from './navigation'

const Layout = ({children} : any) => {
  return (
    <div>
        <MainNavigation />

        <main>{children}</main>
    </div>
  )
}

export default Layout