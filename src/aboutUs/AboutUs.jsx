import Box from '@mui/material/Box'
import ComponentIcon from './componentIcon/ComponentIcon'
import Biography from './biographi/Biography'


function AboutUs() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '3000px',
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingTop: '5rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '60%',
          height: 'auto',
          gap: 2
        }}
      >
        <Biography />
        <ComponentIcon />
      </Box>
    </Box>
  )
}

export default AboutUs