import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'


function BoxImage() {
  return (
    <Grid
      xs={4}
      sx={{
        bgcolor: 'black',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}
    >
      <Box
        component='img'
        sx={{
          height:'100%',
          width: '100%',
          borderRadius: '10%',
          objectFit: 'cover',
          objectPosition: 'center',
          aspectRatio: '1/1'
        }}
        src='http://localhost:5000/src/assets/image/2.jpg'
      />
    </Grid>
  )
}

export default BoxImage