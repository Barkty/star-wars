import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarContainer, NavbarItem, NavbarList, NavbarLogo } from './styles'
import logo from 'assets/logo.png'

const Navbar = () => {

  return (
    <NavbarContainer>
        <NavbarList>
            <NavbarItem>
                <Link to='/'>News + Blog</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='/'>Video</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='/'>Films</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='/'>Series</Link>
            </NavbarItem>
            {/* Logo goes here */}
            <NavbarLogo>
                <img alt='Star Wars' src={logo}/>
            </NavbarLogo>
            <NavbarItem>
                <Link to='/'>Interactive</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='/'>Commnunity</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='/'>Databank</Link>
            </NavbarItem>
            <NavbarItem>
                <Link to='/'>Disney+</Link>
            </NavbarItem>
        </NavbarList>
    </NavbarContainer>
  )
}

export default Navbar