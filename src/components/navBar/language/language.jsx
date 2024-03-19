import IconButton from '@mui/material/IconButton'
import { useMediaQuery, useScrollTrigger } from '@mui/material/'
import LanguageIcon from '@mui/icons-material/Language'
// import theme from '~/theme'
import Box from '@mui/material/Box'
import ResponsiveMenu from './responsiveLayout/ResponsiveMenu'

function Language() {

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true
  })
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        flex: 1,
        paddingRight: 1
      }}
    >
      {mobile ?
        <ResponsiveMenu /> :
        <IconButton>
          <LanguageIcon fontSize='large' sx={{ cursor: 'pointer', color: trigger ? 'black' : 'white' }} />
        </IconButton>
      }
    </Box>
  )
}

export default Language