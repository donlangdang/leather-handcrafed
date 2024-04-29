import Box from '@mui/material/Box'
import BoxImage from './boxImages/BoxImage'
import imagesGridAboutUs from '~/apis/imagesGridAboutUs'


function GridImages({ mobile }) {
  return (
    <Box
      sx={{
        width: mobile ? '100%' : '75%',
        height: 'auto',
        marginBottom: '8rem',
        ...(mobile && { padding: '0 1rem 0 1rem' })
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: mobile ? 'auto' : 'auto auto auto',
          gap: 4
        }}
      >
        {imagesGridAboutUs.map((gridImage, index) => (
          <BoxImage mobile={mobile} index={index} gridImage={gridImage} key={gridImage.title} />
        ))}
      </Box>
    </Box>
  )
}

export default GridImages