import Box from '@mui/material/Box'

function Image() {
  return (
    <Box
      sx={{
        width: '50%',
        height: '100%',
        borderRight: '1px Solid black'
      }}
    >
      <Box
        component='img'
        src='http://localhost:5000/src/assets/image/dacbiet.jpg'
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </Box>
  )
}

export default Image