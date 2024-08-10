export type TOptionstate = "OPEN" | "CLOSE";
export type TOption = {
  name: string;
  link: string;
  children?: TOption[];
  state: TOptionstate;
};

export type TCarouselItem = {
  imgUrl: string;
  text: string;
  headText: string;
};
