import NavBar from '~/navBar/navBar'
import BannerSlider from '~/bannerSlider/bannerSlider'
import images from '~/apis/images'
import Content from './content/Content'


function App() {

  return (
    <>
      <NavBar />
      <BannerSlider images={images}/>
      <Content />
    </>
  )
}

export default App
