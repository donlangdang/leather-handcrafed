import { Box } from '@mui/material'
import React from 'react'
import image from '~/assets/image/6.png'

function bannerSlider() {
  return (
    <Box sx={{
      padding: '0',
      margin: '0',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: '0',
      zIndex: 0
    }}
    >
    </Box>
  )
}

export default bannerSlider