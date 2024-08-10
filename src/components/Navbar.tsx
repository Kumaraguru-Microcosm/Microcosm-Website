import { useEffect } from "react";
import Submenu from "./Submenu";
import { optionsAtom } from "../state";
import { useAtom } from "jotai";
import { TOption } from "../types";

const Navbar = () => {
  const [navOptions, setNavOptions] = useAtom(optionsAtom);

  useEffect(() => {
    const handleBodyClick = () => {
      if (navOptions.some((n) => n.state === "OPEN")) {
        closeAll();
      }
    };
    document.body.addEventListener("click", handleBodyClick);

    return () => document.body.removeEventListener("click", handleBodyClick);
  }, []);

  const closeAll = () => {
    setNavOptions((prev) => recursivelySetClose(prev));
  };

  const recursivelySetClose = (options: TOption[]) => {
    let oldOptns = [...options];
    oldOptns = oldOptns.map((o) => {
      o.state = "CLOSE";
      if (o.children) {
        let childs = recursivelySetClose(o.children);
        o.children = childs;
      }
      return o;
    });
    return oldOptns;
  };

  return (
    <div className="flex justify-between p-10 items-center">
      <img src="/logo.svg" alt="logo" className="" />
      <div>
        <ul className="font-medium flex gap-12 text-md text-center">
          <Submenu recursivelySetClose={recursivelySetClose} />
          <li>
            <button
              className="bg-black text-white py-2 px-5 rounded-md"
              onClick={closeAll}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
