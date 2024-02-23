import { ButtonBase, styled } from '@mui/material'


const MyButton = styled(ButtonBase)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'medium',
  padding: '4px 8px',
  margin: '10px 20px',
  fontWeight: 'bold',
  position: 'relative',
  '&::after': {
    content: '""',
    height: '2px',
    width: '0px',
    background: '#994D1C',
    position: 'absolute',
    bottom: '0px',
    left: '0',
    transition: 'all 0.4s ease-in-out'
  },
  '&:hover::after': {
    width: '100%'
  }
}))

export default MyButton
