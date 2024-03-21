import ButtonAndProduct from './buttonAndProduct/ButtonAndProduct'
import { Box, keyframes } from '@mui/material'

const imageKeyFrame = keyframes`
  to {
    transform: scale(1.1)
  }
`

const cardKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100%);
  }

  to {
    opacity: 1,
    transform: translate(0, 0);
  }
`
function ImagePage({ imageUrl, mobile }) {


  return (
    <Box
      sx={{
        aspectRatio: '3/4',
        overflow: 'hidden',
        zIndex: 0,
        position: 'relative',
        flex: 1,
        animation: `${cardKeyframes} ease-in-out`,
        animationTimeline: 'view()',
        animationRange: 'entry 10% contain 25%'
      }}
    >
      <Box
        sx={{
          '&:hover': {
            animation: `${imageKeyFrame} 0.3s ease-in-out 1 forwards`
          }
        }}
      >
        <ButtonAndProduct imageUrl={imageUrl} mobile={mobile} />
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