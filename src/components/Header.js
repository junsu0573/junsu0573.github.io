import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.Container}>
      <Link to="/" className={styles.Logo}>
        BLOG LOGO
      </Link>
      <ul className={styles.Nav}>
        <Link to="/posts">
          <li className={styles.Item}>POSTS</li>
        </Link>
        <Link to="/projects">
          <li className={styles.Item}>PROJECTS</li>
        </Link>
        <Link to="/about">
          <li className={styles.Item}>ABOUT</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
