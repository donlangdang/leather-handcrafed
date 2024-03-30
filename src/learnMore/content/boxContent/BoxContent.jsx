import Box from '@mui/material/Box'

function BoxContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: 'auto'
      }}
    >
      <Box
        component='img'
        sx={{
          width: '60%',
          aspectRatio: '3/2',
          objectFit: 'cover',
          border: '2px solid white',
          position: 'relative'
        }}
        src='http://localhost:5000/src/assets/image/contentBanner.jpg'
        alt="Đây là ảnh"
      />
      <Box
        sx={{
          position: 'absolute',
          height: '80%',
          aspectRatio: '2/3',
          overflow: 'clip',
          backdropFilter: 'blur(10px)',
          right: '10%',
          top: '10%',
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

export default BoxContent