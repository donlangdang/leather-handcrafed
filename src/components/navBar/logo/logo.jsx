import leatherIcon from '~/assets/leather.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import { Box } from '@mui/material'

function Logo() {
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
      <SvgIcon component={leatherIcon} fontSize='large' inheritViewBox
      />
      GoDa Decor
    </Box>
  )
}

export default Logo