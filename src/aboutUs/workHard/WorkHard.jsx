import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'


function WorkHard({ mobile }) {
  return (
    <Box
      sx={{
        color: '#f7d7c8',
        width: mobile ? '100%' : '50%',
        height: 'auto',
        textAlign: 'center',
        marginBottom: '8rem',
        ...(mobile && { padding: '0 1rem 0 1rem' })
      }}
    >
      <Typography
        variant='h2'
        gutterBottom
        sx={{ fontWeight: '500' }}
      >
        2
      </Typography>
      <Divider
        sx={{
          bgcolor: 'white',
          margin: '4rem 0 4rem 0'
        }}
      />
      <Typography
        variant='h2'
        sx={{ fontWeight: '500' }}
      >
        Work Hard
      </Typography>
      <Box
        component='img'
        src='http://localhost:5000/src/assets/image/avatar.jpg'
        sx={{
          height: 'auto',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '5%',
          marginTop: '4rem'
        }}
      />
    </Box>
  )
}

export default WorkHard