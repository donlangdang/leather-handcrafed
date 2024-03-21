import { animation } from '~/components/animation/Animation'
import Typography from '@mui/material/Typography'
import { useScrollTrigger } from '@mui/material'

function Product({ imageUrl }) {

  // const trigger = useScrollTrigger()

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