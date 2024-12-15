import { useEffect } from "react";

const useScript = (url = "./script.js") => {
  useEffect(() => {
    const script = document.createElement("script");

    script.innerText = `var swiper = new Swiper(".default-carousel", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
