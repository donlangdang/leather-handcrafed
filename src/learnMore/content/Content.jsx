import Box from '@mui/material/Box'
import './content.css'

function Content() {
  return (
    <Box className='content'>
      <Box
        component='img'
        sx={{
          width: '60%',
          aspectRatio: '3/2',
          objectFit: 'cover'
        }}
        src='http://localhost:5000/src/assets/image/contentBanner.jpg'
        alt="Đây là ảnh"
      />
      <Box
        sx={{
          position: 'absolute',
          width: '30%',
          aspectRatio: '9/11',
          bgcolor: 'blur(33px)',
          overflow: 'clip',
          backdropFilter: 'blur(10px)',
          right: '10%',
          border: '2px solid white',
          boxSizing: 'content-box',
          fontSize: '0.75rem',
          textAlign: 'center'
        }}
      >
      </Box>
    </Box>
  )
}

export default Content