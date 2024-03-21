import React from 'react'
import ImagePage from './ImagePage/ImagePage'
import Box from '@mui/material/Box'
import { useMediaQuery, useScrollTrigger } from '@mui/material'
import { animation } from '~/components/animation/Animation'


function DoubleImagePage({ imageUrl }) {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))


  const onScrollElement = document.getElementsByClassName('onscroll')

  const scrollTrigger = useScrollTrigger({
    target: ,
    disableHysteresis: true,
  })

  return (
    <div className='onscroll'>
      <Box
        sx={{
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '0.5rem 1rem',
          position: 'relative',
          ...(mobile && { flexDirection: 'column' }),
          animation: scrollTrigger ? `${animation.titleKeyFrame} 1.2s ease-in-out 1 forwards` : 'none'
        }}
      >
        {imageUrl.map((image) => (
          <ImagePage imageUrl={image} mobile={mobile} key={image.title}/>
        ))}
      </Box>
    </div>
  )
}

export default DoubleImagePage
