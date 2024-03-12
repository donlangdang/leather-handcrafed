import MyButton from '~/navBar/myButtom'
import { keyframes } from '@mui/material'
import { Box, Typography } from '@mui/material'


const contentKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100%);
    filter: blur(20px)
  }
  to {
    opacity: 1;
    transform: translate(0,0);
    filter: blur(0)
  }
`

function Title({ titleDescription }) {
  return (<Box
    sx={{
      position: 'absolute',
      top: '15%',
      left: '5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      flexDirection: 'column',
      width: '40%',
      height: '50%',
      color: 'white'
    }}
  >
    <Typography
      sx={{ animation: `${contentKeyFrame} 1.3s ease-in-out 1 forwards` }}
      variant="h4" align='center'
      gutterBottom
    >
      {titleDescription?.title}
    </Typography>
    <Typography
      sx={{ animation: `${contentKeyFrame} 1.5s ease-in-out 1 forwards` }}
      variant='h7' align='center'
      gutterBottom
    >
      {titleDescription?.description}
    </Typography>
    <MyButton
      sx={{
        animation: `${contentKeyFrame} 1.7s ease-in-out 1 forwards`,
        padding: '1rem 1.5rem',
        fontSize: '0.75rem',
        bgcolor: 'white',
        fontWeight: '700',
        color: 'black',
        width: 'auto',
        textTransform: 'uppercase',
        boxSizing: 'content-box',
        border: '1px solid white',
        borderRadius: '3%',
        // border: '1px solid black',
        '&::after': {
          bottom: '10px',
          width: '90%'
        }
      }}>
      tìm hiểu thêm
    </MyButton>
  </Box>
  )
}

export default Title