import BannerSlider from './bannerSlider/BannerSlider'
import Content from './content/Content'
import Footer from './footer/Footer'

function Home({ images }) {
  return (
    <>
      <BannerSlider images={images} />
      <Content />
      <Footer />
    </>
  )
}

export default Home