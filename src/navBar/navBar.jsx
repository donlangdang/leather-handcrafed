import { Button } from '@mui/material'
import MyButton from './myButtom'
import Box from '@mui/material/Box'


function NavBar() {
  return (
    <Box sx={{
      height: '9vh',
      // backgroundColor: (theme) => theme.colorSchemes.light.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <MyButton>Trang Chủ</MyButton>
      <MyButton>Sản Phẩm</MyButton>
      <MyButton>Giới Thiệu</MyButton>
      <MyButton>Liên Hệ</MyButton>
      <Button>asd</Button>
    </Box>
  )
}

export default NavBar
