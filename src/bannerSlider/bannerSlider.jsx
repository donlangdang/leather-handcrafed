import images from '~/apis/images'
import MyButton from '~/navBar/myButtom'
import { Box, Typography } from '@mui/material'


function bannerSlider() {
  return (
    <Box sx={{
      aspectRatio: '16/9',
      top: '0',
      zIndex: 0,
      position: 'relative'
    }}
    >
      <Box
        sx={{
          backgroundImage: `url(${images[1].url})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            // transform: 'translate(0,-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            flexDirection: 'column',
            width: '40%',
            height: '50%'
          }}
        >
          <Typography variant="h4" align='center' gutterBottom>
            {images[1].title}
          </Typography>
          <Typography variant='h7' align='center' gutterBottom>
            Ở đây chúng tôi làm về đồ da thật thủ công bao gồm túi xách, ví, dây đồng hồ,.... Với kinh nghiệm lâu năm tỉ mỉ và chi tiết từng đường nét. Ngoài ra còn kết hợp Decor nội thất giữa gỗ và da theo yêu cầu và ý thích của khách hàng
          </Typography>
          <MyButton
            sx={{
              padding: '8px 5px',
              bgcolor: '#F5CCA0',
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
        <Box
          sx={{
            backgroundImage: `url(${images[0].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #F5CCA0',
            boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: '50%'
          }}
        ></Box>
        <Box
          sx={{
            backgroundImage: `url(${images[1].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #F5CCA0',
            boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 10% - 20px)'
          }}
        >hình 2</Box>
        <Box
          sx={{
            backgroundImage: `url(${images[2].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #F5CCA0',
            boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 20% - 40px)'
          }}
        >hình 3</Box>
        <Box
          sx={{
            backgroundImage: `url(${images[3].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #F5CCA0',
            boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 30% - 60px)'
          }}
        >hình 4</Box>
        <Box
          sx={{
            backgroundImage: `url(${images[4].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #F5CCA0',
            boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 40% - 80px)'
          }}
        >hình 5</Box>
      </Box>
    </Box>
  )
}

export default bannerSlider