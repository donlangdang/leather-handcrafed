import NavBar from '~/navBar/navBar'
import BannerSlider from '~/bannerSlider/bannerSlider'
import images from '~/apis/images'


function App() {

  return (
    <>
      <NavBar />
      <BannerSlider images={images}/>
      Làm các thẻ và thông tin
    </>
  )
}

export default App
