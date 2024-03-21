import { animation } from '~/components/animation/Animation'
import Typography from '@mui/material/Typography'

function Product({ imageUrl }) {


  return (
    <Typography
      sx={{
        color: 'white',
        animation: `${animation.titleKeyFrame} 1.5s ease-in-out 1`
      }}
      variant="h4" align='center'
      gutterBottom
    >
      {imageUrl.title}
    </Typography>
  )
}

export default Product