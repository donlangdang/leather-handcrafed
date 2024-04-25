import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ContactUs from './contactUs/ContactUs'
import Image from './image/Image'


function Contact() {
  return (
    <Box
      sx={{
        height: '100vh',
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
          height: '70%',
          width: '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ContactUs />
        <Image />
      </Paper>
    </Box>
  )
}

export default Contact