import MyButton from '~/components/navBar/myButtom'
import { animation } from '~/components/animation/Animation'
import Product from './product/Product'
import Box from '@mui/material/Box'


function ButtonAndProduct({ imageUrl, mobile }) {


  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translate(-50%, 0)',
        // bgcolor: '#333',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textTransform: 'uppercase',
        ...(mobile && { width: '80%' })
      }}
    >
      <Product imageUrl={imageUrl} />
      <MyButton
        sx={{
          fontSize: '0.75rem',
          padding: '1rem 1.5rem',
          bgcolor: 'white',
          borderRadius: '3%',
          border: '1px solid white',
          boxSizing: 'content-box',
          fontWeight: '700',
          '&::after': {
            bottom: '30%',
            width: '70%'
          },
          animation: `${animation.titleKeyFrame} 1.2s ease-in-out 1`
        }}
      >
        KHÁM PHÁ SẢN PHẨM
      </MyButton>
    </Box>
  )
}

export default ButtonAndProduct