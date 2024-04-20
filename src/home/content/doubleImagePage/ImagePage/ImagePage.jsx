import ButtonAndProduct from './buttonAndProduct/ButtonAndProduct'
import { Box, keyframes } from '@mui/material'
import { useInView } from 'react-intersection-observer'


const cardKeyframes = keyframes`
  from {
    opacity: 0;
    transform: scale(1.2)
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
`
function ImagePage({ imageUrl, mobile }) {

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

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
        ref={ref}
        sx={{
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }}
      >
        <ButtonAndProduct imageUrl={imageUrl} mobile={mobile} />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            animation: inView ? `${cardKeyframes} 0.5s ease-in-out 1 forwards` : '',
            transform: 'scale(1.2)',
            // transition: 'transform 0.5s'
          }}
          component='img'
          src={imageUrl.url}
          alt="Đây là ảnh"
        />
      </Box>
    </Box>
  )
}

export default ImagePage