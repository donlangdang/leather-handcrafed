import Box from '@mui/material/Box'

function BannerProduct() {
  return (
    <Box
      component='img'
      sx={{
        height: 'auto',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        aspectRatio: '19/9'
      }}
      src='http://localhost:5000/src/assets/image/contentBanner.jpg'
    />
  )
}

export default BannerProduct