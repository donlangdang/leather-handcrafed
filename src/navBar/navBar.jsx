import MyButton from './myButtom'
import Box from '@mui/material/Box'


const headerTitle = ['Trang Chủ', 'Sản Phẩm', 'Giới Thiệu', 'Liên Hệ']

function NavBar() {
  return (
    <Box sx={{
      height: '9vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {headerTitle.map((headerTitle) => (
        <MyButton key={headerTitle}>
          {headerTitle}
        </MyButton>
      ))}
    </Box>
  )
}

export default NavBar
