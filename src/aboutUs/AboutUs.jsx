import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'
import ComponentIcon from './componentIcon/ComponentIcon'
import Biography from './biographi/Biography'
import Script from './script/Script'
import Title from './title/Title'
import GridImages from './gridImage/GridImage'
import WorkHard from './workHard/WorkHard'


function AboutUs() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        bgcolor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingTop: '5rem',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: mobile ? '100%' : '50%',
          height: 'auto',
          gap: 2,
          padding: mobile ? '0rem 1rem 8rem 1rem' : '8rem'
        }}
      >
        <Biography />
        <ComponentIcon />
      </Box>
      <Script mobile={mobile} />
      <Title mobile={mobile} />
      <GridImages mobile={mobile} />
      <WorkHard mobile={mobile} />
    </Box>
  )
}

export default AboutUs