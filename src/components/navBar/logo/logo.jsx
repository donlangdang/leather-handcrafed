import leatherIcon from '~/assets/leather.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Logo({ trigger }) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: 1,
      paddingLeft: 2,
      fontWeight: '500',
      fontSize: 'large',
      cursor: 'pointer',
      userSelect: 'none',
      flex: 1
    }}
    >
      <Link to='/' style={{ textDecoration: 'none', color: trigger ? 'black' : 'white' }}>
        <SvgIcon component={leatherIcon} fontSize='large' inheritViewBox/>
      </Link>
      <Link to='/' style={{ textDecoration: 'none', color: trigger ? 'black' : 'white' }}>
        GoDa Decor
      </Link>
    </Box>
  )
}

export default Logo