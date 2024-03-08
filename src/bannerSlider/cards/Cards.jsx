import images from '~/apis/images'
import { keyframes } from '@mui/material'
import { Box } from '@mui/material'

const cardKeyFrame = keyframes`
  from {
    opacity: 1;
    transform: translate(100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`


function Cards({ imageUrl, currentImage }) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[(currentImage + 1) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: '50%',
          animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 1
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[(currentImage + 2) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 10% - 20px)',
          animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 2
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[(currentImage + 3) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 20% - 40px)',
          animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 3
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[(currentImage + 4) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 30% - 60px)',
          animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 4
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[(currentImage + 5) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 40% - 80px)',
          animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 5
      </Box>
    </>
  )
}

export default Cards