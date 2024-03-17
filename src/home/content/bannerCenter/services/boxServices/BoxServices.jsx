import Box from '@mui/material/Box'
import images from '~/apis/images'
import MyButton from '~/navBar/myButtom'


function BoxServices() {
  return (
    <Box
      sx={{
        flex: 1
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          bgcolor: '#333',
          aspectRatio: '1/1',
          backgroundImage: `url(${images[0].url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: '2rem'
        }}
      >
        alignItems
        <MyButton>
          khám phá ngay
        </MyButton>
      </Box>
    </Box>
  )
}

export default BoxServices