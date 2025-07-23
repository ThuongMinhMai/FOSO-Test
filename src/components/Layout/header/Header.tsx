import HeaderMain from "./HeaderMain"
import HeaderNavBar from "./HeaderNavBar"
import HeaderTopBar from "./HeaderTopBar"

const Header = ({ scrollToProductGrid }: { scrollToProductGrid: () => void }) => {
  return (
    <header className='bg-white border-gray-200 text-black'>
      <HeaderTopBar />
      <HeaderMain scrollToProductGrid={scrollToProductGrid}  />
      <HeaderNavBar />
    </header>
  )
}

export default Header
