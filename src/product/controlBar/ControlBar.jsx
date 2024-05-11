import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import MyButton from '~/components/navBar/myButtom'

function ControlBar() {

  const [showMenu, setShowMenu] = useState(false)

  const handleMouseHover = () => {
    setShowMenu(true)
  }
  const handleMouseLeave = () => {
    setShowMenu(false)
  }

  return (
    <Box
      sx={{
        height: '3rem',
        padding: '0 1rem 0 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          fontSize: '0.875rem'
        }}
      >
        <Typography>Women</Typography>
        <Typography>/</Typography>
        <Typography>Ready-to-Wear for Women</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap:  2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <MyButton
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
              fontSize: '1rem',
              fontWeight: '400'
            }}
          >
            CATEGORY
            {showMenu && (
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
                  gap: 1
                }}
              >
                <MyButton>Item 1</MyButton>
                <MyButton>Item 2</MyButton>
                <MyButton>Item 3</MyButton>
              </Paper>
            )}
          </MyButton>
        </Box>
        <Typography>FILTERS</Typography>
        <Typography>Sort by: </Typography>
      </Box>
    </Box>
  )
}

export default ControlBar