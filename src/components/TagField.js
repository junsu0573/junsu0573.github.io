import TagCard from "./TagCard";
import styles from "./TagField.module.css";
function TagField() {
  return (
    <div className={styles.Container}>
      <TagCard img={"/images/CSS_logo.png"} tip={"CSS"} />
      <TagCard img={"/images/HTML_logo.png"} tip={"HTML"} />
      <TagCard img={"/images/Javascript_logo.png"} tip={"Javascript"} />
      <TagCard img={"/images/React_logo.png"} tip={"ReactJS"} size={"100%"} />
    </div>
  );
}
export default TagField;
