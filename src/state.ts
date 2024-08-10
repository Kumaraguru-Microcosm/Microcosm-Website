import { atom } from "jotai";
import { TCarouselItem, TOption } from "./types";

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

const carouselItems: TCarouselItem[] = [
  {
    imgUrl: "bg-[url('/forest.png')]", //? since tailwind doesn't support dynamic style imgUrl is a bg url style
    text: `KCT has a sprawling campus of 150 Acres. Four academic blocks and 
 administrative block constitute more than one-fourth of the campus area. Playgrounds for various sports enfold 23 acres.`,
    headText: "Microcosm",
  },
];
export const carouselAtom = atom<TCarouselItem[]>(carouselItems);
export const currentCarouselItemAtom = atom(0);
