import Box from '@mui/material/Box'
import images from '~/apis/images'
import MyButton from '~/navBar/myButtom'
import { Typography } from '@mui/material'


function BoxServices({ service }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        height: '100%'
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
          backgroundRepeat: 'no-repeat',
          marginBottom: '2rem'
        }}
      >
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            textTransform: 'uppercase',
            paddingBottom: '2rem',
            margin: '0'
          }}
          variant="h5" align='center'
          gutterBottom
        >
          {service.title}
        </Typography>
        <Box
          sx={{
            paddingBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '90%',
            textAlign: 'center'
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
          >
            {service.description}
          </Typography>
        </Box>
        <MyButton>
          khám phá ngay
        </MyButton>
      </Box>
    </Box>
  )
}

export default BoxServices