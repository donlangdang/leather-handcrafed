import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { keyframes, useMediaQuery } from '@mui/material'
import { useInView } from 'react-intersection-observer'


const boxContentKeyframe = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50%)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`


function BoxContent({ API }) {

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        zIndex: '3',
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        flexDirection: 'column',
        padding: '0 1rem 0 1rem',
        paddingBottom: '3rem'
      }}
    >
      <Typography
        sx={{
          paddingBottom: '2rem',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}
        variant={mobile ? 'h5' : 'h3'}>
        {API.title}
      </Typography>
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          gap: '1rem',
          ...(mobile && { flexDirection: 'column' })
        }}
      >
        {inView &&
          <>
            <Box
              sx={{
                height: 'auto',
                width: '100%',
                aspectRatio: '4/3',
                flex: '1',
                border: '2px solid white',
                boxSizing: 'border-box',
                overflow: 'clip',
                animation:  `${boxContentKeyframe} 1.2s ease-in-out 1`
              }}
            >
              <Box
                component='img'
                sx={{
                  width: '100%'
                }}
                src='http://localhost:5000/src/assets/image/contentBanner.jpg'
                alt="Đây là ảnh"
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/3',
                backdropFilter: 'blur(10px)',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid white',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                flex: '1',
                boxSizing: 'border-box',
                overflow: 'clip',
                animation:  `${boxContentKeyframe} 1.2s ease-in-out 1`
              }}
            >
              {API.description}
            </Box>
          </>
        }
      </Box>
    </Box>
  )
}

export default BoxContent