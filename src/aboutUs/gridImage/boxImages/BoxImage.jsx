import * as React from 'react'
import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import imagesGridAboutUs from '~/apis/imagesGridAboutUs'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { keyframes } from '@mui/material'
import Box from '@mui/material/Box'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})


const nextAnimationImages = keyframes`
  from {
    opacity: 1;
    transform: translate(100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

const prevAnimationImages = keyframes`
  from {
    opacity: 1;
    transform: translate(-100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

function BoxImage({ index }) {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [nextImageIndex, setNextImageIndex] = useState(index)
  const handleNextImage = () => {
    setNextImageIndex((nextImageIndex + 1) % imagesGridAboutUs.length)
  }
  const handlePrevImage = () => {
    setNextImageIndex((nextImageIndex - 1 + imagesGridAboutUs.length) % imagesGridAboutUs.length)
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
      <Dialog
        TransitionComponent={Transition}
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            bgcolor: 'black',
            height: '100vh'
          }}
        >
          <CloseIcon
            sx={{
              height: '2.5rem',
              width: '2.5rem',
              cursor: 'pointer',
              position: 'relative',
              right: '-17.5%',
              transform: 'translate(-50%, 0 )',
              color: 'white'
            }}
            fontSize='large'
            onClick={handleClose}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <IconButton onClick={handlePrevImage}>
              <ChevronLeftIcon fontSize='large' sx={{ color: 'white', height: '2.5rem', width: '2.5rem' }}/>
            </IconButton>
            <Box
              component='img'
              src={imagesGridAboutUs[nextImageIndex].url}
              sx={{
                height:'auto',
                width: '35%',
                objectFit: 'contain',
                objectPosition: 'center',
                aspectRatio: '3/4',
                ...(handlePrevImage && { animation: `${prevAnimationImages} 0.5s ease-in-out 1 forwards` }),
                ...(handleNextImage && { animation: `${nextAnimationImages} 0.5s ease-in-out 1 forwards` }),
                // animation: `${nextAnimationImages} 0.5s ease-in-out 1 forwards`
              }}
            />
            <IconButton onClick={handleNextImage}>
              <ChevronRightIcon fontSize='large' sx={{ color: 'white', height: '2.5rem', width: '2.5rem' }}/>
            </IconButton>
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default BoxImage