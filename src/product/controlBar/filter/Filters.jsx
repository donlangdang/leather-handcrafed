import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { keyframes } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MyButton from '~/components/navBar/myButtom'


const paperKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

function Filters() {

  const [showMenuFilters, setShowMenuFilters] = useState(false)

  const handleMouseHoverFilters = () => {
    setShowMenuFilters(true)
  }
  const handleMouseLeaveFilters = () => {
    setShowMenuFilters(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <MyButton
        onMouseEnter={handleMouseHoverFilters}
        onMouseLeave={handleMouseLeaveFilters}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontSize: '1rem',
          fontWeight: '400',
          margin: '0'
        }}
      >
        <KeyboardArrowDownIcon fontSize='small' />
        FILTERS
        {showMenuFilters && (
          <Paper
            sx={{
              width: '8rem',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'absolute',
              top: '1.5rem',
              gap: 1,
              animation: `${paperKeyframes} 0.5s ease-in-out`,
              zIndex: '120'
            }}
          >
            <MyButton>Item 1</MyButton>
            <MyButton>Item 2</MyButton>
            <MyButton>Item 3</MyButton>
          </Paper>
        )}
      </MyButton>
    </Box>
  )
}

export default Filters