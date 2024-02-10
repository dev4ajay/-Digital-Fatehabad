import React from 'react'
import '../Style/modern-business.css'
import { Link } from 'react-router-dom'

const Header = () => {
	
  return (
    <div>
     <nav className="navbar fixed-top navbar-expand-lg navbar-dark fixed-top" style={{ background: "#1a538e" }}>
      <div className="container">
        <Link to="/">
          <div style={{ textAlign: "center", fontSize: "25px", marginTop: "-10px", textShadow: "1px 1px 1px #000000" }}>
            <span className='text-white'> Digital</span><span style={{ marginLeft: "0px", color: "#FFD906" }}>Fatehabad</span><span
              style={{ marginLeft: "0px" }}><span className='text-white'>.com</span></span></div>
          <div style={{ textAlign: "center", marginTop: "-9px", marginRight: "0px", fontSize: "12px", color: '#fff', textDecoration: 'none' }}>A Business Directory</div>
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle "  href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white' }}>About</a>
              <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <li className="dropdown-submenu">
                  <Link to="/about" className="dropdown-item" tabIndex="-1" >About Website</Link>
                </li>
                <li className="dropdown-submenu">
                  <Link to="/about" className="dropdown-item" tabIndex="-1" >About City</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"  style={{color:'white'}}>Business Directory</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link"  style={{color:'white'}}>Register Your Business</Link>
            </li>
            <li className="nav-item">
              <a href='https://news.digitalfatehabad.com/' className="nav-link"  style={{color:'white'}}>News</a>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link"  style={{color:'white'}}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <a  href='https://admin.digitalfatehabad.com/' className="nav-link"  style={{color:'white'}}>🔏</a>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header
