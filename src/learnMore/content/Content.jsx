import Box from '@mui/material/Box'
import BoxContent from './boxContent/BoxContent'
import { Typography } from '@mui/material'

function Content() {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: '3',
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        flexDirection: 'column'
      }}
    >
      <Typography
        sx={{
          paddingBottom: '2rem'
        }}
        variant='h4'>
        các sản phẩm của chúng tôi
      </Typography>
      <BoxContent />
    </Box>
  )
}

export default Content