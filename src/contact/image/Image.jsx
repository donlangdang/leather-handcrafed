import Box from '@mui/material/Box'

function Image({ mobile }) {
  return (
    <Box
      sx={{
        backgroundImage: 'url(http://localhost:5000/src/assets/image/dacbiet.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flex: 1,
        aspectRatio: '3/4',
        height: 'auto',
        width: '100%'
      }}
    >

    </Box>
  )
}

export default Image