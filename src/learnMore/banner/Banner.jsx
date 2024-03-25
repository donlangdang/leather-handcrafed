import Box from '@mui/material/Box'
import './banner.css'
import { Typography } from '@mui/material'

function Banner() {
  return (
    <Box>
      <Box className='banner'>
        <Box
          component='img'
          className='bannerImage'
          src='https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/369804474_6537438223019468_4418776661903278619_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OyRuQMfzMvoAX9jTtrb&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfA7FMF6e-19JNXRu3Bf1mvRhtKcXCnzlFlT-dNsBlR7DQ&oe=6606E3C7'
          alt="Đây là ảnh"
        />
        <Box className='title'>
          <Typography
            sx={{
              fontWeight: '500'
            }}
            variant='h1'
          >
            goda decor leather handcrafted
          </Typography>
        </Box>
      </Box>
      asd
    </Box>
  )
}

export default Banner