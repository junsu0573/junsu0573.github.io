import styles from "./CategoryCard.module.css";
function CategoryCard({ icon, title, subTitle }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Icon}>{icon}</div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.SubTitle}>{subTitle}</div>
    </div>
  );
}

export default CategoryCard;
