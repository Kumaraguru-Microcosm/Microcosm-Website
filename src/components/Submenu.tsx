import { useAtom } from 'jotai'
import { TOption } from '../types'
import { optionsAtom } from '../state'

const Submenu = ({ options }: { options?: TOption[] }) => {
  const [navOptions, setNavOptions] = useAtom(optionsAtom)
  return (
    <div className='content-center flex gap-12'>
      {navOptions.map((option) => (
        <div className='content-center'>
          {!option.children ? (
            <a href={option.link}>{option.name}</a>
          ) : option.state === 'OPEN' ? (
            <Submenu options={option.children} />
          ) : (
            <div className='flex gap-2'>
              <a href={option.link}>{option.name}</a>
              <img
                src='/arrowdown.svg'
                alt='arrowdown'
                className='justify-end'
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Submenu
