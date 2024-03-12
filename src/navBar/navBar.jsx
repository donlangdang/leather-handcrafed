import Logo from './logo/logo'
import CenterNavbar from './centerNavbar/centerNavbar'
import { keyframes, useScrollTrigger } from '@mui/material'
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
const navBarScrollKeyFrame = keyframes`
  from {
    opacity: 0;
    filter: blur(10px)
  }
  to {
    opacity: 1;
    filter: blur(0)
  }
`

function NavBar() {

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true
  })

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
        opacity: 0,
        animation: trigger ? `${navBarScrollKeyFrame} 0.5s ease-in-out 1 forwards` : `${navBarKeyFrame} 0.5s ease-in-out 1 forwards`,
        bgcolor: trigger ? 'white' : 'rgba(0, 0, 0, 0)',
        color: trigger ? 'black' : 'white'
      }}>
      <Logo />
      <CenterNavbar />
      <Language />
    </Box>
  )
}

export default NavBar
