import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-scroll";

function Navbar() {

  const handleClick = () => {
    setNavbar((prev) => !prev);
  };

  const [navbar, setNavbar] = useState(false);
  return (
    <div className="navbar" id={navbar ? "open" : "close"}>
      <div className="menu">
        <button onClick={handleClick}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <a href="Skills">Skills</a>
        <a href="Projects">Projects</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
