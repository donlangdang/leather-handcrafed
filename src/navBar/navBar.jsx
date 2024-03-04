import Logo from './logo/logo'
import CenterNavbar from './centerNavbar/centerNavbar'
import { keyframes } from '@mui/material'
import { Box } from '@mui/material'
import Language from './language/language'

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
    <Box
      sx={{
        height: '9vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-betweem',
        position: 'fixed',
        zIndex: '1000',
        color: 'white',
        opacity: 0,
        animation: `${navBarKeyFrame} 1.5s ease-in-out 1 forwards`
      }}>
      <Logo />
      <CenterNavbar />
      <Language />
    </Box>
  )
}

export default NavBar
