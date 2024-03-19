import IconButton from '@mui/material/IconButton'
import { useMediaQuery, useScrollTrigger } from '@mui/material/'
import LanguageIcon from '@mui/icons-material/Language'
// import theme from '~/theme'
import Box from '@mui/material/Box'

function Language() {

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true
  })
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  console.log('🚀 ~ Language ~ mobile:', mobile)

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
        <Box sx={{ bgcolor: 'blue', height: '100%', width: '100%' }}>as</Box> :
        <IconButton>
          <LanguageIcon fontSize='large' sx={{ cursor: 'pointer', color: trigger ? 'black' : 'white' }} />
        </IconButton>
      }
    </Box>
  )
}

export default Language