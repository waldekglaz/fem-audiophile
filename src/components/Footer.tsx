import Logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../constants";
import styles from "./footer.module.css";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Audiophile Logo" />
      <ul>
        {MENU_ITEMS.map((item) => (
          <li>
            <Link to={item.src}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <p className={styles.mainParagraph}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className={styles.description}>Copyright 2021. All Rights Reserved</p>
      <div className={styles.socials}>
        <a href="facebook.com">
          <img src={FacebookIcon} alt="facebook icon" />
        </a>
        <a href="twitter.com">
          <img src={TwitterIcon} alt="twitter icon" />
        </a>
        <a href="instagram.com">
          <img src={InstagramIcon} alt="instagram icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
