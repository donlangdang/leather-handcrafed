import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from '@mui/material/Link'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'


const componentIcon = [
  {
    id: 1,
    component: <FacebookIcon fontSize='large' sx={{ color: 'white' }} />
  },
  {
    id: 2,
    component: <XIcon fontSize='large' sx={{ color: 'white' }} />
  },
  {
    id: 3,
    component: <InstagramIcon fontSize='large' sx={{ color: 'white' }} />
  }
]

function ComponentIcon() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      {componentIcon.map((components) =>
        (
          <Link
            href='https://www.facebook.com/don.phaolo/'
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
            key={components.id}
          >
            {components.component}
          </Link>
        )
      )}
    </Box>
  )
}

export default ComponentIcon