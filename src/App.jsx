import NavBar from '~/navBar/navBar'
import images from '~/apis/images'
import Home from './home/Home'


function App() {

  return (
    <>
      <NavBar />
      <Home images={images} />
    </>
  )
}

export default App
