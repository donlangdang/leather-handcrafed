import Box from '@mui/material/Box'

function ImageProduct({ productGridImage }) {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        cursor: 'pointer'
      }}
    >
      <Box
        component='img'
        src={productGridImage.url}
        sx={{
          width: '100%',
          height: '100%',
          objectPosition: 'center',
          objectFit: 'cover',
          aspectRatio: '3/4'
        }}
      />
    </Box>
  )
}

export default ImageProduct