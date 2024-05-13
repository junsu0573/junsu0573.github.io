import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import TagField from "../components/TagField";

function Posts() {
  return (
    <div>
      <Header />
      <MainBanner background={"videos/studying_boy.mp4"} />
      <TagField />
    </div>
  );
}

export default Posts;
