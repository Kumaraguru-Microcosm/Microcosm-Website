import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Captcha from "../components/Captcha";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("email", email);
    form.append("subject", subject);
    form.append("message", message);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwZ1dGFTTknzEuzTTDM_woY9PVCO8c0dvUM8ULwLFB1e15t2mQ1SdKsvx_EEfIA4psmag/exec",
        {
          method: "POST",
          body: form,
        },
      );
      // const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/mail`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     to: email,
      //     subject,
      //     text: message,
      //   }),
      // });
      const respJson = await res.json();
      console.log(respJson);
      alert("Your message sent successfully");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="mb-50">
        <Header />
      </div>
      <section className="bg-white  mt-20">
        <div className="pt-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <form className="space-y-8" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <div className="flex lg:flex-row flex-col gap-3 justify-between">
              <Captcha onClick={() => setCaptchaVerified(true)} />
              <button
                disabled={!captchaVerified}
                onClick={handleSubmit}
                className={`h-[50px] px-5 text-sm font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 float-right ${!captchaVerified && "bg-gray-400"}`}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Map />
      <Footer />
    </>
  );
};

const Map = () => {
  const iframe = ` <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14338.484200796482!2d76.98921554709541!3d11.079577467358344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7eeb3874255%3A0x71fe012adb75066!2sAhimsa%20Vanam!5e0!3m2!1sen!2sin!4v1738320905802!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  return (
    <div className="flex md:px-[20%] px-5 my-5 gap-10 w-full flex-col md:flex-row">
      <div
        dangerouslySetInnerHTML={{ __html: iframe }}
        className="w-full"
      ></div>
      <div className="flex justify-center items-center w-full flex-col">
        <p className="text-2xl font-bold mt-5">Microcosm</p>
        <p className="text-lg font-bold mb-5 text-center">
          Kumaraguru College of Technology
        </p>
        <p className="">Contact Us</p>
        <ul className="flex gap-5 my-2">
          <li>+91xxxxx</li>
          <li>name@email.com</li>
          <li>microcosm.in</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
