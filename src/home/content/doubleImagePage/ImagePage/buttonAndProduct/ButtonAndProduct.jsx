import MyButton from '~/components/navBar/myButtom'
import { animation } from '~/components/animation/Animation'
import { Box, useScrollTrigger } from '@mui/material'
import Product from './product/Product'


function ButtonAndProduct({ imageUrl }) {

  const trigger = useScrollTrigger()

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
        textTransform: 'uppercase'
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
          animation: trigger ? `${animation.titleKeyFrame} 1.2s ease-in-out 1 forwards` : 'none'
        }}
      >
        KHÁM PHÁ SẢN PHẨM
      </MyButton>
    </Box>
  )
}

export default ButtonAndProduct