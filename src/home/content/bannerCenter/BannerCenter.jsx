import Box from '@mui/material/Box'

function BannerCenter() {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '16/4',
        padding: '1rem'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(0, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(http://localhost:5000/src/assets/image/contentBanner.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem'
        }}
      >
        Goda Decor & Leather Handcrafted
      </Box>
    </Box>
  )
}

export default BannerCenter