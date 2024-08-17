import React from 'react'
import './header.css'

import Link from 'next/link'

const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>
      <div className="header-right">
        {/* <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
