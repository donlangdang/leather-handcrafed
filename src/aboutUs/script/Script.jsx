import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Script({ mobile }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: mobile ? '100%' : '70%',
        height: 'auto',
        gap: mobile ? 6 : 2,
        padding: mobile ? '0rem 1rem 8rem 1rem' : '8rem',
        ...(mobile && { flexDirection: 'column' })
      }}
    >
      <Box
        sx={{
          flex: '1',
          width: '100%',
          height: 'auto',
          color: 'white',
          overflow: 'clip'
        }}
      >
        <Typography
          variant={mobile ? 'h5' : 'h4'}
          gutterBottom
          sx={{
            fontWeight:  '500',
            color: '#f7d7c8'
          }}
        >
          We collaborate with brands and agencies to create memorable experiences.
        </Typography>
        <Typography
          variant='subtitle2'
          gutterBottom
          sx={{
            fontWeight:  '500',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginRight: '70%'
          }}
        >
          SAMPLE HEADLINE
        </Typography>
      </Box>
      <Box
        sx={{
          flex: '1',
          width: '100%',
          height: 'auto',
          color: 'white',
          overflow: 'clip'
        }}
      >
        <Typography
          variant='subtitle1'
          gutterBottom
          sx={{
            fontWeight:  '700',
            lineHeight: '1.4',
            fontSize: '1.25rem',
            color: '#f7d7c8'
          }}
        >
            We dwelling elegance do shutters appetite yourself diverted.
        </Typography>
        <Typography
          variant='h5'
          gutterBottom
          sx={{
            fontWeight:  '400',
            lineHeight: '2',
            fontSize: '1rem'
          }}
        >
          The principal reason we continue to adapt and evolve our business model is to ensure that we are meeting our customers’ expectations. One example of this has been to use modern technology and the introduction of the real time tracking our teams using GPS. This ensures our customers get the time they have paid for has been spent at our customers’ homes since this is the most common problem within our industry.
        </Typography>
      </Box>
    </Box>
  )
}

export default Script