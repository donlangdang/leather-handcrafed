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
        padding: '8px 5px',
        bgcolor: '#994D1C',
        margin: 0,
        border: '1px solid #6B240C',
        '&::after': {
          bottom: '10px',
          width: '90%'
        }
      }}>
    TÌM HIỂU THÊM
    </MyButton>
  </Box>
  )
}

export default Title