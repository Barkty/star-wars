import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'
import React from 'react'
import { LayoutContainer } from './styles'

const Layout = ({ children }) => {

  return (
    <LayoutContainer>
        <Navbar/>
        {children}
        <Footer/>
    </LayoutContainer>
  )
}

export default Layout