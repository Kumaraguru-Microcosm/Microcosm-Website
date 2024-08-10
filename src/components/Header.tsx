import { useAtom } from "jotai";
import Navbar from "./Navbar";
import { carouselAtom, currentCarouselItemAtom } from "../state";

const Header = () => {
  const [currItemIdx, setCurrItemIdx] = useAtom(currentCarouselItemAtom);
  const [carouselItems, _] = useAtom(carouselAtom);

  const handleNextClick = () => {
    setCurrItemIdx((currItemIdx + 1) % carouselItems.length);
  };

  const handlePrevClick = () => {
    if (currItemIdx === 0) {
      setCurrItemIdx(carouselItems.length - 1);
    } else {
      setCurrItemIdx((currItemIdx - 1) % carouselItems.length);
    }
  };

  return (
    <div className={`${carouselItems[currItemIdx].imgUrl} h-screen relative`}>
      <div
        className="left absolute left-[10%] top-[60%] cursor-pointer p-3"
        onClick={handlePrevClick}
      >
        <img src="/arrowleftkeyboard.svg" alt="left" />
      </div>
      <Navbar />
      <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] flex flex-col text-center gap-10">
        <h2 className="font-medium text-6xl">
          {carouselItems[currItemIdx].headText}
        </h2>
        <p className="font-semibold text-lg">
          {carouselItems[currItemIdx].text}
        </p>
      </div>
      <div
        className="right absolute right-[10%] top-[60%] cursor-pointer p-3 "
        onClick={handleNextClick}
      >
        <img src="/arrowrightkeyboard.svg" alt="right" />
      </div>
    </div>
  );
};

export default Header;
