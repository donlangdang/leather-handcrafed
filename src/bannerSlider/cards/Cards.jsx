import { keyframes } from '@mui/material'
import { Box } from '@mui/material'

const cardKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100%)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`


function Cards({ imageUrl }) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[0].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          boxShadow: '3px 3px 3px #888888',
          position: 'absolute',
          bottom: '50px',
          right: '50%',
          animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`
        }}
      >
        hình 1
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[1].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          boxShadow: '3px 3px 3px #888888',
          position: 'absolute',
          bottom: '50px',
          right: 'calc(50% - 10% - 20px)',
          animation: `${cardKeyFrame} 0.7s ease-in-out 1 forwards`
        }}
      >
        hình 2
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[2].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          boxShadow: '3px 3px 3px #888888',
          position: 'absolute',
          bottom: '50px',
          right: 'calc(50% - 20% - 40px)',
          animation: `${cardKeyFrame} 0.9s ease-in-out 1 forwards`
        }}
      >
        hình 3
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[3].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          boxShadow: '3px 3px 3px #888888',
          position: 'absolute',
          bottom: '50px',
          right: 'calc(50% - 30% - 60px)',
          animation: `${cardKeyFrame} 1.1s ease-in-out 1 forwards`
        }}
      >
        hình 4
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl[4].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          boxShadow: '3px 3px 3px #888888',
          position: 'absolute',
          bottom: '50px',
          right: 'calc(50% - 40% - 80px)',
          animation: `${cardKeyFrame} 1.3s ease-in-out 1 forwards`
        }}
      >
        hình 5
      </Box>
    </>
  )
}

export default Cards