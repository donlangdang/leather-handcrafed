import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

function Biography() {
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: '#f7d7c8',
          textTransform: 'uppercase'
        }}
      >
        Tiểu Sử
      </Typography>
      <Box
        sx={{
          width: '40%',
          aspectRatio: '1/1',
          height: 'auto',
          backgroundImage: 'url(http://localhost:5000/src/assets/image/avatar.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '50%'
        }}
      />
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: '#f7d7c8',
          textTransform: 'uppercase'
        }}
      >
        đinh công đôn
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          color: '#999999',
          lineHeight: '1.8',
          fontWeight: '300',
          textAlign: 'justify'
        }}
      >
        Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eget gravida cum sociis natoque.
      </Typography>
    </>
  )
}

export default Biography