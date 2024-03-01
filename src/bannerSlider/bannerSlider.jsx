import React from 'react'
import image from '~/assets/image/3.jpg'
import MyButton from '~/navBar/myButtom'
import { Box, Typography } from '@mui/material'

function bannerSlider() {
  return (
    <Box sx={{
      aspectRatio: '16/9',
      top: '0',
      zIndex: 0,
      position: 'relative'
    }}
    >
      <Box sx={{
        backgroundImage: `url(${image})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '20%',
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center'
          }}
        >
          <Typography variant="h3" align='center' gutterBottom>
            CHÀO MỪNG ĐẾN VỚI GODA DECOR & LEATHER
          </Typography>
          <MyButton>TÌM HIỂU THÊM</MyButton>
        </Box>
      </Box>
    </Box>
  )
}

export default bannerSlider