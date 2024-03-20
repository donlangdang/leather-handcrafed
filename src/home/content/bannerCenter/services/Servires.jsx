import Box from '@mui/material/Box'
import BoxServices from './boxServices/BoxServices'

const services = [
  {
    title: 'cá nhân hóa',
    description: 'ở đây chúng tôi ưu tiên tùy chọn cá nhân hóa để khách hàng hài lòng nhất với sản phẩm'
  },
  {
    title: 'bảo dưỡng',
    description: 'miễn phí bảo hành, bảo dưỡng dành cho khách hàng mua và đặt hàng tại chúng tôi'
  },
  {
    title: 'phục hồi',
    description: 'phục hồi, bảo dưỡng tùy chỉnh và cá nhân hóa các sản phẩm từ những thương hiệu lớn'
  }
]

function Servires({ mobile }) {
  return (
    <Box
      sx={{
        // width: '100%',
        // height: 'auto',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        gap: '2rem',
        padding: mobile ? '0' : '0 15rem 0 15rem',
        marginBottom: '3rem',
        ...(mobile && { overflow: 'scroll' })
      }}
    >
      {services.map((service) => (
        <BoxServices service={service} key={service.title} mobile={mobile}/>
      ))}
    </Box>
  )
}

export default Servires