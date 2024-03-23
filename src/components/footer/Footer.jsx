import Box from '@mui/material/Box'
import leatherIcon from '~/assets/leather.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import { Link, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'

function Footer() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const tablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'lg'))

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        bgcolor: 'black'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: mobile || tablet ? '2rem 2rem 2rem 2rem' : '2rem 15rem 2rem 15rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...(mobile && { flexDirection: 'column' }),
          color: 'white',
          gap: 3
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 1,
            alignItems: 'flex-start'
            // bgcolor: 'red'
          }}
        >
          <Typography variant="h5" align='left' gutterBottom>
            Chính Sách
          </Typography>
          <Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Hướng dẫn mua hàng
          </Link>
          <Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Chính sách bảo hành
          </Link>
          <Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Chính sách giao hàng
          </Link>
          <Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Chính sách thanh toán
          </Link>
          <Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Chính sách bảo mật
          </Link>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 1,
            alignItems: 'flex-start'
          }}
        >
          <Typography variant="h5" align='left' gutterBottom>
            LIÊN KẾT NHANH
          </Typography>
          <Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Thông tin về cửa hàng
          </Link><Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Tìm kiếm
          </Link><Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Về GoDa Decor & Leather
          </Link><Link
            sx={{
              color: 'white',
              '&:hover': {
                color: '#333'
              }
            }}
            href="#"
            underline="none"
          >
            Phản hồi từ khách hàng
          </Link>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SvgIcon component={leatherIcon} fontSize='small' inheritViewBox />
            <Box>GoDa Decor & leather Handcrafted</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LocationOnIcon />
            <Box>Số nhà: 59 đường Tây sơn, phường Tân Tiến, thành phố Buôn Ma thuột, tỉnh Đăk lăk</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LocalPhoneIcon />
            <Box>Số Điện Thoại: 0845414579, 0940100191</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <EmailIcon />
            <Box>Email: dodadecor@gmail.com, tranhuutu@gmail.com</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer