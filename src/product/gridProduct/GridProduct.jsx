import Box from '@mui/material/Box'
import productGridImages from '~/apis/productGridImages'
import ImageProduct from './imageProduct/ImageProduct'

function GridProduct() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        width: '100%',
        gap: 1
      }}
    >
      {productGridImages.map((productGridImage) => (
        <ImageProduct productGridImage={productGridImage} key={productGridImage.url} />
      ))}
    </Box>
  )
}

export default GridProduct