import Box from '@mui/material/Box'
import Banner from './banner/Banner'
import Content from './content/Content'


function LearnMore() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflowX: 'clip',
        width: '100%',
        height: 'auto',
        bgcolor: 'black'
      }}
    >
      <Banner />
      <Content />
    </Box>
  )
}

export default LearnMore