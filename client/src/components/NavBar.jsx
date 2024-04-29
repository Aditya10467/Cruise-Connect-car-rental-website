import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { useSelector } from 'react-redux'
import logo from '../assets/images/logo2.png';

const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <nav
      className={
        userInfo?.isAdmin ? 'hidden' : 'navbar flex items-center justify-between px-10 bg-neutral h-20'
      }
    >
      <Link to="/" className="text-xl font-bold italic" style={{ color: '#ff0000' ,fontFamily:'Montserrat, sans-serif', fontStyle: 'italic' }}>
        <img src={logo} alt="Cruise Connect Logo" width="100" height="20" />
      </Link>
      <div className="hidden md:flex space-x-14 items-center"> {/* Only show links on medium screens and larger */}
        <Link to="/" className="custom-link">Home</Link>
        <Link to="/cars" className="custom-link">Cars</Link>
        <Link to="/about" className="custom-link">About</Link>
        <Link to="/contact" className="custom-link">Contact</Link>
        {userInfo && !userInfo.isAdmin ? (
          <Link to="/my-account" className="btn btn-sm  btn-outline btn-secondary">
            My Account
          </Link>
        ) : (
          <Link to="/sign-in" className="btn btn-sm  btn-outline btn-secondary">
            Login
          </Link>
        )}
      </div>
      <HamburgerMenu />
    </nav>
  )
}

export default NavBar
