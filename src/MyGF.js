import image from "./assets/images/yein.png";

function MyGF() {
  return (
    <div>
      <h1 className=" text-2xl">제 여자친구입니다</h1>
      <h1 className=" text-4xl">이름은 김예인이구요</h1>
      <h1 className=" text-xl">생긴건 저래도 착해요...</h1>
      <img src={image} alt="yein" />
    </div>
  );
}

export default MyGF;
