import Box from '@mui/material/Box'
import BannerProduct from './banner/BannerProduct'
import ControlBar from './controlBar/ControlBar'
import GridProduct from './gridProduct/GridProduct'

function Product() {
  return (
    <Box
      sx={{
        height: '3000px',
        width: '100%'
      }}
    >
      <BannerProduct />
      <ControlBar />
      <GridProduct />
    </Box>
  )
}

export default Product