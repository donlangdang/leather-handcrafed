import Box from '@mui/material/Box'
import './banner.css'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
// import { useEffect, useRef } from 'react'


function Banner() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const tablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'lg'))

  // b1: ở đây khi component chạy thì bannerRef sẽ được khai báo rồi component được mount khi này ref={bannerRef}
  // b2: ở đây sau khi rendẻr ra giao diện thì useEffect mới được gọi và thực hiện callback 1 lần vì dependencies là array rỗng
  // note: vì useEffect được khai báo và chạy callback sau khi component được mount vì vậy bannerRef.current là DOM
  // đây là cách lấy ra DOM
  // const bannerRef = useRef()
  // useEffect(() => {
  //   const element = bannerRef.current
  // console.log('🚀 ~ Banner ~ element:', element)
  // const observer = new IntersectionObserver(() => {

  // }, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold:  0
  // }
  // )
  // }, [])


  return (
    <Box
      sx={{
        aspectRatio: mobile ? '1/2' : (tablet ? '1/1' : '2/1')
      }}
      className='banner'
    >
      <Box
        sx={{
          ...(mobile && { flexDirection: 'column' }),
          ...(tablet && { width: '60%' })
        }}
        className='title'
      >
        <Typography
          sx={{
            fontWeight: '500',
            flex: '1',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
          variant={mobile ? 'h5' : 'h4'}
        >
          goda decor leather handcrafted
        </Typography>
        <Box
          sx={{
            height: mobile ? '2px' : '100%',
            width: mobile ? '100%' : '2px',
            bgcolor: 'white'
          }}
        />
        <Typography
          sx={{
            fontWeight: '500',
            flex: '1'
          }}
          variant='subtitle1'
        >
          chuyên gia công các sản phẩm từ da thật, đồ decor làm từ da và phục hồi các sản phẩm làm từ da thật cao cấp
        </Typography>
      </Box>
    </Box>
  )
}

export default Banner