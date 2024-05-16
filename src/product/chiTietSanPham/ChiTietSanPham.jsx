import Box from '@mui/material/Box'
import LinkBar from './linkBar/LinkBar'
import ImagesSanPham from './imagesSanPham/ImagesSanPham'

function ChiTietSanPham() {
  return (
    <Box
      sx={{
        height: 'auto',
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
      <ImagesSanPham />
    </Box>
  )
}

export default ChiTietSanPham