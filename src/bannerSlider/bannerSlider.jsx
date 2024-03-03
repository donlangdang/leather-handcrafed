import images from '~/apis/images'
import MyButton from '~/navBar/myButtom'
import { Box, ButtonBase, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { keyframes } from '@mui/material'

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
const cardKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 100%)
  }
  to {
    opacity: 1;
    transform: translate(0, 0)
  }
`

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
          backgroundImage: `linear-gradient(0, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${images[1].url})`,
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
          <Typography sx={{ animation: `${contentKeyFrame} 2s ease-in-out 1 forwards` }} variant="h4" align='center' gutterBottom>
            {images[1].title}
          </Typography>
          <Typography sx={{ animation: `${contentKeyFrame} 2.3s ease-in-out 1 forwards` }} variant='h7' align='center' gutterBottom>
            Ở đây chúng tôi làm về đồ da thật thủ công bao gồm túi xách, ví, dây đồng hồ,.... Với kinh nghiệm lâu năm tỉ mỉ và chi tiết từng đường nét. Ngoài ra còn kết hợp Decor nội thất giữa gỗ và da theo yêu cầu và ý thích của khách hàng
          </Typography>
          <MyButton
            sx={{
              animation: `${contentKeyFrame} 2.6s ease-in-out 1 forwards`,
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
        <Box
          sx={{
            backgroundImage: `url(${images[0].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #6B240C',
            // boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: '50%',
            animation: `${cardKeyFrame} 0.5s ease-in-out 1 forwards`
          }}
        >hình 1</Box>
        <Box
          sx={{
            backgroundImage: `url(${images[1].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30%',
            width: '10%',
            border: '5px solid #6B240C',
            // boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 10% - 20px)',
            animation: `${cardKeyFrame} 0.7s ease-in-out 1 forwards`
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
            border: '5px solid #6B240C',
            // boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 20% - 40px)',
            animation: `${cardKeyFrame} 0.9s ease-in-out 1 forwards`
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
            border: '5px solid #6B240C',
            // boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 30% - 60px)',
            animation: `${cardKeyFrame} 1.1s ease-in-out 1 forwards`
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
            border: '5px solid #6B240C',
            // boxShadow: '5px 5px 5px 5px #994D1C',
            position: 'absolute',
            bottom: '50px',
            right: 'calc(50% - 40% - 80px)',
            animation: `${cardKeyFrame} 1.3s ease-in-out 1 forwards`
          }}
        >hình 5</Box>
        <Box
          sx={{
            position: 'absolute',
            right: 'calc(50% + 10% + 20px)',
            bottom: 'calc(15% + 50px)',
            transform: 'translate(0, 50%)',
            animation: `${cardKeyFrame} 0.3s ease-in-out 1 forwards`
          }}
        >
          <ButtonBase
            sx={{ bgcolor: '#994D1C', borderRadius: '50%', border: '1px solid #6B240C', color: 'white' }}
          >
            <ChevronLeftIcon fontSize='large'/>
          </ButtonBase>
          <ButtonBase
            sx={{ bgcolor: '#994D1C', borderRadius: '50%', border: '1px solid #6B240C', color: 'white' }}
          >
            <ChevronRightIcon fontSize='large'/>
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  )
}

export default bannerSlider