import React from 'react'
import MyButton from './myButtom'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'


// const headerTitle = ['Trang Chủ', 'Sản Phẩm', 'Giới Thiệu', 'Liên Hệ']

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    // console.log(e)
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      height: '9vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <MyButton>Trang Chủ</MyButton>
      <MyButton
        id="basic-menu-items"
        aria-controls={open ? 'my-button-items' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sản Phẩm
      </MyButton>
      <Menu
        id="my-button-items"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-menu-items'
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText>Ví Da</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Dây Đồng Hồ</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Túi xách</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Đồ Deco</ListItemText>
        </MenuItem>
      </Menu>
      <MyButton>Giới Thiệu</MyButton>
      <MyButton>Liên Hệ</MyButton>
      <button onClick={e => {
        console.log(e)// React event object
      }} />
    </Box>
  )
}

export default NavBar
