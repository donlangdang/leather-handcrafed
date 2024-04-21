import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DialogActions, DialogContent, DialogContentText } from '@mui/material'
import Slide from '@mui/material/Slide'
import * as React from 'react'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})


function BoxImage({ gridImage }) {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
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
          filter: 'grayscale(100%)',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}
        src={gridImage.url}
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
              height: '3rem',
              width: '3rem',
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
            component='img'
            src={gridImage.url}
            sx={{
              height:'auto',
              width: '35%',
              objectFit: 'contain',
              objectPosition: 'center',
              aspectRatio: '3/4',
            }}
          />
        </Box>
      </Dialog>
    </Box>
  )
}

export default BoxImage