import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MyButton from '~/components/navBar/myButtom'
import Request from './request/Request'

function ContactUs({ mobile }) {
  return (
    <Box
      sx={{
        width: mobile ? '100%' : '50%',
        height: '100%',
        flex: '1',
        aspectRatio: '3/4'
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: 'column',
          padding: '3rem'
        }}
      >
        <Typography variant= {mobile ? 'h5' : 'h4'}
          sx={{
            fontWeight: '500'
          }}
        >
          Liên Hệ Với Chúng Tôi
        </Typography>
        <Request />
        <Box
          sx={{
            marginTop: '0.35rem'
          }}
        >
          <MyButton
            sx={{
              border: '2px solid black',
              padding: '0.8rem 1.2rem',
              fontWeight: '500',
              fontSize: '0.75rem',
              '&::after': {
                bottom: '30%',
                width: '70%'
              }
            }}
          >
            Gởi Tin Nhắn
          </MyButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactUs