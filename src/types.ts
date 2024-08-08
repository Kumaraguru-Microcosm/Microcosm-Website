export type TOptionstate = 'OPEN' | 'CLOSE'
export type TOption = {
  name: string
  link: string
  children?: TOption[]
  state: TOptionstate
}
