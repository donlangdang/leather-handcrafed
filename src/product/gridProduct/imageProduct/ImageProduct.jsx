import Box from '@mui/material/Box'
import './imageProduct.css'
import { Typography } from '@mui/material'
import MyButton from '~/components/navBar/myButtom'
import { Link } from 'react-router-dom'

function ImageProduct({ productGridImage, index, mobile }) {

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
            gridColumnStart: mobile ? '1' : '3',
            gridColumnEnd: mobile ? '3' : '5',
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
      <Link to={`/product/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Box
          className={mobile ? '': 'parent'}
          sx={{
            height: '100%',
            width: '100%',
            position: 'relative',
            transition: 'height 0.2s',
            bgcolor: 'white',
            boxSizing: 'border-box',
            overflow: mobile ? 'hidden' : 'visible',
            ...(!ImageBannerGridProduct67(index) &&
            !ImageBannerGridProduct1213(index) &&
            {
              '&:hover': {
                height: mobile ? '100%' : '125%',
                zIndex: '100',
                border: '1px solid black'
              }
            }
            ),
            ...(mobile &&
            {
              border: '1px solid black'
            }
            )
          }}
        >
          <Box
            component='img'
            src={productGridImage.url}
            sx={{
              width: '100%',
              height: (mobile && !ImageBannerGridProduct67(index) && !ImageBannerGridProduct1213(index)) ?
                'auto' :
                (mobile ? '20rem' : '40rem'),
              ...(mobile &&
              ImageBannerGridProduct67(index) &&
              ImageBannerGridProduct1213(index) &&
              {
                aspectRatio: 'auto'
              }),
              ...(mobile &&
            {
              aspectRatio: '1/1'
            }),
              objectPosition: 'center',
              objectFit: 'cover'
            }}
          />
          {!ImageBannerGridProduct67(index) &&
          !ImageBannerGridProduct1213(index) &&
          <Box
            className={mobile ? '': 'child'}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              ...(mobile &&
                {
                  display: 'flex'
                }
              )
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: '400',
                marginBottom: mobile ? '1.5rem' : '2rem',
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
      </Link>
    </Box>
  )
}

export default ImageProduct