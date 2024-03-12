import IconButton from '@mui/material/IconButton'
import { useScrollTrigger } from '@mui/material/'
import LanguageIcon from '@mui/icons-material/Language'
import { Box } from '@mui/material'

function Language() {

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true
  })

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
      <IconButton>
        <LanguageIcon fontSize='large' sx={{ cursor: 'pointer', color: trigger ? 'black' : 'white' }} />
      </IconButton>
    </Box>
  )
}

export default Language