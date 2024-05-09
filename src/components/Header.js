import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.Container}>
      <Link to="/" className={styles.Logo}>
        BLOG LOGO
      </Link>
      <div className={styles.Nav}>
        <Link to="/posts" className={styles.Item}>
          POSTS
        </Link>
        <Link to="/projects" className={styles.Item}>
          PROJECTS
        </Link>
        <Link to="/about" className={styles.Item}>
          ABOUT
        </Link>
      </div>
    </div>
  );
}

export default Header;
