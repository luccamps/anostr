import { Container, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import './Main.scss'

const Main = (): JSX.Element => {
  return (
    <Container sx={{ height: '100vh', p: 0 }}>
      <Grid container sx={{ height: '100vh' }}>
        <Grid item sx={{ width: '200px', bgcolor: 'background.paper' }}>
          <Sidebar />
        </Grid>
        <Grid item mobile sx={{ bgcolor: 'warning.main' }}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main
