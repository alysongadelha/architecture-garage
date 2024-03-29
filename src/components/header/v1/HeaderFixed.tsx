import HeaderContainer from './HeaderContainer'
import architectureGarageLogo from '@/assets/logo-fixed.svg'

interface Props {
  isFixedNav: boolean
  pageName: string
}
const HeaderFixed = ({ isFixedNav, pageName }: Props) => {
  return (
    <div
      className={`${
        isFixedNav ? 'opacity-100 ' : 'opacity-0'
      } fixed top-0 w-full bg-logoColor-surfaceMuted drop-shadow-lg transition-opacity`}
    >
      <HeaderContainer
        imageProps={{
          src: architectureGarageLogo,
          alt: 'small logo',
          width: 50,
        }}
        pageName={pageName}
      />
    </div>
  )
}

export default HeaderFixed
