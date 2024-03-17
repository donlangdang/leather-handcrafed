import Box from '@mui/material/Box'

function Footer() {
  return (
    <Box
      sx={{
        height: '40vh',
        width: '100%',
        bgcolor: 'black'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '0 15rem 0 15rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            flex: 1
          }}
        >

        </Box>
        <Box
          sx={{
            bgcolor: 'blue',
            flex: 1
          }}
        >

        </Box>
        <Box
          sx={{
            bgcolor: 'white',
            flex: 1
          }}
        >

        </Box>
      </Box>
    </Box>
  )
}

export default Footer