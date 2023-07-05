import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const SidebarItem = ({
  text,
  to,
  icon
}: {
  text: string
  to: string
  icon: JSX.Element
}): JSX.Element => {
  return (
    <Link className="link" to={to}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default SidebarItem
