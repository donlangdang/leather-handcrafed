import React from 'react'
import MyButton from '~/navBar/myButtom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function CenterNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    // console.log(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      flex: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <MyButton>Trang Chủ</MyButton>
      <MyButton
        // id="basic-menu-items"
        // aria-controls={open ? 'my-button-items' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sản Phẩm
        <KeyboardArrowDownIcon fontSize='small' />
      </MyButton>
      <Menu
        // id="my-button-items"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-menu-items'
        // }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MyButton>Ví Da, Ví Zip</MyButton>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MyButton>Dây Đồng Hồ</MyButton>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MyButton>Cặp,Túi xách</MyButton>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MyButton>Đồ Decor</MyButton>
        </MenuItem>
      </Menu>
      <MyButton>Giới Thiệu</MyButton>
      <MyButton>Liên Hệ</MyButton>
    </Box>
  )
}

export default CenterNavbar