import Box from '@mui/material/Box'
import BoxServices from './boxServices/BoxServices'

function Servires() {
  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '0 15rem 0 15rem'
      }}
    >
      <BoxServices />
      <BoxServices />
      <BoxServices />
    </Box>
  )
}

export default Servires