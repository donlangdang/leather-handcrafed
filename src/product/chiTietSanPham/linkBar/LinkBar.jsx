import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'


function LinkBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '2rem',
        bgcolor: '#f5f5f5',
        padding: '0 0.5rem 0 0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: '500'
        }}
      >
        trang chủ
      </Link>
        /
      <Link
        to='/product'
        style={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: '500'
        }}
      >
        sản phẩm
      </Link>
        /
      <Typography
        sx={{
          fontWeight: '300'
        }}
      >
        tên sản phẩm
      </Typography>
    </Box>
  )
}

export default LinkBar