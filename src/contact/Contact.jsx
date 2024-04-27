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
        height: mobile ? '110vh' : '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#454545'
      }}
    >
      <Paper
        elevation={24}
        sx={{
          height: mobile ? 'calc(100vh - 4rem)' : '70%',
          width: mobile ? '90%' : '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'clip',
          ...(mobile && {
            flexDirection: 'column'
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