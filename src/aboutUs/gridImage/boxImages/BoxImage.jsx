import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { DialogActions, DialogContent, DialogContentText } from '@mui/material'


function BoxImage() {

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
        src='http://localhost:5000/src/assets/image/2.jpg'
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          // bgcolor: 'black'
        }}
      >
        <CloseIcon
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            top: '100%'
          }}
          fontSize='large'
          onClick={handleClose}
        />
        <DialogTitle id="alert-dialog-title">ảnh 1</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">anh 11111111111111</DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default BoxImage