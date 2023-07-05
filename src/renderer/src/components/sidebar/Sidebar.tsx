import { Inbox, Key, Logout } from '@mui/icons-material'
import { Grid, List } from '@mui/material'
import SidebarItem from '../sidebar-item/SIdebarItem'

const Sidebar = (): JSX.Element => {
  return (
    <Grid container sx={{ height: '100vh' }} direction={'column'} justifyContent={'space-between'}>
      <Grid item>
        <nav aria-label="main mailbox folders">
          <List disablePadding={true}>
            <SidebarItem text={'Messages'} to={'/messages'} icon={<Inbox />} />
            <SidebarItem text={'Keys'} to={'/keys'} icon={<Key />} />
          </List>
        </nav>
      </Grid>
      <Grid item>
        <nav aria-label="main mailbox folders">
          <List disablePadding={true}>
            <SidebarItem text={'Logout'} to={'/logout'} icon={<Logout />} />
          </List>
        </nav>
      </Grid>
    </Grid>
  )
}

export default Sidebar
