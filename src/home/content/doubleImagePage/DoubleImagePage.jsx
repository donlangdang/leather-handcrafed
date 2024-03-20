import ImagePage from './ImagePage/ImagePage'
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'


function DoubleImagePage({ imageUrl }) {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
        position: 'relative',
        ...(mobile && { flexDirection: 'column' })
      }}
    >
      {imageUrl.map((image) => (
        <ImagePage imageUrl={image} mobile={mobile} key={image.title}/>
      ))}
    </Box>
  )
}

export default DoubleImagePage