import Box from '@mui/material/Box'
import images from '~/apis/images'


function AboutUs() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '3000px',
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '60%',
          height: 'auto',
          paddingTop: '10vh',
          gap: 4
        }}
      >
        <Box
          sx={{
            color: 'white',
            fontSize: '3rem',
            fontWeight: '500'
          }}
        >Tiểu Sử</Box>
        <Box
          sx={{
            width: '50%',
            aspectRatio: '1/1',
            height: 'auto',
            backgroundImage: `url(${images[0].url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%'
          }}
        />
        <Box></Box>
      </Box>
    </Box>
  )
}

export default AboutUs