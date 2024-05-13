import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Filters from './filter/Filters'
import Category from './category/Category'


function ControlBar({ mobile }) {

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
          gap: 1,
          fontSize: '0.875rem'
        }}
      >
        <Typography>Women</Typography>
        {!mobile &&
          <>
            <Typography>/</Typography>
            <Typography>Ready-to-Wear for Women</Typography>
          </>
        }
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap:  1
        }}
      >
        <Typography>Sort by: </Typography>
        <Category />
        <Filters />
      </Box>
    </Box>
  )
}

export default ControlBar