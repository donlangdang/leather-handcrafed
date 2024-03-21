import ButtonAndProduct from './buttonAndProduct/ButtonAndProduct'
import { Box, keyframes } from '@mui/material'


const cardKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50%);
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
        animation: `${cardKeyframes} ease-in-out`
        // animationTimeline: 'view(100% 0%)',
        // animationRange: 'entry 10% contain 25%'
      }}
    >
      <Box
        sx={{
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.1)'
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