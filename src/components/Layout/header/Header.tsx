import HeaderMain from "./HeaderMain"
import HeaderNavBar from "./HeaderNavBar"
import HeaderTopBar from "./HeaderTopBar"

const Header = () => {
  return (
    <header className='bg-white border-gray-200 text-black'>
      <HeaderTopBar />
      <HeaderMain />
      <HeaderNavBar />
    </header>
  )
}

export default Header
