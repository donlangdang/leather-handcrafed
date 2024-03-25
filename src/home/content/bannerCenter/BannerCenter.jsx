import Box from '@mui/material/Box'
import Featured from './featured/Featured'
import Servires from './services/Servires'
import { Typography, useMediaQuery } from '@mui/material'
import './testBox.css'

function BannerCenter() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const tablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'lg'))

  return (
    <Box
      sx={{
        width: '100%',
        padding: '0.5rem 1rem'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(0, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(http://localhost:5000/src/assets/image/contentBanner.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          overflow: 'hidden',
          aspectRatio: '16/4'
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            textAlign: 'center'
          }}
          variant={mobile ? 'h5' : (tablet ? 'h3' : 'h1')}
        >
          Goda Decor & Leather Handcrafted
        </Typography>
      </Box>
      <Box
        className='testBox'
        sx={{
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '500',
          marginTop: '4rem',
          fontSize: '2rem'
        }}
      >
        đặc biệt
      </Box>
      <Featured mobile={mobile} tablet={tablet} />
      <Box
        className='testBox'
        sx={{
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '500',
          marginBottom: '4rem',
          fontSize: '2rem'
        }}
      >
        dịch vụ goda
      </Box>
      <Servires mobile={mobile} tablet={tablet} />
    </Box>
  )
}

export default BannerCenter