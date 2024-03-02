import React from 'react'
import leatherIcon from '~/assets/leather.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import MyButton from './myButtom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from '@mui/material/IconButton'


// const headerTitle = ['Trang Chủ', 'Sản Phẩm', 'Giới Thiệu', 'Liên Hệ']

function NavBar() {
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
      height: '9vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'rgba(255, 255, 255, 0)',
      position: 'fixed',
      zIndex: '1000'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 1,
        paddingLeft: 2,
        fontWeight: '700',
        fontSize: 'large',
        cursor: 'pointer',
        userSelect: 'none',
        flex: 1
      }}
      >
        <SvgIcon component={leatherIcon} fontSize='large' inheritViewBox
        />
        GoDa Decor
      </Box>
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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        flex: 1,
        paddingRight: 1
      }}
      >
        <IconButton>
          <LanguageIcon fontSize='large' sx={{ cursor: 'pointer', color: 'black' }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default NavBar
