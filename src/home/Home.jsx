import BannerSlider from './bannerSlider/BannerSlider'
import Content from './content/Content'

function Home({ images }) {
  return (
    <>
      <BannerSlider images={images} />
      <Content />
    </>
  )
}

export default Home