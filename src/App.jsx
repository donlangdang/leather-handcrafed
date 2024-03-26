import NavBar from '~/components/navBar/navBar'
import Footer from '~/components/footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar />
      {/* khai báo <Outlet /> ở đây để khi chuyển trang thì các component của path đó sẽ được ghi vào <Outlet /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
