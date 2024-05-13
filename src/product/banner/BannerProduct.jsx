import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function BannerProduct({ mobile }) {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        aspectRatio: mobile ? '3/5' : '19/9',
        backgroundImage: 'linear-gradient(0, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(http://localhost:5000/src/assets/image/contentBanner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontWeight: '300'
        }}
        variant={mobile ? 'h4' : 'h1'}
      >
        GIFTS FOR HER
      </Typography>
      <Typography
        sx={{
          color: 'white',
          fontWeight: '400',
          textAlign: 'center'
        }}
        variant='h6'
      >
        Find the perfect Mother&apos;s Day gifts from our selection from GG Marmont shoulder bags to Re-Web sneakers and more.
      </Typography>
    </Box>
  )
}

export default BannerProduct