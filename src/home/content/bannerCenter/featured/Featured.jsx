import { Box, Typography } from '@mui/material'
import MyButton from '~/components/navBar/myButtom'

function Featured() {
  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 15rem 0 15rem',
        margin: '5rem 0 5rem 0',
        position: 'relative',
        bgcolor: 'rgb(236, 236, 236) '
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url(https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/335225983_957708238560421_8577306066286279411_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TWKKLCPR4tEAX9MjzlI&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfB3XfSLx1jaFpLXBlen0T0qdKALMCZNN7D4NBis3SNPZA&oe=65FAE1AA)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          flex: 1,
          aspectRatio: '3/4'
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