import { atom } from "jotai";
import { TOption } from "./types";

//* change to actual navbar options
const options: TOption[] = [
  {
    state: "CLOSE",
    link: "/",
    name: "What we do",
    children: [
      {
        state: "CLOSE",
        link: "/",
        name: "l",
      },
      {
        state: "CLOSE",
        link: "/",
        name: "link2",
        children: [
          {
            link: "/",
            name: "link3",
            state: "CLOSE",
            children: [
              {
                state: "CLOSE",
                link: "/",
                name: "c1",
              },

              {
                state: "CLOSE",
                link: "/",
                name: "c2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    state: "CLOSE",
    link: "/",
    name: "Home",
  },

  {
    state: "CLOSE",
    link: "/",
    name: "Partners",
  },
  {
    state: "CLOSE",
    link: "/",
    name: "Get involved",
  },
];
export const optionsAtom = atom<TOption[]>(options);
