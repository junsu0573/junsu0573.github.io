import styles from "./Categories.module.css";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className={styles.Container}>
      <CategoryCard
        icon={
          <i class="fa-solid fa-newspaper" style={{ color: "#337ea9" }}></i>
        }
        title={"POSTS"}
        subTitle={"0 Articles"}
      />
      <CategoryCard
        icon={<i class="fa-solid fa-rocket" style={{ color: "#D44C47" }}></i>}
        title={"PROJECTS"}
        subTitle={"0 Projects"}
      />
      <CategoryCard
        icon={
          <i class="fa-solid fa-address-card" style={{ color: "#448361" }}></i>
        }
        title={"ABOUT"}
        subTitle={"Info"}
      />
    </div>
  );
}

export default Categories;
