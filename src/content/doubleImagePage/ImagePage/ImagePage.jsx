import Typography from '@mui/material/Typography'
import MyButton from '~/navBar/myButtom'
import { Box, keyframes } from '@mui/material'


const imageKeyFrame = keyframes`
  to {
    transform: scale(1.1)
  }
`
function ImagePage({ imageUrl }) {
  return (
    <Box
      sx={{
        aspectRatio: '3/4',
        overflow: 'hidden',
        zIndex: 0,
        position: 'relative'
      }}
    >
      <Box
        sx={{
          '&:hover': {
            animation: `${imageKeyFrame} 0.3s ease-in-out 1 forwards`
          }
        }}
      >
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
          <Typography
            sx={{
              color: 'white'
            }}
            variant="h4" align='center'
            gutterBottom
          >
            {imageUrl.title}
          </Typography>
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
              }
            }}
          >
            KHÁM PHÁ SẢN PHẨM
          </MyButton>
        </Box>
        <Box
          component='img'
          src={imageUrl.url}
          alt="Đây là ảnh"
          sx={{
            width: '100%',
            height: '100%'
          }}
        />
      </Box>
    </Box>
  )
}

export default ImagePage