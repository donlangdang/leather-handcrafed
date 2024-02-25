import React from 'react'
import MyButton from './myButtom'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ReactComponent as leatherIcon } from '../../src/assets/leather.svg'
import SvgIcon from '@mui/material/SvgIcon'


// const headerTitle = ['Trang Chủ', 'Sản Phẩm', 'Giới Thiệu', 'Liên Hệ']

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    // console.log(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      height: '9vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#F5CCA0',
      gap: 0
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        // position: 'absolute',
        // width: '100%',
        gap: 200
      }}
      >
        asasd
        <SvgIcon component={leatherIcon} fontSize='mdeium' inheritViewBox sx={{ color: '#6B240C' }} />
      </Box>
      <MyButton>Trang Chủ</MyButton>
      <MyButton
        // id="basic-menu-items"
        // aria-controls={open ? 'my-button-items' : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sản Phẩm
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

export default NavBar
