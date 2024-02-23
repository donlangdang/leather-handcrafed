import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: '#F5CCA0',
          paper: '#F5CCA0'
        }
      }
    }
  }
})
console.log('theme: ', theme)

export default theme