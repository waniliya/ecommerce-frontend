import React from 'react'
import Navbar from '../components/navbar/navbar'
import Menu from '../components/menu/Menu'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-2">
        <div className="h-32 rounded-lg "><Menu/></div> 
        <div className="h-32 rounded-lg "><main>{children}</main></div>
      </div>
    </React.Fragment>
  )
}

export default Layout