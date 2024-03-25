import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { useScrollTrigger } from '@mui/material'

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
      <List>
        {['Trang Chủ', 'Sản Phẩm', 'Giới Thiệu', 'Liên Hệ'].map((text, index) => {
          if (index === 0) {
            <ListItem key={text} disablePadding>
              <ListItemButton href='/'>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          }
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        }
        )}
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