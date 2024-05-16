import ButtonBase from '@mui/material/ButtonBase'

function AddToCart() {
  return (
    <ButtonBase
      sx={{
        width: '100%',
        height: '3rem',
        bgcolor: '#e74c3c',
        color: 'white',
        fontWeight: '500',
        fontSize: '1.2rem',
        position: 'relative',
        boxSizing: 'border-box',
        border: '1px solid black',
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
          border: '1px solid black',
          content: '""'
        }
      }}
    >
      THÊM VÀO GIỎ
    </ButtonBase>
  )
}

export default AddToCart