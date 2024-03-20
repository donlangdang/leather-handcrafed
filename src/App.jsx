import images from '~/apis/images'
import Home from './home/Home'
import NavBar from '~/components/navBar/navBar'
import Footer from '~/components/footer/Footer'


function App() {

  return (
    <>
      <NavBar />
      <Home images={images} />
      <Footer />
    </>
  )
}

export default App
