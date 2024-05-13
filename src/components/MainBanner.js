import styles from "./MainBanner.module.css";
function MainBanner({ background }) {
  return (
    <div className={styles.Container}>
      <video muted autoPlay loop playsInline>
        <source src={background} type="video/mp4" />
      </video>
      <div className={styles.Overlay}>
        <h1 className={styles.Title}>Hello World!</h1>
      </div>
    </div>
  );
}
export default MainBanner;
