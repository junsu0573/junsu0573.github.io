import styles from "./TagCard.module.css";
function TagCard({ img, tip, size }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Box}>
        <img
          className={styles.Logo}
          src={img}
          alt=""
          style={{ width: size, height: size }}
        />
      </div>
      <p className={styles.Tip}>{tip}</p>
    </div>
  );
}
export default TagCard;
