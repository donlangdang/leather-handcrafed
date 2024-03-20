import MyButton from '~/components/navBar/myButtom'
import { animation } from '~/components/animation/Animation'
import { Box, Typography } from '@mui/material'


function Title({ titleDescription, mobile }) {
  return (<Box
    sx={{
      position: 'absolute',
      top: mobile ? '50%' : '15%',
      left: mobile ? '50%' : '5%',
      ...(mobile && { transform: 'translate(-50%, -50%)' }),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      flexDirection: 'column',
      width: mobile ? '90%' : '40%',
      height: mobile ? '90%' : '50%',
      color: 'white',
      gap: 1
    }}
  >
    <Typography
      sx={{ animation: `${animation.titleKeyFrame} 1.3s ease-in-out 1 forwards` }}
      variant="h5" align='center'
      gutterBottom
    >
      {titleDescription?.title}
    </Typography>
    <Typography
      sx={{ animation: `${animation.titleKeyFrame} 1.5s ease-in-out 1 forwards` }}
      variant='subtitle1' align='center'
      gutterBottom
    >
      {titleDescription?.description}
    </Typography>
    <MyButton
      sx={{
        animation: `${animation.titleKeyFrame} 1.7s ease-in-out 1 forwards`,
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
          bottom: '30%',
          width: '70%'
        }
      }}>
      tìm hiểu thêm
    </MyButton>
  </Box>
  )
}

export default Title