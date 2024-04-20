import Box from '@mui/material/Box'
import BoxImage from './boxImages/BoxImage'


function GridImages() {
  return (
    <Box
      sx={{
        width: '75%',
        height: 'auto'
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gap: 4
        }}
      >
        <BoxImage />
        <BoxImage />
        <BoxImage />
        <BoxImage />
        <BoxImage />
        <BoxImage />
      </Box>
    </Box>
  )
}

export default GridImages