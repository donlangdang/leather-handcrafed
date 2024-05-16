import ButtonBase from '@mui/material/ButtonBase'

function AddToCart() {
  return (
    <ButtonBase
      sx={{
        width: '100%',
        height: '3rem',
        color: 'black',
        bgcolor: '#f5f5f5',
        fontWeight: '500',
        fontSize: '1.2rem',
        position: 'relative',
        boxSizing: 'border-box',
        border: '2px solid black',
        '&::before': {
          content: '"THÊM VÀO GIỎ"',
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          bgcolor: 'black',
          transition: '0.3s ease-in-out',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box'
        },
        '&:hover::before': {
          width: '0',
          content: '""',
          fontSize: '0'
        }
      }}
    >
      THÊM VÀO GIỎ
    </ButtonBase>
  )
}

export default AddToCart