import Logo from "../assets/shared/desktop/logo.svg";
import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import CartIcon from "../assets/shared/desktop/icon-cart.svg";
import styles from "./header.module.css";
import DesktopNav from "./DesktopNav";

function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger}>
        <img src={Hamburger} alt="hamburger menu" />
      </button>
      <img src={Logo} alt="Audiophile logo" />
      <DesktopNav />
      <button className={styles.cartBtn}>
        <img src={CartIcon} alt="cart logo" />
      </button>
    </header>
  );
}

export default Header;
