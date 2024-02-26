import { ButtonBase, styled } from '@mui/material'


const MyButton = styled(ButtonBase)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'medium',
  padding: '10px 20px',
  margin: '4px 8px',
  fontWeight: 'bold',
  position: 'relative',
  color: '#6B240C',
  '&::after': {
    content: '""',
    height: '2px',
    width: '100%',
    background: '#994D1C',
    borderRadius: '50px',
    position: 'absolute',
    bottom: '4px',
    transform: 'scaleX(0)',
    transition: 'transform 0.2s linear'
  },
  '&:hover::after': {
    transform: 'scaleX(1)'
  }
}))

export default MyButton
