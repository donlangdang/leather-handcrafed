import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import BoxImage from './boxImages/BoxImage'


function GridImages() {
  return (
    <Box
      sx={{
        width: '75%',
        height: 'auto',
        overflow: 'clip'
      }}
    >
      <Grid
        container
        spacing={4}
      >
        <BoxImage />
        <BoxImage />
        <BoxImage />
        <BoxImage />
        <BoxImage />
        <BoxImage />
      </Grid>
    </Box>
  )
}

export default GridImages