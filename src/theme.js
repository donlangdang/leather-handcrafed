import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
        }
      }
    }
  }
})
delete theme.colorSchemes.dark


export default theme