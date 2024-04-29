import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { useScrollTrigger } from '@mui/material'
import { Link } from 'react-router-dom'


const leftBars = [
  {
    name: 'Trang Chủ',
    route: '/'
  },
  {
    name: 'Sản Phẩm',
    route: '/'
  },
  {
    name: 'Giới Thiệu',
    route: '/aboutus'
  },
  {
    name: 'Liên Hệ',
    route: '/contact'
  }
]

function ResponsiveMenu() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true
  })

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingTop: '2rem' }}>
        {leftBars.map((leftBar) => (
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '2rem'
            }}
            key={leftBar.name}
            disablePadding
          >
            <Link to={leftBar.route} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItemText primaryTypographyProps={{ style: { fontWeight: '500' } }} primary={leftBar.name} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{ color: trigger ? 'black' : 'white' }}
        />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default ResponsiveMenu