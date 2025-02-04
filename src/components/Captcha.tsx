import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onClick }) => {
  const captchaRef = useRef(null);
  return (
    <ReCAPTCHA
      ref={captchaRef}
      sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
      onChange={onClick}
    />
  );
};

export default Captcha;
