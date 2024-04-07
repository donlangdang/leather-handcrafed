import Box from '@mui/material/Box'
import ComponentIcon from './componentIcon/ComponentIcon'
import Biography from './biographi/Biography'
import Script from './script/Script'
import Title from './title/Title'
import GridImages from './gridImage/GridImage'


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
          width: '50%',
          height: 'auto',
          gap: 2,
          paddingBottom: '8rem'
        }}
      >
        <Biography />
        <ComponentIcon />
      </Box>
      <Script />
      <Title />
      <GridImages />
    </Box>
  )
}

export default AboutUs