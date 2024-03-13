import { Box } from '@mui/material'

function Content() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        bgcolor: 'rgb(236, 236, 236)'
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/370428802_6537437939686163_1798569505760996482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wYGNL44BMQoAX8VSNLS&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfChUVr5t78obbU-OPJbk6tSCKJW9l6utwOP26nd0x8lUQ&oe=65F616F3)',
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:hover': {
              transform: 'scale(1.2)'
            }
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: '40%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/370428802_6537437939686163_1798569505760996482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wYGNL44BMQoAX8VSNLS&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfChUVr5t78obbU-OPJbk6tSCKJW9l6utwOP26nd0x8lUQ&oe=65F616F3)',
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&:hover': {
              transform: 'scale(1.2)'
            }
          }}
        ></Box>
      </Box>
    </Box>
  )
}

export default Content