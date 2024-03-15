import ImagePage from './ImagePage/ImagePage'
import { Box } from '@mui/material'


function DoubleImagePage({ imageUrl }) {
  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
        position: 'relative'
      }}
    >
      {imageUrl.map((image) => (
        <ImagePage imageUrl={image} key={image.title}/>
      ))}
    </Box>
  )
}

export default DoubleImagePage