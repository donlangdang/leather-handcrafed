import { Box } from '@mui/material'
import images from '~/apis/images'

function Content() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1
      }}
    >
      {images.map((image) => (
        <Box
          sx={{
            width: '20%',
            height: '40%',
            bgcolor: '#333',
            flex: '1',
            backgroundImage: `url(${image.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          key={image.url}
        ></Box>
      ))}
    </Box>
  )
}

export default Content