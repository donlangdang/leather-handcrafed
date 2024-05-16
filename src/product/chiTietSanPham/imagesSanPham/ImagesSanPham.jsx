import Box from '@mui/material/Box'
import SideBar from './sideBar/SideBar'
import imagesGridAboutUs from '~/apis/imagesGridAboutUs'
import BigImagesBar from './bigImagesBar/BigImagesBar'
import InformationAndPrices from './informationAndPrices/InformationAndPrices'

function ImagesSanPham() {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        position: 'relative',
        display: 'flex',
        padding: '0.5rem',
        gap: 1
      }}
    >
      <SideBar imagesGridAboutUs={imagesGridAboutUs} />
      <BigImagesBar imagesGridAboutUs={imagesGridAboutUs} />
      <InformationAndPrices imagesGridAboutUs={imagesGridAboutUs} />
    </Box>
  )
}

export default ImagesSanPham