import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import StraightIcon from '@mui/icons-material/Straight'

function Title({ mobile }) {
  return (
    <Box
      sx={{
        color: '#f7d7c8',
        width: mobile ? '100%' : '50%',
        height: 'auto',
        textAlign: 'center',
        padding: mobile ? '0rem 1rem 8rem 1rem' : '8rem'
      }}
    >
      <Typography
        variant='h2'
        gutterBottom
        sx={{ fontWeight: '500' }}
      >
        1
      </Typography>
      <Divider
        sx={{
          bgcolor: 'white',
          margin: '4rem 0 4rem 0'
        }}
      />
      <Typography
        variant='h2'
        gutterBottom
        sx={{ fontWeight: '500' }}
      >
        We design People Inspired Experiences that create positive change in people&apos;s lives.
      </Typography>
      <StraightIcon
        color='white'
        fontSize='large'
        sx={{
          fontSize: '4rem',
          transform: 'rotate(180deg)',
          margin: '2rem 0 2rem 0'
        }}
      />
      <Typography
        variant='h6'
        gutterBottom
        sx={{
          fontWeight: '500'
        }}
      >
        VIEW PORTFOLIO
      </Typography>
    </Box>
  )
}

export default Title