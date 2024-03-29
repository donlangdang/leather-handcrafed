import { Box, Typography } from '@mui/material'
import MyButton from '~/components/navBar/myButtom'

function Featured({ mobile, tablet }) {
  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: mobile || tablet ? '0' : '0 15rem 0 15rem',
        margin: '4rem 0 4rem 0',
        position: 'relative',
        bgcolor: 'rgb(236, 236, 236) ',
        overflow: 'hidden',
        ...(mobile && { flexDirection: 'column' })
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url(http://localhost:5000/src/assets/image/dacbiet.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          flex: 1,
          aspectRatio: '3/4',
          height: 'auto',
          width: '100%'
        }}
      >

      </Box>
      <Box
        sx={{
          flex: 1,
          aspectRatio: '3/4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            width: '50%'
          }}
          variant="h5" align='center'
          gutterBottom
        >
          decor trang trí kết hợp đồ da
        </Typography>
        <Typography
          sx={{
            fontWeight: '500',
            width: '50%'
          }}
          variant="h7" align='center'
          gutterBottom
        >
          chúng tôi thiết kế đồ nội thất và decor kết hợp giữa gỗ và da trên từng sản phẩm
        </Typography>
        <MyButton
          sx={{
            fontSize: '1rem',
            padding: '1rem 1.5rem',
            bgcolor: 'white',
            borderRadius: '3%',
            border: '1px solid white',
            boxSizing: 'content-box',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginTop: '1.5rem',
            '&::after': {
              bottom: '30%',
              width: '70%'
            }
          }}
        >xem ngay</MyButton>
      </Box>
    </Box>
  )
}

export default Featured