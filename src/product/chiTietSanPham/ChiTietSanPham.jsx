import Box from '@mui/material/Box'
import LinkBar from './linkBar/LinkBar'

function ChiTietSanPham() {
  return (
    <Box
      sx={{
        height: '3000px',
        width: '100%'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '4rem',
          bgcolor: 'black'
        }}
      />
      <LinkBar />
    </Box>
  )
}

export default ChiTietSanPham