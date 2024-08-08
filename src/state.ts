import { atom } from 'jotai'
import { TOption } from './types'

const options: TOption[] = [
  {
    state: 'CLOSE',
    link: '/',
    name: 'What we do',
    children: [{ state: 'CLOSE', link: '/', name: 'link2' }],
  },

  {
    state: 'CLOSE',
    link: '/',
    name: 'Home',
  },

  {
    state: 'CLOSE',
    link: '/',
    name: 'Partners',
  },
  {
    state: 'CLOSE',
    link: '/',
    name: 'Get involved',
  },
]
export const optionsAtom = atom<TOption[]>(options)
