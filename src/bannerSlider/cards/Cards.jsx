import { keyframes } from '@mui/material'
import { Box } from '@mui/material'

const nextCardKeyFrame = keyframes`
  from {
    opacity: 1;
    transform: translate(100%, 0)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`


function Cards({ images, currentImage }) {

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 1) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: '50%',
          animation: `${nextCardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 1
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 2) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 10% - 20px)',
          animation: `${nextCardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 2
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 3) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 20% - 40px)',
          animation: `${nextCardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 3
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 4) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 30% - 60px)',
          animation: `${nextCardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 4
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 5) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '5px solid #6B240C',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 40% - 80px)',
          animation: `${nextCardKeyFrame} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >
        hình 5
      </Box>
      <Box
        sx={{
          width: '60%',
          height: '30%',
          position: 'absolute',
          bgcolor: '#333',
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
              height: '100%',
              bgcolor: '#333',
              flex: '1',
              backgroundImage: `url(${image.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              animation: `${nextCardKeyFrame} 0.5s ease-in-out 1 forwards`
            }}
            key={image.url}
          ></Box>
        ))}
      </Box>
    </>
  )
}

export default Cards