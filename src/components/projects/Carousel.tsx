const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <div className="relative">
      <div className="swiper default-carousel swiper-container w-full">
        <div className="swiper-wrapper">
          {images.map((i) => (
            <>
              <div className="swiper-slide">
                <div className="rounded-2xl h-50 md:h-96 flex justify-center items-center">
                  <img src={i} alt="img" className="h-full" />
                </div>
              </div>
            </>
          ))}
          {/* <div className="swiper-slide"> */}
          {/*   <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center"> */}
          {/*     <span className="text-3xl font-semibold text-indigo-600"> */}
          {/*       Slide 1{" "} */}
          {/*     </span> */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className="swiper-slide"> */}
          {/*   <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center"> */}
          {/*     <span className="text-3xl font-semibold text-indigo-600"> */}
          {/*       Slide 2{" "} */}
          {/*     </span> */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className="swiper-slide"> */}
          {/*   <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center"> */}
          {/*     <span className="text-3xl font-semibold text-indigo-600"> */}
          {/*       Slide 3{" "} */}
          {/*     </span> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
        <div className="flex items-center gap-8 lg:justify-start justify-center">
          <button
            id="slider-button-left"
            className="swiper-button-prev group !p-2 flex justify-center items-center  !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8 "
            data-carousel-prev
          >
            <svg
              className="h-5 w-5 text-indigo-600 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            id="slider-button-right"
            className="swiper-button-next group !p-2 flex justify-center items-center  !w-12 !h-12 transition-all duration-500 rounded-full !top-2/4 !-translate-y-8  !right-5 "
            data-carousel-next
          >
            <svg
              className="h-5 w-5 text-indigo-600 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default ImageCarousel;
