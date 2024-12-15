import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/Footer";
import { useAtom } from "jotai";
import { navbarAtom } from "../jotai";
import { NavbarEnum } from "../data";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [_, setNav] = useAtom(navbarAtom);
  setNav(NavbarEnum.Contact);
  return (
    <>
      <div className="mb-50">
        <Navbar notHome />
      </div>
      <section className="bg-white  mt-20">
        <div className="pt-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <form action="#" className="space-y-8">
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
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Map />
      <Footer />
    </>
  );
};

const Map = () => {
  const iframe = ` <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.2990519071263!2d76.99003146509665!3d11.07731852848765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f81b7514a15f%3A0x155e29f8d14154fc!2sKumaraguru%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1733827630983!5m2!1sen!2sin"
      // width="600"
      // height="450"
      style="border:0;"
class="w-full md:w-[600px]"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />`;
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
        <button className="my-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-lg px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-teal-500 transition duration-300 ease-in-out">
          Become a Volunteer
        </button>
      </div>
    </div>
  );
};

export default Contact;
