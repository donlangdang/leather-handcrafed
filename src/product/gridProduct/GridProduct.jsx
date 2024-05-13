import Box from '@mui/material/Box'
import productGridImages from '~/apis/productGridImages'
import ImageProduct from './imageProduct/ImageProduct'

function GridProduct({ mobile }) {

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: mobile ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
        gridAutoRows: mobile ? '20rem' : '40rem',
        width: '100%',
        gap: 1,
        padding: mobile ? '0 0.5rem 0.5rem 0.5rem' : '0 0.5rem 11rem 0.5rem'
      }}
    >
      {productGridImages.map((productGridImage, index) => (
        <ImageProduct
          productGridImage={productGridImage}
          index={index}
          key={index}
          mobile={mobile}
        />
      ))}
    </Box>
  )
}

export default GridProduct