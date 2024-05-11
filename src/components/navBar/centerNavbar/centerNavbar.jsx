import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import { useScrollTrigger } from '@mui/material/'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import Paper from '@mui/material/Paper'
import MyButton from '~/components/navBar/myButtom'

function CenterNavbar({ trigger }) {

  const [showMenu, setShowMenu] = React.useState(false)

  const handleMouseHover = () => {
    setShowMenu(true)
  }
  const handleMouseLeave = () => {
    setShowMenu(false)
  }

  return (
    <Box sx={{
      flex: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <Link to='/' style={{ color : trigger ? 'black' : 'white' }}>
        <MyButton
          sx={{
            '&::after': {
              background: trigger ? 'black' : 'white'
            }
          }}
        >
            Trang Chủ
        </MyButton>
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Link to='/product' style={{ color : trigger ? 'black' : 'white' }}>
          <MyButton
            sx={{
              marginRight: 0,
              '&::after': {
                background: trigger ? 'black' : 'white'
              }
            }}
          >
            Sản Phẩm
          </MyButton>
        </Link>
        <IconButton sx={{ paddingRight: 0 }}
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          <KeyboardArrowDownIcon
            sx={{
              cursor: 'pointer',
              color: trigger ? 'black' : 'white'
            }}
            fontSize='small'
          />
          {showMenu && (
            <Paper
              sx={{
                width: '10rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                position: 'absolute',
                top: '2rem',
                gap: 1.5
              }}
            >
              <MyButton>Ví Da, Ví Zip</MyButton>
              <MyButton>Dây Đồng Hồ</MyButton>
              <MyButton>Cặp,Túi xách</MyButton>
              <MyButton>Đồ Decor</MyButton>
            </Paper>
          )}
        </IconButton>
      </Box>
      <Link to='/aboutus' style={{ color : trigger ? 'black' : 'white' }}>
        <MyButton
          sx={{
            '&::after': {
              background: trigger ? 'black' : 'white'
            }
          }}
        >
          Giới Thiệu
        </MyButton>
      </Link>
      <Link to='/contact' style={{ color : trigger ? 'black' : 'white' }}>
        <MyButton
          sx={{
            '&::after': {
              background: trigger ? 'black' : 'white'
            }
          }}
        >
          Liên Hệ
        </MyButton>
      </Link>
    </Box>
  )
}

export default CenterNavbar