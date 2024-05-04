import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function ControlBar() {
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
        <Typography>CATEGORY</Typography>
        <Typography>FILTERS</Typography>
        <Typography>Sort by: </Typography>
      </Box>
    </Box>
  )
}

export default ControlBar