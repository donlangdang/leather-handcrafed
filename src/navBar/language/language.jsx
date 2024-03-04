import IconButton from '@mui/material/IconButton'
import LanguageIcon from '@mui/icons-material/Language'
import { Box } from '@mui/material'

function Language() {
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
        <LanguageIcon fontSize='large' sx={{ cursor: 'pointer', color: 'white' }} />
      </IconButton>
    </Box>
  )
}

export default Language