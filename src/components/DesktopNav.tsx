import styles from "./desktopNav.module.css";
import { Link } from "react-router-dom";

function DesktopNav() {
  return (
    <nav className={styles.desktopNav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/headphones">Headphones</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
          <Link to="/earphones">Earphones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
