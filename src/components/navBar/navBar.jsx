import Logo from './logo/logo'
import CenterNavbar from './centerNavbar/centerNavbar'
import Language from './language/language'
import { animation } from '~/components/animation/Animation'
import { useScrollTrigger, useMediaQuery } from '@mui/material'
import { Box } from '@mui/material'


function NavBar() {

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true
  })

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        height: '9vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        zIndex: '1000',
        opacity: 0,
        animation: trigger ? `${animation.navBarScrollKeyFrame} 0.5s ease-in-out 1 forwards` : `${animation.navBarKeyFrame} 0.5s ease-in-out 1 forwards`,
        // bgcolor: trigger ? 'white' : 'rgba(0, 0, 0, 0)',
        // color: trigger ? 'black' : 'white'
        bgcolor: { xs: 'red', md: 'green', lg: 'blue' },
        color: 'white'
      }}>
      <Logo />
      {mobile ? <></> : <CenterNavbar /> }
      <Language />
    </Box>
  )
}

export default NavBar
