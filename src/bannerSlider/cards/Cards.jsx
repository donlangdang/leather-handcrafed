import { Box } from '@mui/material'


function Cards({ images, currentImage, currentCard }) {

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
          border: '2px solid white',
          borderRadius: '3%',
          position: 'absolute',
          bottom: '5%',
          right: '50%',
          animation: `${currentCard} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >

      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 2) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '2px solid white',
          borderRadius: '3%',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 10% - 20px)',
          animation: `${currentCard} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >

      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 3) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '2px solid white',
          borderRadius: '3%',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 20% - 40px)',
          animation: `${currentCard} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >

      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 4) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '2px solid white',
          borderRadius: '3%',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 30% - 60px)',
          animation: `${currentCard} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >

      </Box>
      <Box
        sx={{
          backgroundImage: `url(${images[(currentImage + 5) % images.length].url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '30%',
          width: '10%',
          border: '2px solid white',
          borderRadius: '3%',
          position: 'absolute',
          bottom: '5%',
          right: 'calc(50% - 40% - 80px)',
          animation: `${currentCard} 0.5s ease-in-out 1 forwards`,
          cursor: 'pointer'
        }}
      >

      </Box>
    </>
  )
}

export default Cards