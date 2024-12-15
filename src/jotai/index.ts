import { atom } from "jotai";
import { NavbarEnum, projects } from "../data";

export const navbarAtom = atom<NavbarEnum>(NavbarEnum.Home);

export const projectsAtom = atom(projects);
