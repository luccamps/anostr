import { createBrowserRouter } from 'react-router-dom'
import Keys from './pages/Keys'
import Messages from './pages/Messages'
import Main from './pages/Main'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/keys',
        element: <Keys />
      },
      {
        path: '/messages',
        element: <Messages />
      }
    ]
  }
])

export default AppRouter
