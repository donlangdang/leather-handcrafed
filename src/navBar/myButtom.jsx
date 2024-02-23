import { ButtonBase, styled } from '@mui/material'


const MyButton = styled(ButtonBase)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'medium',
  padding: '16px'
}))

export default MyButton
