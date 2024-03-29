import DoubleImagePage from './doubleImagePage/DoubleImagePage'
import BannerCenter from './bannerCenter/BannerCenter'


const imageUrl = [
  {
    title: 'ví da',
    url: 'http://localhost:5000/src/assets/image/vida.jpg'
  },
  {
    title: 'dây đồng hồ',
    url: 'http://localhost:5000/src/assets/image/daydongho.jpg'
  },
  {
    title: 'bao khóa',
    url: 'http://localhost:5000/src/assets/image/baokhoa.jpg'
  }
]

const lineTwo = [
  {
    title: 'dây thắt lưng',
    url: 'http://localhost:5000/src/assets/image/content1.jpg'
  },
  {
    title: 'phụ kiện',
    url: 'http://localhost:5000/src/assets/image/phukien.jpg'
  },
  {
    title: 'bảo dưỡng',
    url: 'http://localhost:5000/src/assets/image/baoduong.jpg'
  }
]

function Content() {
  return (
    <>
      <DoubleImagePage imageUrl={imageUrl} Threshold='200'/>
      <DoubleImagePage imageUrl={lineTwo} Threshold='700'/>
      <BannerCenter />
    </>
  )
}

export default Content