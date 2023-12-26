import Logo from "./assets/shared/desktop/logo.svg";
import Hamburger from "./assets/shared/tablet/icon-hamburger.svg";
import CartIcon from "./assets/shared/desktop/icon-cart.svg";
import styles from "./header.module.css";

function App() {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger}>
        <img src={Hamburger} alt="hamburger menu" />
      </button>
      <img src={Logo} alt="Audiophile logo" />
      <nav className={styles.desktopNav}>
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
      </nav>
      <button className={styles.cartBtn}>
        <img src={CartIcon} alt="cart logo" />
      </button>
    </header>
  );
}

export default App;
