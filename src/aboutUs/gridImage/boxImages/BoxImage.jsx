import * as React from 'react'
import { useState } from 'react'
import Slide from '@mui/material/Slide'
import imagesGridAboutUs from '~/apis/imagesGridAboutUs'
import { keyframes } from '@mui/material'
import Box from '@mui/material/Box'
import DialogImages from './dialogImages/DialogImages'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})


const nextAnimationImages = keyframes`
  from {
    opacity: 0;
    transform: translate(100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

const prevAnimationImages = keyframes`
  from {
    opacity: 0;
    transform: translate(-100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

function BoxImage({ index, mobile }) {

  const [open, setOpen] = useState(false)
  const [nextImageIndex, setNextImageIndex] = useState(index)
  const [imageAnimation, setImageAnimation] = useState()
  // open and close Dialog
  const handleOpen = () => {
    setOpen(true)
    setNextImageIndex(index)
    setImageAnimation()
  }
  const handleClose = () => {
    setOpen(false)
  }
  // next and prev Image
  const handleNextImage = () => {
    setNextImageIndex((nextImageIndex + 1) % imagesGridAboutUs.length)
    setImageAnimation(nextAnimationImages)
  }
  const handlePrevImage = () => {
    setNextImageIndex((nextImageIndex - 1 + imagesGridAboutUs.length) % imagesGridAboutUs.length)
    setImageAnimation(prevAnimationImages)
  }

  return (
    <Box
      sx={{
        bgcolor: 'black',
        textAlign: 'center',
        boxSizing: 'border-box',
        overflow: 'clip',
        borderRadius: '10%',
        cursor: 'pointer'
      }}
    >
      <Box
        onClick={handleOpen}
        component='img'
        sx={{
          height:'100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          aspectRatio: '1/1',
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}
        src={imagesGridAboutUs[index].url}
      />
      <DialogImages
        Transition={Transition}
        open={open}
        imageAnimation={imageAnimation}
        handleClose={handleClose}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
        nextImageIndex={nextImageIndex}
        mobile={mobile}
      />
    </Box>
  )
}

export default BoxImage