import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";
function CategoryCard({ icon, title, subTitle }) {
  return (
    <div className={styles.Container}>
      <Link to={"/posts"}>
        <div className={styles.Box}>
          <div className={styles.Icon}>{icon}</div>
          <div className={styles.Title}>{title}</div>
          <div className={styles.SubTitle}>{subTitle}</div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
