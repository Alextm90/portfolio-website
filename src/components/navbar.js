import React from 'react'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <button></button>
      </div>
      <p>Alex Miserandino</p>
      <div className="links">
        <a href="Skills">Skills</a>
        <a href="Projects">Projects</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar
