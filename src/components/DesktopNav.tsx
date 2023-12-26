import styles from "./desktopNav.module.css";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../constants";

function DesktopNav() {
  return (
    <nav className={styles.desktopNav}>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li>
            <Link to={item.src}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;
