import Dialog from '@mui/material/Dialog'
import CloseIcon from '@mui/icons-material/Close'
import imagesGridAboutUs from '~/apis/imagesGridAboutUs'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Box from '@mui/material/Box'

function DialogImages({
  Transition,
  open,
  imageAnimation,
  handleClose,
  handleNextImage,
  handlePrevImage,
  nextImageIndex
}) {
  return (
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
            justifyContent: 'center',
            overflow: 'clip'
          }}
        >
          <IconButton onClick={handlePrevImage}>
            <ChevronLeftIcon fontSize='large' sx={{ color: 'white', height: '2.5rem', width: '2.5rem' }}/>
          </IconButton>
          <Box
            sx={{
              width: '35%',
              height:'auto',
              overflow: 'clip',
              aspectRatio: '3/4'
            }}
          >
            <Box
              // react thấy key thay đổi thì sẽ tự động coi component đó là mới hoàn toàn và render lại từ đầu vì vậy animation được render theo nó
              key={nextImageIndex}
              component='img'
              src={imagesGridAboutUs[nextImageIndex].url}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                animation: `${imageAnimation} 0.5s ease-in-out 1 forwards`
              }}
            />
          </Box>
          <IconButton onClick={handleNextImage}>
            <ChevronRightIcon fontSize='large' sx={{ color: 'white', height: '2.5rem', width: '2.5rem' }}/>
          </IconButton>
        </Box>
      </Box>
    </Dialog>
  )
}

export default DialogImages