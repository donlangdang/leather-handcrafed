import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import BannerProduct from './banner/BannerProduct'
import ControlBar from './controlBar/ControlBar'
import GridProduct from './gridProduct/GridProduct'

function Product() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%'
      }}
    >
      <BannerProduct mobile={mobile} />
      <ControlBar mobile={mobile} />
      <GridProduct mobile={mobile} />
    </Box>
  )
}

export default Product