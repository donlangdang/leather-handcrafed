import Box from '@mui/material/Box'
import './banner.css'
import { Typography } from '@mui/material'
import { useEffect, useRef } from 'react'


function Banner() {

  // b1: ở đây khi component chạy thì bannerRef sẽ được khai báo rồi component được mount khi này ref={bannerRef}
  // b2: ở đây sau khi rendẻr ra giao diện thì useEffect mới được gọi và thực hiện callback 1 lần vì dependencies là array rỗng
  // note: vì useEffect được khai báo và chạy callback sau khi component được mount vì vậy bannerRef.current là DOM
  // đây là cách lấy ra DOM
  const bannerRef = useRef()
  useEffect(() => {
    const element = bannerRef.current
    // console.log('🚀 ~ Banner ~ element:', element)
    // const observer = new IntersectionObserver(() => {

    // }, {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold:  0
    // }
    // )
  }, [])


  return (
    <Box className='container'>
      <Box className='banner' ref={bannerRef}>
        <Box className='title'>
          <Typography
            sx={{
              fontWeight: '500'
            }}
            variant='h2'
          >
            goda decor leather handcrafted
          </Typography>
        </Box>
      </Box>
      <Box className='content'>
        lorem asd kmasom oka mijjaw nakoia asjk mnaiu n jkask
      </Box>
    </Box>
  )
}

export default Banner