import IconButton from '@mui/material/IconButton'
import Logo from './logo/logo'
import CenterNavbar from './centerNavbar/centerNavbar'
import LanguageIcon from '@mui/icons-material/Language'
import { keyframes } from '@mui/material'
import { Box } from '@mui/material'

const navBarKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -9vh);
    filter: blur(33px)
  }
  to {
    opacity: 1;
    transform: translate(0,0);
    filter: blur(0)
  }
`

function NavBar() {

  return (
    <Box sx={{
      height: '9vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: '1000',
      color: 'white',
      opacity: 0,
      animation: `${navBarKeyFrame} 1.5s ease-in-out 1 forwards`
    }}>
      <Logo />
      <CenterNavbar />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          flex: 1,
          paddingRight: 1
        }}
      >
        <IconButton>
          <LanguageIcon fontSize='large' sx={{ cursor: 'pointer', color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default NavBar
