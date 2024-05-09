import styles from "./Header.module.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>BLOG LOGO</div>
      <div className={styles.Nav}>
        <Link to="/posts">
          <div className={styles.Item}>POSTS</div>
        </Link>
        <Link to="">
          <div className={styles.Item}>PROJECTS</div>
        </Link>
        <Link to="">
          <div className={styles.Item}>ABOUT</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
