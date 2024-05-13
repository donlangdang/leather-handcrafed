import Box from '@mui/material/Box'
import './imageProduct.css'
import { Typography } from '@mui/material'
import MyButton from '~/components/navBar/myButtom'

function ImageProduct({ productGridImage, index }) {

  const ImageBannerGridProduct67 = (index) => {
    if ((index === 6) && ((index + 1) === 7)) {
      return true
    }
    else {
      return false
    }
  }
  const ImageBannerGridProduct1213 = (index) => {
    if ((index === 11) && ((index + 1) === 12)) {
      return true
    }
    else {
      return false
    }
  }

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        cursor: 'pointer',
        ...(ImageBannerGridProduct67(index) &&
          {
            gridColumnStart: '3',
            gridColumnEnd: '5',
            cursor: 'default'
          }
        ),
        ...(ImageBannerGridProduct1213(index) &&
          {
            gridColumnStart: '1',
            gridColumnEnd: '3',
            cursor: 'default'
          }
        )
      }}
    >
      <Box
        className="parent"
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          transition: 'height 0.2s',
          bgcolor: 'white',
          boxSizing: 'border-box',
          ...(!ImageBannerGridProduct67(index) &&
            !ImageBannerGridProduct1213(index) &&
            {
              '&:hover': {
                height: '125%',
                zIndex: '100',
                border: '2px solid black'
              }
            }
          )
        }}
      >
        <Box
          component='img'
          src={productGridImage.url}
          sx={{
            width: '100%',
            height: '40rem',
            objectPosition: 'center',
            objectFit: 'cover'
          }}
        />
        {!ImageBannerGridProduct67(index) &&
          !ImageBannerGridProduct1213(index) &&
            <Box
              className="child"
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: '400',
                  marginBottom: '2.5rem',
                  textTransform: 'uppercase'
                }}
              >
                {productGridImage.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '300',
                  fontSize: '1.5rem'
                }}
              >
                {productGridImage.price}
              </Typography>
              <MyButton
                sx={{
                  fontSize: '1rem'
                }}
              >
                Shop This
              </MyButton>
            </Box>
        }
      </Box>
    </Box>
  )
}

export default ImageProduct