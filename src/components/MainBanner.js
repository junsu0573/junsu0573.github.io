import styles from "./MainBanner.module.css";
function MainBanner() {
  return (
    <div className={styles.Container}>
      <video muted autoPlay loop playsInline>
        <source src="videos/simpsons_wallpaper.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default MainBanner;
