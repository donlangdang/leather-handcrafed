import { ButtonBase, styled } from '@mui/material'


const MyButton = styled(ButtonBase)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'large',
  fontWeight: '500',
  position: 'relative',
  marginLeft: '10px',
  marginRight: '10px',
  '&::after': {
    content: '""',
    height: '2px',
    width: '100%',
    background: '#994D1C',
    borderRadius: '50px',
    position: 'absolute',
    bottom: '1px',
    transform: 'scaleX(0)',
    transition: 'transform 0.2s linear'
  },
  '&:hover::after': {
    transform: 'scaleX(1)'
  }
}))

export default MyButton
