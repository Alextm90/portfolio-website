import styles from "./Navbar.module.css";
import { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  // control navbar
  const handleClick = () => {
    setNavbar((prev) => !prev);
  };

  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <div className={styles.navbar} id={navbar ? styles.open : styles.close}>
        <p>Alex Miserandino</p>
        <div className={styles.menu}>
          <button onClick={handleClick}>
            {navbar ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
        <ul className={styles.nav}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id={navbar ? styles.menuContainerOpen: styles.menuContainerClose}>
        <ul onClick={handleClick}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

