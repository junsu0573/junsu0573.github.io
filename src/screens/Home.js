import Categories from "../components/Categories";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";

function Home() {
  return (
    <div>
      <Header />
      <MainBanner background={"videos/simpsons_wallpaper.mp4"} />
      <Categories />
    </div>
  );
}

export default Home;
