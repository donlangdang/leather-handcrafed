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
  },
  typography: {
    fontFamily: ['"Poppins"', 'sans-serif'].join(', ')
  }
})
// nếu dùng chung http://localhost:5173/ thì phải cẩn thận khi làm các app khác nhau vì khi khác nhau thì sẽ có những thứ từ dự án trước lưu vào local storage hoặc cookies tốt nhất nên đổi port hoặc xóa local storage và cookies nhé
console.log(theme)
// delete theme.colorSchemes.dark


export default theme