import Box from '@mui/material/Box'
import images from '~/apis/images'


function BoxServices() {
  return (
    <Box>
      <Box
        sx={{
          flex: 1,
          bgcolor: '#333',
          aspectRatio: '1/1',
          backgroundImage: `url(${images[0].url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </Box>
    </Box>
  )
}

export default BoxServices