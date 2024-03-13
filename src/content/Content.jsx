import { Box, keyframes } from '@mui/material'


const imageKeyFrame = keyframes`
  to {
    transform: scale(1.1)
  }
`

function Content() {
  return (
    <Box
      sx={{
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          aspectRatio: '3/4',
          overflow: 'hidden'
        }}
      >
        <Box
          component='img'
          src='https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/370428802_6537437939686163_1798569505760996482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wYGNL44BMQoAX8VSNLS&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfChUVr5t78obbU-OPJbk6tSCKJW9l6utwOP26nd0x8lUQ&oe=65F616F3'
          sx={{
            width: '100%',
            height: '100%',
            '&:hover': {
              animation: `${imageKeyFrame} 0.3s ease-in-out 1 forwards`
            }
          }}
        />
      </Box>
      <Box
        sx={{
          aspectRatio: '3/4',
          overflow: 'hidden'
        }}
      >
        <Box
          component='img'
          src='https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/366945492_6484370364992921_7237003014560211327_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4H4nWEjJerMAX-07bjm&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfAVkcPFqe0uGn6tVNqrRe9V8fCMMP2PFEUOlq4CUOtGIg&oe=65F72424'
          sx={{
            width: '100%',
            height: '100%',
            '&:hover': {
              animation: `${imageKeyFrame} 0.3s ease-in-out 1 forwards`
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default Content