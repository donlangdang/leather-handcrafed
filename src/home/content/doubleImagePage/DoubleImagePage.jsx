import ImagePage from './ImagePage/ImagePage'
import Box from '@mui/material/Box'
import { useMediaQuery, useScrollTrigger } from '@mui/material'
import { animation } from '~/components/animation/Animation'


function DoubleImagePage({ imageUrl, Threshold }) {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))


  const scrollTrigger = useScrollTrigger({
    target: imageUrl.window ? window() : undefined,
    disableHysteresis: true,
    threshold: Threshold
  })

  return (
    <div className='onscroll'>
      <Box
        sx={{
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '0.5rem 1rem',
          position: 'relative',
          ...(mobile && { flexDirection: 'column' }),
          animation: scrollTrigger ? `${animation.titleKeyFrame} 0.5s ease-in-out 1 forwards` : 'none',
          opacity: 0.3
        }}
      >
        {imageUrl.map((image) => (
          <ImagePage imageUrl={image} mobile={mobile} key={image.title}/>
        ))}
      </Box>
    </div>
  )
}

export default DoubleImagePage
