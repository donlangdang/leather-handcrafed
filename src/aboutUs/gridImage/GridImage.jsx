import Box from '@mui/material/Box'
import BoxImage from './boxImages/BoxImage'
import imagesGridAboutUs from '~/apis/imagesGridAboutUs'


function GridImages() {
  return (
    <Box
      sx={{
        width: '75%',
        height: 'auto'
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gap: 4
        }}
      >
        {imagesGridAboutUs.map((gridImage, index) => (
          <BoxImage index={index} gridImage={gridImage} key={gridImage.title} />
        ))}
      </Box>
    </Box>
  )
}

export default GridImages