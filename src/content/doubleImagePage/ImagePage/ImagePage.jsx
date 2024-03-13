import { Box, keyframes } from '@mui/material'


const imageKeyFrame = keyframes`
  to {
    transform: scale(1.1)
  }
`
function ImagePage({ imageUrl }) {
  return (
    <Box
      sx={{
        aspectRatio: '3/4',
        overflow: 'hidden'
      }}
    >
      <Box
        component='img'
        src={imageUrl}
        alt="Đây là ảnh"
        sx={{
          width: '100%',
          height: '100%',
          '&:hover': {
            animation: `${imageKeyFrame} 0.3s ease-in-out 1 forwards`
          }
        }}
      />
    </Box>
  )
}

export default ImagePage