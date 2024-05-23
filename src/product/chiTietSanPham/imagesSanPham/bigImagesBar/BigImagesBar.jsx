import Box from '@mui/material/Box'

function BigImagesBar({ imagesGridAboutUs }) {
  return (
    <Box
      sx={{
        width: '60%'
      }}
    >
      {imagesGridAboutUs.map((imagesGridAboutU) => (
        <Box
          component='img'
          src={imagesGridAboutU.url}
          sx={{
            width: '100%',
            aspectRatio: '4/3',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          key={imagesGridAboutU.title}
        />
      ))}
    </Box>
  )
}

export default BigImagesBar