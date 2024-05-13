import Box from '@mui/material/Box'
import productGridImages from '~/apis/productGridImages'
import ImageProduct from './imageProduct/ImageProduct'

function GridProduct() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridAutoRows: '40rem',
        width: '100%',
        gap: 1,
        padding: '0 0.5rem 1rem 0.5rem'
      }}
    >
      {productGridImages.map((productGridImage, index) => (
        <ImageProduct productGridImage={productGridImage} index={index} key={index} />
      ))}
    </Box>
  )
}

export default GridProduct