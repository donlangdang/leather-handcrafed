import ButtonAndProduct from './buttonAndProduct/ButtonAndProduct'
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
        overflow: 'hidden',
        zIndex: 0,
        position: 'relative',
        flex: 1
      }}
    >
      <Box
        sx={{
          '&:hover': {
            animation: `${imageKeyFrame} 0.3s ease-in-out 1 forwards`
          }
        }}
      >
        <ButtonAndProduct imageUrl={imageUrl} />
        <Box
          component='img'
          src={imageUrl.url}
          alt="Đây là ảnh"
          sx={{
            width: '100%',
            height: '100%'
          }}
        />
      </Box>
    </Box>
  )
}

export default ImagePage