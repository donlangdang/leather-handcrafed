import DoubleImagePage from './doubleImagePage/DoubleImagePage'
import BannerCenter from './bannerCenter/BannerCenter'


const imageUrl = [
  {
    title: 'ví da',
    url: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/365310049_6458680500895241_6960470888362626764_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bdHpY8pxw-UAX9vfkbr&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfD4org8xGICizey56UyepW_r_fYQFmEUnd6j8ZM3wPpfg&oe=65F8B93D'
  },
  {
    title: 'dây đồng hồ',
    url: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/370428802_6537437939686163_1798569505760996482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6JmCP2nd6hkAX8xCD90&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfAk4VX4ukDuHGJ9rKMiaVjHUSj-TFR10DtlhEPYh_SNzg&oe=65F81133'
  },
  {
    title: 'bao khóa',
    url: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/340849287_791949078546254_5950581006969837754_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zn0mK99OxDwAX9tfCo3&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfBEnWEmpRjge719nX-7jn6IuAMN3XgTxA2yDpqhmodyiA&oe=65F7C2EA'
  }
]

const lineTwo = [
  {
    title: 'dây thắt lưng',
    url: 'http://localhost:5000/src/assets/image/content1.jpg'
  },
  {
    title: 'phụ kiện',
    url: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/363351121_6429850753778216_835035996502618087_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SEfvQ_m4UDUAX_o2kF2&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfCtiiAZhLnb5PeB90g9IuimzSHIDdBO3BPOSptM_5AT0A&oe=65F80488'
  },
  {
    title: 'bảo dưỡng',
    url: 'https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/363351121_6429850753778216_835035996502618087_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SEfvQ_m4UDUAX_o2kF2&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfCtiiAZhLnb5PeB90g9IuimzSHIDdBO3BPOSptM_5AT0A&oe=65F80488'
  }
]

function Content() {
  return (
    <>
      <DoubleImagePage imageUrl={imageUrl}/>
      <DoubleImagePage imageUrl={lineTwo}/>
      <BannerCenter />
    </>
  )
}

export default Content