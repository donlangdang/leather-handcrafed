import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ContactUs from './contactUs/ContactUs'
import Image from './image/Image'
import { useMediaQuery } from '@mui/material'


function Contact() {

  const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        height: mobile ? '170vh' : '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: mobile ? 'black' : '#454545',
        position: 'relative'
      }}
    >
      <Paper
        elevation={24}
        sx={{
          height: mobile ? 'calc(100% - 4rem)' : '70%',
          width: mobile ? '95%' : '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'clip',
          ...(mobile && {
            flexDirection: 'column',
            position: 'absolute',
            top: '4rem'
          })
        }}
      >
        <ContactUs mobile={mobile} />
        <Image mobile={mobile} />
      </Paper>
    </Box>
  )
}

export default Contact